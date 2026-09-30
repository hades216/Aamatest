import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: uuid('id').primaryKey().defaultRandom(),
  uid: text('uid').notNull().unique(),
  email: text('email').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const galleryItems = pgTable('gallery_items', {
  id: uuid('id').primaryKey().defaultRandom(),
  title: text('title').notNull(),
  category: text('category').notNull(),
  location: text('location').notNull(),
  date: text('date').notNull(),
  image: text('image').notNull(),
  caption: text('caption').notNull(),
  userId: uuid('user_id').references(() => users.id),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const registrations = pgTable('registrations', {
  id: uuid('id').primaryKey().defaultRandom(),
  courseId: text('course_id').notNull(),
  fullName: text('full_name').notNull(),
  email: text('email').notNull(),
  phone: text('phone').notNull(),
  city: text('city').notNull(),
  status: text('status').default('pending').notNull(),
  userId: uuid('user_id').references(() => users.id),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const siteContent = pgTable('site_content', {
  id: uuid('id').primaryKey().defaultRandom(),
  pageKey: text('page_key').notNull().unique(),
  content: text('content').notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
