import Task from "./task.js"

export default class TaskList {
    constructor ( dom, list ) {
        this.list = []
        this.dom = dom
        console.log( localStorage.getItem( 'Tasks_' ) )
        if ( this.updateListFromLocalStorage() === null ) {
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
    upgradeLocalStorage ( list ) {
        localStorage.setItem( 'Tasks_', JSON.stringify( list ) )
        this.print()
    }
    updateListFromLocalStorage () {
        let listLocal = JSON.parse( localStorage.getItem( 'Tasks_' ) )
        if ( listLocal !== null ) {
            listLocal.forEach( task => {
                console.log( new Task( task.title, task.priority, task.completed ) )
                this.add( new Task( task.title, task.priority ) )
            } )
        }
    }
    remove ( task ) {
        let taskToRemove = this.list.findIndex( taskToDelete => taskToDelete.id === Number( task.target.dataset.id ) )
        this.list.splice( taskToRemove, 1 )
        this.upgradeLocalStorage( this.list )
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