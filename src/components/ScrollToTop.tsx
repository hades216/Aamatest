import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (hash) {
      const targetId = hash.replace("#", "");
      const element = document.getElementById(targetId) || document.getElementById(`${targetId}-section`);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else if (targetId === "registration" || targetId === "register" || targetId === "admissions") {
        navigate("/register");
      }
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant" as ScrollBehavior
      });
    }
  }, [pathname, hash, navigate]);

  return null;
}
