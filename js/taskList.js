import Task from "./task.js"

export default class TaskList {
    constructor ( dom, list ) {
        this.list = []
        this.dom = dom
        if ( this.updateListFromLocalStorage() ) {
            this.upgradeLocalStorage( list, dom )
        } else {
            this.print()
        }
    }

    print ( dom = this.dom, list = this.list ) {
        dom.innerText = ''
        list.forEach( task => task.print( dom ) )
    }
    add ( Task ) {
        this.list.push( Task )
        this.upgradeLocalStorage( this.list )
    }
    upgradeLocalStorage ( list, dom = this.dom ) {
        localStorage.setItem( 'Tasks_', JSON.stringify( list ) )
        this.print()
    }
    updateListFromLocalStorage () {
        let listLocal = JSON.parse( localStorage.getItem( 'Tasks_' ) )
        listLocal.forEach( task => {
            console.log( new Task( task.title, task.priority ) )
            this.add( new Task( task.title, task.priority ) )
        } )
    }
    remove ( task ) {
        let taskToRemove = this.list.findIndex( taskToDelete => taskToDelete.id === Number( task.target.dataset.id ) )
        this.list.splice( taskToRemove, 1 )
        this.print( this.dom )
    }
    filterBySearch ( search ) {
        if ( search ) {
            let listaFiltrada = this.list.filter( task => task.title.toLowerCase().includes( search.toLowerCase() ) )
            this.print( this.dom, listaFiltrada )
        } else {
            this.print( this.dom )
        }
    }
    filterByPriority ( priority ) {
        let listaFiltrada = this.list.filter( task => task.priority === priority )
        this.print( this.dom, listaFiltrada )
    }
}