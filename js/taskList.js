export default class TaskList {
    constructor ( dom ) {
        this.list = []
        this.dom = dom
    }
    print ( dom ) {
        dom.innerText = ''
        this.list.forEach( task => task.print( dom ) )
    }
    add ( Task ) {
        this.list.push( Task )
        this.print( this.dom )
    }
    remove ( idTask ) {
        let taskToRemove = this.list.findIndex( task => task.id === idTask )
        this.list.splice( taskToRemove, 1 )
    }
}