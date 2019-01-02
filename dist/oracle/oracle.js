"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const oracledb = require("oracledb");
class OracleDB {
    constructor() {
        //cnn: oracledb.IConnection
        this.conectado = false;
        this.inicializa = () => __awaiter(this, void 0, void 0, function* () {
            yield oracledb.createPool({
                user: "PNet0000",
                password: "PNet",
                connectString: "190.223.51.245:61521/sd1",
                poolMin: 10,
                poolMax: 20,
                poolIncrement: 1
            })
                .then(mensaje => console.log('Creo el pool!'))
                .catch(err => console.log(err));
            this.conectarDB();
        });
        console.log('Clase OracleDB inicializada');
        this.inicializa();
    }
    conectarDB() {
        const conectar = () => __awaiter(this, void 0, void 0, function* () {
            let cnn = yield oracledb.getConnection()
                .then(mensaje => console.log('Conecto!'))
                .catch(err => console.log(err));
        });
    }
}
exports.default = OracleDB;
