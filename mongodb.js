const {MongoClient} = require("mongodb")

const getClient = async (nameDb) =>{
    const url ="mongodb+srv://MisionTic:MisionTic2022@cluster0.izrzhp3.mongodb.net/"+nameDb

    const client = new MongoClient(url)
    await client.connect()
    .then(
        (db)=>{
            console.log("Conexion exitosa")
        }
    )
    .catch(
        (error)=>{
            console.log("Error al conectarse a la bd")
        }
    )

    return client

}

const getCollection = async (client, nameDb) =>{

    const db = client.db(nameDb)

    const collection = await db.collection("vuelos")

    return collection
}

const closeClient = async (client)=>{

    await client.close()

}

module.exports.getCollectionExport = getCollection;
module.exports.getClientnExport = getClient;
module.exports.closeClientExport = closeClient;