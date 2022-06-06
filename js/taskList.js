import Task from "./task.js"

export default class TaskList {
    constructor ( list, dom ) {
        this.list = this.updateData( list )
        this.dom = dom

        this.print()
        console.log( this.list )
    }

    print ( list = this.list, dom = this.dom ) {
        dom.innerText = ''
        list.forEach( task => task.print( dom ) )
    }
    add ( Task ) {
        this.list.push( Task )
        this.upgradeData()
        this.print()
    }
    updateData ( list = this.list ) {
        if ( localStorage.getItem( 'Tasks_' ) !== null ) {
            if ( JSON.parse( localStorage.getItem( 'Tasks_' ) ) != this.list ) {
                let listLocal = JSON.parse( localStorage.getItem( 'Tasks_' ) );
                let listNew = []
                listLocal.forEach( task => {
                    listNew.push( new Task( task.title, task.priority ) )
                } )
                this.list = listNew
                return listNew
            }
        } else {
            localStorage.setItem( 'Tasks_', JSON.stringify( list ) )
            return list
        }
    }
    upgradeData ( list = this.list ) {
        localStorage.setItem( 'Tasks_', JSON.stringify( list ) )
    }
    remove ( task ) {
        let taskToRemove = this.list.findIndex( taskToDelete => taskToDelete.id === Number( task.target.dataset.id ) )
        this.list.splice( taskToRemove, 1 )
        console.log( this.list )
        this.upgradeData()
        this.print()
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



