let vuelos = require("./vuelos.json")


const vuelosGet = () =>{
    let vuelos_tem = vuelos.filter((el) =>{

        let datevuelo = new Date(el.fecha)
        let datehoy = Date.now()

        console.log(datevuelo)
        console.log(datehoy)
        console.log(datevuelo >= datehoy)

        return datevuelo >= datehoy
    
    })
    return vuelos_tem

}


const vuelosGetId = (id) =>{

    return vuelos.find((e)=>{return e.id == id})

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

module.exports.vuelosGetIdExport = vuelosGetId;