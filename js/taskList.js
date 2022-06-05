export default class TaskList {
    constructor ( dom ) {
        this.list = []
        this.dom = dom
    }

    print ( dom, list = this.list ) {
        dom.innerText = ''
        list.forEach( task => task.print( dom ) )
    }
    add ( Task ) {
        this.list.push( Task )
        this.addLocalStorage()
        this.print( this.dom )
    }
    addLocalStorage () {
        localStorage.setItem( 'taskList', JSON.stringify( this.list ) )
    }
    remove ( task ) {
        let taskToRemove = this.list.findIndex( taskToDelete => taskToDelete.id === Number( task.target.dataset.id ) )
        this.list.splice( taskToRemove, 1 )
        this.print( this.dom )
    }
    removeLocalStorage () {

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