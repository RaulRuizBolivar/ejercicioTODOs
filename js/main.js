import Task from "./task.js";
import TaskList from "./taskList.js";
let sectionTask = document.querySelector( '#to-doList' )
let btnAddTask = document.querySelector( '.addTask' )
let inputTask = document.querySelector( 'header .to-do input#newTask' )
let inputFilter = document.querySelector( 'header nav.to-do input#search' )
let selectTask = document.querySelector( '#priority' )
let filterSelectTask = document.querySelector( '#filterByPriority' )
let navs = document.querySelectorAll( 'header nav' )
let iconPlus = document.querySelector( 'header aside i.fa-plus' )
let iconFilter = document.querySelector( 'header aside i.fa-filter' )
iconPlus.addEventListener( 'click', toggleNav )
iconFilter.addEventListener( 'click', toggleNav )
let list = new TaskList( sectionTask )
list.add( new Task( 'Llevar a Kira al campo', 'mensual' ) )
list.add( new Task( 'Cambiar la arena de Pequeñaja', 'diaria' ) )
list.add( new Task( 'Callar a Alejandro', 'urgente' ) )
btnAddTask.addEventListener( 'click', captureTask )
document.addEventListener( 'keydown', captureTask )
selectTask.addEventListener( 'change', changeColor )
inputFilter.addEventListener( 'input', captureSearch )
filterSelectTask.addEventListener( 'change', capturePriority )
list.print( sectionTask )

//Reseteo de los valores de los inputs y cambio de color del select
inputFilter.value = ''
inputTask.value = ''
selectTask.className = selectTask.selectedOptions[ 0 ].value

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