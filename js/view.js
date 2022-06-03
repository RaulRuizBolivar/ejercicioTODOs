//temporal
import Task from "./task.js";
let sectionTask = document.querySelector( '#to-doList' )
let perro = new Task( 'Sacar a Kira', 'urgente' )
let gato = new Task( 'Cambiar la arena de peque', 'mensual' )
perro.print( sectionTask )
gato.print( sectionTask )