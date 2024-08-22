"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validaDepartamento = (req, res, next) => {
    const { id } = req.params;
    const { nome, sigla } = req.body;
    if (req.method === 'PUT' && isNaN(Number(id))) {
        res.status(400).json({
            message: 'Identificador deve ser numérico'
        });
        return;
    }
    ;
    if ((typeof nome !== 'string' || nome.trim() === '') || (typeof sigla !== 'string' || sigla.trim() === '')) {
        res.status(400).json({
            message: 'Campo inválido ou ausente'
        });
        return;
    }
    ;
    next();
};
exports.default = validaDepartamento;
//# sourceMappingURL=validaDepartamento.js.map