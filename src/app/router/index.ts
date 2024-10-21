import { Router } from "express";
import { myWorkRoute } from "../module/myWord/myWork.router";

const router = Router();

const moduleRouter = [
  {
    path: "/myWork",
    router: myWorkRoute,
  },
];

moduleRouter?.forEach((route) => router.use(route.path, route.router));


export default router