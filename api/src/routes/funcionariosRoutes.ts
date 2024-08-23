import { Router } from "express";
import { listaFuncionariosDepartamento } from "../controllers/funcionariosControllers";

const router = Router();

router.get('/funcionarios/departamentos', listaFuncionariosDepartamento);

export default router;