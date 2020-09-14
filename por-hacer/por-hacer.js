const fs = require('fs');

let listadoPorHacer = [];

const leerDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

}

const getListado = () => {
    leerDB();
    return listadoPorHacer;
}

const actualizarDB = (descripcion, status = true) => {
    leerDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer[index].completado = status;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrarRegDB = (descripcion) => {
    leerDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        guardarDB();
        return console.log(`La tarea ${descripcion}, fue borrada de la BD`)
    } else {
        return console.log(`La tarea ${descripcion}, no existe en la BD`);
    }
}

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw err('No se pudo grabar en la BD', err);
        console.log('Se han guardado los cambios en la BD');
    });
}

let crearTarea = (descripcion) => {
    leerDB();
    let porHacer = {
        descripcion,
        completado: false
    };
    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

module.exports = {
    crearTarea,
    getListado,
    actualizarDB,
    borrarRegDB
}