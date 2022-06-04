import Task from "./task.js";
import TaskList from "./taskList.js";
let sectionTask = document.querySelector( '#to-doList' )
let btnAddTask = document.querySelector( '.addTask' )
let inputTask = document.querySelector( 'header .to-do input#newTask' )
let selectTask = document.querySelector( '#priority' )
let navs = document.querySelectorAll( 'header nav' )
let iconPlus = document.querySelector( 'header aside i.fa-plus' )
let iconFilter = document.querySelector( 'header aside i.fa-filter' )
iconPlus.addEventListener( 'click', toggleNav )
iconFilter.addEventListener( 'click', toggleNav )
let list = new TaskList( sectionTask )
list.add( new Task( 'Llevar a Kira al campo', 'mensual' ) )
list.add( new Task( 'Cambiar la arena de peque', 'diaria' ) )
list.add( new Task( 'Callar a Alejandro', 'urgente' ) )
btnAddTask.addEventListener( 'click', captureTask )
document.addEventListener( 'keydown', captureTask )
selectTask.addEventListener( 'change', changeColor )
list.print( sectionTask )


function captureTask ( event ) {
    if ( ( event.type === 'click' || ( event.type === 'keydown' && event.keyCode === 13 ) ) && inputTask.value !== '' ) {
        list.add( new Task( inputTask.value, selectTask.selectedOptions[ 0 ].value ) )
        inputTask.value = ''
    }
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
        inputTask.value = ''
    } else {
        iconPlus.classList.remove( 'desaparecer' )
        iconFilter.classList.add( 'desaparecer' )
        navs[ 1 ].classList.remove( 'desaparecer' )
        navs[ 0 ].classList.add( 'desaparecer' )
        navs[ 1 ].childNodes[ 5 ].value = ''
    }
}










export default list