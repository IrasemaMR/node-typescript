import Server from "./server/server";
import router from "./router/router";
import OracleDB from "./oracle/oracle";

const server = Server.init( 3000 )
server.app.use(router)

const oracledb = new OracleDB()

server.start( () => {
    console.log('Servidor corriendo en el puerto 3000');

})
