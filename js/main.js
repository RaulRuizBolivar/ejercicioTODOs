import Task from "./task.js";
import TaskList from "./taskList.js";
let sectionTask = document.querySelector( '#to-doList' )
let btnAddTask = document.querySelector( '.addTask' )
let inputTask = document.querySelector( 'header .to-do input' )
let selectTask = document.querySelector( '#priority' )
let list = new TaskList( sectionTask )
list.add( new Task( 'Llevar a Kira al campo', 'mensual' ) )
list.add( new Task( 'Cambiar la arena de peque', 'diaria' ) )
list.add( new Task( 'Callar a Alejandro', 'urgente' ) )
btnAddTask.addEventListener( 'click', captureTask )
document.addEventListener( 'keydown', captureTask )
list.print( sectionTask )


function captureTask ( event ) {
    if ( ( event.type === 'click' || ( event.type === 'keydown' && event.keyCode === 13 ) ) && inputTask.value !== '' ) {
        list.add( new Task( inputTask.value, selectTask.selectedOptions[ 0 ].value ) )
        inputTask.value = ''
    }
}


export default list