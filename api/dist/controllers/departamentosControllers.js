"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.atualizaDepartamento = exports.deletaDepartamentos = exports.insereDepartamentos = exports.listaDetartamentos = void 0;
const conection_1 = __importDefault(require("../services/conection"));
const listaDetartamentos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (id) {
        const [rows] = yield conection_1.default.execute('SELECT * FROM DEPARTAMENTOS WHERE id_departamento = ?', [id]);
        res.json(rows);
        return;
    }
    const [rows] = yield conection_1.default.query('SELECT * FROM DEPARTAMENTOS');
    res.json(rows);
});
exports.listaDetartamentos = listaDetartamentos;
const insereDepartamentos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nome, sigla } = req.body;
    try {
        const [result] = yield conection_1.default.execute('INSERT INTO DEPARTAMENTOS (sigla, nome) VALUES (? , ?)', [sigla, nome]);
        res.status(201).json({
            message: 'Departamento criado'
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'Erro na criação'
        });
    }
});
exports.insereDepartamentos = insereDepartamentos;
const deletaDepartamentos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.query;
    try {
        const [result] = yield conection_1.default.execute('DELETE FROM DEPARTAMENTOS WHERE id_departamento = ?', [id]);
        if (result.affectedRows === 0) {
            res.status(404).json({
                message: 'Departamento não encontrado',
                id
            });
            return;
        }
        else {
            res.status(201).json({
                message: 'Departamento deletado',
                id
            });
            return;
        }
    }
    catch (error) {
        let message = '';
        switch (error.code) {
            case 'ER_ROW_IS_REFERENCED_2':
                message = 'Departamento possui vinculos e não pode ser excluído';
                break;
            default:
                message = 'Erro na exclusão do departamento';
                break;
        }
        res.status(500).json({
            message
        });
    }
});
exports.deletaDepartamentos = deletaDepartamentos;
const atualizaDepartamento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { nome, sigla } = req.body;
    try {
        const [result] = yield conection_1.default.execute('UPDATE DEPARTAMENTOS SET nome = ?, sigla = ? WHERE id_departamento = ?', [nome, sigla, id]);
        if (result.affectedRows === 0) {
            res.status(404).json({
                message: 'Departamento não encontrado',
                id
            });
            return;
        }
        res.status(201).json({
            message: 'Departamento atualizado',
            id
        });
        return;
    }
    catch (error) {
        res.status(500).json({
            message: "Erro ao atualizar o departamento"
        });
        return;
    }
});
exports.atualizaDepartamento = atualizaDepartamento;
//# sourceMappingURL=departamentosControllers.js.map