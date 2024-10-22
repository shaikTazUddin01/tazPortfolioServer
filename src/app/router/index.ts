import { Router } from "express";
import { myWorkRoute } from "../module/myWork/myWork.router";
import { blogRoute } from "../module/Blog/blog.router";
import { skillRoute } from "../module/Skill/skill.router";
import { authRouter } from "../module/Auth/auth.roter";

const router = Router();

const moduleRouter = [
  {
    path: "/myWork",
    router: myWorkRoute,
  },
  {
    path: "/blog",
    router: blogRoute,
  },
  {
    path: "/skill",
    router: skillRoute,
  },
  {
    path: "/auth",
    router: authRouter,
  },
];

moduleRouter?.forEach((route) => router.use(route.path, route.router));


export default router