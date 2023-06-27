import { Router } from "express";
import {
  getLangSpanish,
  getLangEnglish,
} from "../controllers/appLangsControlers";

const routerLang = Router();

routerLang.get("/es", getLangSpanish);
routerLang.get("/en", getLangEnglish);

export default routerLang;
