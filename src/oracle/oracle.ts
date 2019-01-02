import oracledb = require('oracledb')
import { connect } from 'net';
import { error } from 'util';

export default class OracleDB {
    //private static _instance: MySQL
    //cnn: mysql.Connection
    //conectado: boolean = false
 
    // constructor() {
    //     console.log('Clase inicializada');
    //     this.cnn = mysql.createConnection({
    //         host: 'localhost',
    //         user: 'node_user2',
    //         password: '123456',
    //         database: 'node_db'
    //     })
    //     this.conectarDB()
    // }

    // private conectarDB() {
    //     this.cnn.connect((err: mysql.MysqlError) => {
    //         if (err) {
    //             console.log(err.message)
    //             return
    //         }
    //         this.conectado = true
    //         console.log('Base de datos online');
    //     })
    // }

    private static _instance: OracleDB
    //cnn: oracledb.IConnection
    conectado: boolean = false
    
    constructor() {
        console.log('Clase OracleDB inicializada')
        this.inicializa()
        
    }

    private inicializa = async ()=> {

        await oracledb.createPool({
            user: "PNet",
            password: "PNet",
            connectString: "190.223.51.245:61521/sd1",
            poolMin: 10,
            poolMax: 20,
            poolIncrement: 1
        })
        .then(mensaje => console.log('Creo el pool!'))
            .catch(err => console.log(err))
        this.conectarDB()
    }
    
    private conectarDB() {
        const conectar = async () => {
            let cnn = await oracledb.getConnection()
                .then(mensaje => console.log('Conecto!'))
                .catch(err => console.log(err))
        }
    }
}

