const descripcion = {
    demand: true,
    alias: 'd',
    descr: 'Descripción de la tarea por realizar'
};

const completado = {
    demand: true,
    alias: 'c',
    default: true,
    descr: 'Marca como completada o pendiente la tarea'
};


const argv = require('yargs').command('crear', 'Crea una tarea nueva', { descripcion })
    .command('actualizar', 'Actualiza una tarea', {
        descripcion,
        completado
    }).command('borrar', 'Elimina una tarea', { descripcion })
    .help()
    .argv;

module.exports = {
    argv
}