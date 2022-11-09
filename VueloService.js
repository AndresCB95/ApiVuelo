const getMongo = require("./mongodb.js")


const vuelosGet = async () =>{
    const { collection, client } = await getConexiones()
    const vuelos =await collection.find({}).toArray()
    await getMongo.closeClientExport(client)
    return vuelos
}

const vuelosSet = async (vuelo) =>{
    const { collection, client } = await getConexiones()
    await collection.insertMany(vuelo)
    await getMongo.closeClientExport(client)
    return await vuelosGet()
}

const vuelosDelete = (id) =>{
    console.log(vuelos)
    vuelos = vuelos.filter((vuel)=>{
        return vuel.id != id
    }
    )
    console.log(vuelos)
    return vuelos
}

const vuelosgetid = async (id) =>{
    var vueloEncontrado = null
    const { collection, client } = await getConexiones()
    await collection.findOne({"_id":id}).then(
        (respuesta) =>{
            vueloEncontrado = respuesta
        }
    )
    await getMongo.closeClientExport(client)
    return vueloEncontrado
}


const sillasReservadas = (sillas, idvuelo)=>{

    for (let i = 0; i< vuelos.length; i++){
        if(idvuelo === vuelos[i].id){
            for (let ivuelo = 0; ivuelo< vuelos[i].silla.length; ivuelo++){
                for (let j = 0; j < sillas.length; j++){
                    if(vuelos[i].silla[ivuelo].categoria === sillas[j].categoria){
                        vuelos[i].silla[ivuelo].silla -= sillas[j].silla
                    }
                }
            }
            i=vuelos.length
        }
    }

    return "Sillas reservada"

}

module.exports.vuelosgetExport = vuelosGet;
module.exports.vuelosSetExport = vuelosSet;
module.exports.vuelosDeleteExport = vuelosDelete;
module.exports.vuelosgetidExport = vuelosgetid;
module.exports.sillasReservadasExport = sillasReservadas;

async function getConexiones() {
    const nameDb = "aerolineaG1y2"
    const client = await getMongo.getClientnExport(nameDb)
    const collection = await getMongo.getCollectionExport(client, nameDb)
    return { collection, client }
}
