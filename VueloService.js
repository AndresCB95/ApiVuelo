let vuelos = require("./vuelos.json")


const vuelosGet = () =>{

    return vuelos

}

const vuelosSet = (vuelo) =>{
    vuelos.push(vuelo)
    return vuelos

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

module.exports.vuelosgetExport = vuelosGet;
module.exports.vuelosSetExport = vuelosSet;
module.exports.vuelosDeleteExport = vuelosDelete;