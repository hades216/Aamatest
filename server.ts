import express from 'express';
import { createServer as createViteServer } from 'vite';
import { db } from './src/db/index.ts';
import { galleryItems, registrations, users, siteContent } from './src/db/schema.ts';
import { eq } from 'drizzle-orm';
import { adminAuth } from './src/lib/firebase-admin.ts';

// In-memory fallback storage when DATABASE_URL is not connected or offline
const memoryGallery = [
  {
    id: "1",
    category: "workshops",
    title: "1:1 Live Lip Sculpting & Vermilion Threading",
    location: "Lahore Flagship Campus",
    date: "Cohort 27",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200",
    caption: "Delegates performing supervised micro-cannula vermilion augmentation on live clinical model.",
    createdAt: new Date()
  },
  {
    id: "2",
    category: "cases",
    title: "Liquid Rhinoplasty Dorsal Camouflage",
    location: "Karachi Center of Excellence",
    date: "Masterclass Series",
    image: "https://images.unsplash.com/photo-1512290900672-1f4a4752c00d?auto=format&fit=crop&q=80&w=1200",
    caption: "Immediate 15-minute non-surgical hump camouflage using High G-prime hyaluronic acid.",
    createdAt: new Date()
  },
  {
    id: "3",
    category: "convocation",
    title: "Fellowship Convocation & UK CPD Pinning Ceremony",
    location: "AAMA Grand Auditorium",
    date: "Spring Batch",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200",
    caption: "Over 35 registered doctors awarded Board Fellowship in Clinical Aesthetic Medicine (FAM).",
    createdAt: new Date()
  }
];

const memoryRegistrations: any[] = [];

async function startServer() {
  const app = express();
  app.use(express.json({ limit: '20mb' }));
  app.use(express.urlencoded({ limit: '20mb', extended: true }));

  // API Routes
  app.get('/api/health', (req, res) => {
    res.json({ status: 'healthy', database: process.env.DATABASE_URL ? 'configured' : 'in-memory-fallback' });
  });

  // Upload Image Endpoint
  app.post('/api/upload-image', (req, res) => {
    try {
      const { image } = req.body;
      if (!image) return res.status(400).json({ error: 'No image provided' });
      res.json({ success: true, url: image });
    } catch (err) {
      console.error('Error in /api/upload-image:', err);
      res.status(500).json({ error: 'Failed to process image upload' });
    }
  });

  // Get gallery items
  app.get('/api/gallery', async (req, res) => {
    try {
      if (!process.env.DATABASE_URL) {
        return res.json(memoryGallery);
      }
      const items = await db.select().from(galleryItems).orderBy(galleryItems.createdAt);
      res.json(items.length > 0 ? items : memoryGallery);
    } catch (error: any) {
      console.warn('Database offline, using memory gallery fallback:', error?.message || error);
      res.json(memoryGallery);
    }
  });

  // Add gallery item
  app.post('/api/gallery', async (req, res) => {
    try {
      const { title, category, location, date, image, caption } = req.body;
      if (!title || !image) {
        return res.status(400).json({ error: 'Title and image are required' });
      }

      const newItem = {
        id: Date.now().toString(),
        title,
        category: category || 'workshops',
        location: location || 'Lahore Campus',
        date: date || 'Recent',
        image,
        caption: caption || 'AAMA clinical training highlight',
        createdAt: new Date()
      };

      if (process.env.DATABASE_URL) {
        try {
          const [dbItem] = await db.insert(galleryItems).values({
            title: newItem.title,
            category: newItem.category,
            location: newItem.location,
            date: newItem.date,
            image: newItem.image,
            caption: newItem.caption,
          }).returning();
          return res.status(201).json(dbItem);
        } catch (dbErr) {
          console.warn('Database insert failed, using memory fallback:', dbErr);
        }
      }

      memoryGallery.unshift(newItem);
      res.status(201).json(newItem);
    } catch (error) {
      console.error('Error adding gallery item:', error);
      res.status(500).json({ error: 'Failed to add gallery item' });
    }
  });

  // Register for course
  app.post('/api/register', async (req, res) => {
    try {
      const { courseId, fullName, email, phone, city } = req.body;
      if (!courseId || !fullName || !email || !phone || !city) {
        return res.status(400).json({ error: 'All fields are required' });
      }

      const newReg = {
        id: Date.now().toString(),
        courseId,
        fullName,
        email,
        phone,
        city,
        status: 'pending',
        createdAt: new Date()
      };

      if (process.env.DATABASE_URL) {
        try {
          const [dbReg] = await db.insert(registrations).values({
            courseId,
            fullName,
            email,
            phone,
            city,
            status: 'pending',
          }).returning();
          return res.status(201).json({ success: true, registration: dbReg });
        } catch (dbErr) {
          console.warn('Database registration failed, using memory fallback:', dbErr);
        }
      }

      memoryRegistrations.push(newReg);
      res.status(201).json({ success: true, registration: newReg });
    } catch (error) {
      console.error('Error saving registration:', error);
      res.status(500).json({ error: 'Failed to submit registration' });
    }
  });

  // In-memory fallback stores for dev/standalone runtime
  const memoryRegistrations: any[] = [
    { id: "AAMA-2026-892104", name: "Dr. Ahmed Khan", email: "ahmed.khan@gmail.com", phone: "+92 300 1234567", pmdc: "45218-P", course: "Botox Masterclass (Basic & Advanced)", city: "Lahore", date: "2026-03-25", status: "Verified" },
    { id: "AAMA-2026-554102", name: "Dr. Fatima Malik", email: "fatima.m@hotmail.com", phone: "+92 321 9876543", pmdc: "33102-S", course: "Aesthetic Fillers Masterclass", city: "Karachi", date: "2026-03-24", status: "Pending Review" }
  ];
  const memoryContentMap: Record<string, any> = {};

  // Admin CMS Content endpoints
  app.get('/api/admin/content', async (req, res) => {
    try {
      if (!process.env.DATABASE_URL) {
        return res.json(memoryContentMap);
      }
      const rows = await db.select().from(siteContent);
      const contentMap: Record<string, any> = { ...memoryContentMap };
      rows.forEach(r => {
        try { contentMap[r.pageKey] = JSON.parse(r.content); } catch { /* ignore */ }
      });
      res.json(contentMap);
    } catch (error) {
      console.warn('Error fetching admin content, using memory store:', error);
      res.json(memoryContentMap);
    }
  });

  app.post('/api/admin/content', async (req, res) => {
    try {
      const { pageKey, content } = req.body;
      if (!pageKey || !content) {
        return res.status(400).json({ error: 'pageKey and content are required' });
      }

      const contentStr = typeof content === 'string' ? content : JSON.stringify(content);
      try {
        memoryContentMap[pageKey] = typeof content === 'string' ? JSON.parse(content) : content;
      } catch {
        memoryContentMap[pageKey] = content;
      }

      if (process.env.DATABASE_URL) {
        try {
          // Upsert site content
          const existing = await db.select().from(siteContent).where(eq(siteContent.pageKey, pageKey));
          if (existing.length > 0) {
            await db.update(siteContent).set({ content: contentStr, updatedAt: new Date() }).where(eq(siteContent.pageKey, pageKey));
          } else {
            await db.insert(siteContent).values({ pageKey, content: contentStr });
          }
        } catch (dbErr) {
          console.warn('Database save content failed:', dbErr);
        }
      }

      res.json({ success: true, pageKey });
    } catch (error) {
      console.error('Error saving admin content:', error);
      res.status(500).json({ error: 'Failed to save admin content' });
    }
  });

  // Admin Registrations endpoints
  app.get('/api/admin/registrations', async (req, res) => {
    try {
      if (!process.env.DATABASE_URL) {
        return res.json(memoryRegistrations);
      }
      const regs = await db.select().from(registrations).orderBy(registrations.createdAt);
      res.json(regs.length > 0 ? regs : memoryRegistrations);
    } catch (error) {
      console.warn('Error fetching registrations:', error);
      res.json(memoryRegistrations);
    }
  });

  app.delete('/api/admin/registrations/:id', async (req, res) => {
    try {
      const { id } = req.params;
      if (process.env.DATABASE_URL) {
        try {
          await db.delete(registrations).where(eq(registrations.id, id));
        } catch (dbErr) {
          console.warn('Database delete registration failed:', dbErr);
        }
      }
      const idx = memoryRegistrations.findIndex(r => r.id === id);
      if (idx !== -1) memoryRegistrations.splice(idx, 1);
      res.json({ success: true });
    } catch (error) {
      console.error('Error deleting registration:', error);
      res.status(500).json({ error: 'Failed to delete registration' });
    }
  });

  // Setup Vite middleware for frontend development
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'spa',
  });

  app.use(vite.middlewares);

  const PORT = parseInt(process.env.PORT || '3000', 10);
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch(err => {
  console.error('Failed to start server:', err);
});
