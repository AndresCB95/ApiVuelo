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

const vuelosgetid = (id) =>{

    let vuelo = vuelos.find(

        (elemento)=>{
            return elemento.id === id
        }

    )

    return vuelo
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