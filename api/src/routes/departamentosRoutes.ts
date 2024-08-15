import { Router } from "express";
import { detartamentosResponse,  departamentosRequest} from "../controllers/departamentosControllers";

const router = Router();

router.get('/departamentos',  detartamentosResponse);

router.post('/departamentos',  departamentosRequest);

export default router;