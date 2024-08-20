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
exports.deletaDepartamentos = exports.insereDepartamentos = exports.listaDetartamentos = void 0;
const conection_1 = __importDefault(require("../services/conection"));
const url_1 = require("url");
const listaDetartamentos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield conection_1.default.query('SELECT * FROM DEPARTAMENTOS');
    res.json(rows);
    res.send('GET departamentos');
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
    catch (e) {
        res.status(500).json({
            message: 'Erro na criação'
        });
    }
    console.log(req.body);
});
exports.insereDepartamentos = insereDepartamentos;
const deletaDepartamentos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const queryParams = req.url.split('?')[1];
    const params = new url_1.URLSearchParams(queryParams);
    const id_departamento = parseInt(params.get('id'));
    const testeExistencia = yield verificaExistencia(id_departamento);
    try {
        if (testeExistencia) {
            const [result] = yield conection_1.default.execute('DELETE FROM DEPARTAMENTOS WHERE id_departamento = (?)', [id_departamento]);
            res.status(201).json({
                message: 'Departamento deletado'
            });
        }
        else {
            res.status(404).json({
                message: 'Departamento não encontrado!'
            });
        }
    }
    catch (error) {
        res.status(500).json({
            message: 'Erro na deleção'
        });
    }
});
exports.deletaDepartamentos = deletaDepartamentos;
function verificaExistencia(id_departamento) {
    return __awaiter(this, void 0, void 0, function* () {
        const [rows] = yield conection_1.default.query(`SELECT * FROM DEPARTAMENTOS WHERE id_departamento = ${id_departamento}`);
        console.log(rows);
        if (rows != null) {
            return true;
        }
        else {
            return false;
        }
    });
}
//# sourceMappingURL=departamentosControllers.js.map