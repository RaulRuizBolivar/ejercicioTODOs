//Importamos las clases
import Task from "./task.js";
import TaskList from "./taskList.js";

//capturamos los elementos
let sectionTask = document.querySelector( '#to-doList' )
let btnAddTask = document.querySelector( '.addTask' )
let inputTask = document.querySelector( 'header .to-do input#newTask' )
let inputFilter = document.querySelector( 'header nav.to-do input#search' )
let selectTask = document.querySelector( '#priority' )
let filterSelectTask = document.querySelector( '#filterByPriority' )
let navs = document.querySelectorAll( 'header nav' )
let iconPlus = document.querySelector( 'header aside i.fa-plus' )
let iconFilter = document.querySelector( 'header aside i.fa-filter' )

//Añadimos los eventos
iconPlus.addEventListener( 'click', toggleNav )
iconFilter.addEventListener( 'click', toggleNav )
btnAddTask.addEventListener( 'click', captureTask )
document.addEventListener( 'keydown', captureTask )
selectTask.addEventListener( 'change', changeColor )
inputFilter.addEventListener( 'input', captureSearch )
filterSelectTask.addEventListener( 'change', capturePriority )


let list = new TaskList( sectionTask )
data.forEach( task => { list.add( new Task( task.title, task.priority ) ) } )
list.print( sectionTask )
list.addLocalStorage()


//Reseteo de los valores de los inputs y cambio de color del select
inputFilter.value = ''
inputTask.value = ''
selectTask.className = selectTask.selectedOptions[ 0 ].value


//Funciones de captura de eventos
function captureTask ( event ) {
    if ( ( event.type === 'click' || ( event.type === 'keydown' && event.keyCode === 13 ) ) && inputTask.value !== '' ) {
        list.add( new Task( inputTask.value, selectTask.selectedOptions[ 0 ].value ) )
        inputTask.value = ''
    }
}
function captureSearch ( event ) {
    list.filterBySearch( event.target.value )
}
function capturePriority ( event ) {
    list.filterByPriority( event.target.value )
}
function changeColor ( event ) {
    event.target.className = event.target.value
}


//Funcion de cambio de filtro a crear tarea
function toggleNav ( event ) {
    if ( event.target.classList[ 1 ] === 'fa-plus' ) {
        iconFilter.classList.remove( 'desaparecer' )
        iconPlus.classList.add( 'desaparecer' )
        navs[ 1 ].classList.add( 'desaparecer' )
        navs[ 0 ].classList.remove( 'desaparecer' )
        inputFilter.value = ''
    } else {
        iconPlus.classList.remove( 'desaparecer' )
        iconFilter.classList.add( 'desaparecer' )
        navs[ 1 ].classList.remove( 'desaparecer' )
        navs[ 0 ].classList.add( 'desaparecer' )
        inputTask.value = ''
    }
}










export default list