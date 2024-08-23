"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const funcionariosControllers_1 = require("../controllers/funcionariosControllers");
const router = (0, express_1.Router)();
router.get('/funcionarios/departamentos', funcionariosControllers_1.listaFuncionariosDepartamento);
exports.default = router;
//# sourceMappingURL=funcionariosRoutes.js.map