//temporal
import Task from "./task.js";
let sectionTask = document.querySelector( '#to-doList' )
let listTasks = [
    new Task( 'Sacar a Kira', 'urgente' ),
    new Task( 'Cambiar la arena de peque', 'mensual' ),
    new Task( 'Callar a Alejandro', 'diaria' )
]









listTasks.forEach( task => task.print( sectionTask ) )