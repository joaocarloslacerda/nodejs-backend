import { Router } from "express";
import { 
  atualizaDepartamento,
  listaDetartamentos,  
  insereDepartamentos, 
  deletaDepartamentos
} from "../controllers/departamentosControllers";
import validaDepartamento from "../middlewares/validaDepartamento";

const router = Router();

router.get('/departamentos', listaDetartamentos);

router.post('/departamentos', validaDepartamento, insereDepartamentos);

router.delete('/departamentos', deletaDepartamentos);
router.put('/departamentos/:id', validaDepartamento, atualizaDepartamento);


export default router;