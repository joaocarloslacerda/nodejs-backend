import { Router } from "express";
import { listaDetartamentos,  insereDepartamentos, deletaDepartamentos} from "../controllers/departamentosControllers";

const router = Router();

router.get('/departamentos',  listaDetartamentos);

router.post('/departamentos',  insereDepartamentos);

router.delete('/departamentos', deletaDepartamentos);

export default router;