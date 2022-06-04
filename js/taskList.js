export default class TaskList {
    constructor ( domList, domNew ) {
        this.list = []
        this.domList = domList
    }

    print ( domList ) {
        domList.innerText = ''
        this.list.forEach( task => task.print( domList ) )
    }
    add ( Task ) {
        this.list.push( Task )
        this.print( this.domList )
    }
    remove ( task ) {
        let taskToRemove = this.list.findIndex( taskToDelete => taskToDelete.id === Number( task.target.dataset.id ) )
        console.log( taskToRemove )
        this.list.splice( taskToRemove, 1 )
        this.print( this.domList )
    }
}