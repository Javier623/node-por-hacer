const { argv } = require('./config/yargs');
const colors = require('colors');
const { crearTarea, getListado, actualizarDB, borrarRegDB } = require('./por-hacer/por-hacer');

// console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        // console.log('Crear tarea');
        let tarea = crearTarea(argv.descripcion);
        // console.log(tarea);
        break;

    case 'listar':
        let listado = getListado();

        for (let tarea of listado) {
            colors.green(console.log('========= POR HACER ==========='.green));
            colors.underline(console.log(`Tarea: ${tarea.descripcion}`));
            colors.underline(console.log(`Estatus: ${tarea.completado}`));
            colors.green(console.log('==============================='.green));
        }
        break;
    case 'actualizar':
        let actualizado = actualizarDB(argv.descripcion, argv.completado);
        console.log(`Status modificado: ${actualizado}`.blue);
        break;
    case 'borrar':
        let borrado = borrarRegDB(argv.descripcion);
        break;
    default:
        console.log('Comando no reconocido');
        break;
}