import { Router } from "express";
import { listaDetartamentos,  insereDepartamentos, deletaDepartamentos} from "../controllers/departamentosControllers";
import validaDepartamento from "../middlewares/validaDepartamento";

const router = Router();

router.get('/departamentos', listaDetartamentos);

router.post('/departamentos', validaDepartamento, insereDepartamentos);

router.delete('/departamentos', deletaDepartamentos);

export default router;