export default class Task {
    constructor ( title, priority ) {
        this.id = 1
        this.title = title
        this.priority = priority
        this.completed = false
    }
    print ( dom ) {
        let article = document.createElement( 'article' )
        let divLeft = document.createElement( 'div' )
        let inputCheck = document.createElement( 'input' )
        let h2 = document.createElement( 'h2' )
        let label = document.createElement( 'label' )
        let divRight = document.createElement( 'div' )
        let select = document.createElement( 'select' )
        let optionDiaria = document.createElement( 'option' )
        let optionUrgente = document.createElement( 'option' )
        let optionMensual = document.createElement( 'option' )
        let divDelete = document.createElement( 'div' )
        let iconDelete = document.createElement( 'i' )

        inputCheck.addEventListener( 'change', this.complete )

        article.classList.add( 'to-do' )
        divLeft.classList.add( 'left' )
        inputCheck.id = 'completada' + this.id
        inputCheck.type = 'checkbox'
        label.for = inputCheck.id
        divRight.classList.add( 'right' )
        select.id = 'tarea' + this.id
        select.classList.add( this.priority )
        optionDiaria.value = 'diaria'
        optionUrgente.value = 'urgente'
        optionMensual.value = 'mensual'
        divDelete.classList.add( 'delete' )
        iconDelete.classList.add( "fa-solid", "fa-trash-can" )
        if ( this.completed ) {
            inputCheck.checked = true
            label.classList.add( 'tachada' )
            select.disabled = true
            select.classList.remove( this.priority )
        }


        label.innerText = this.title
        optionDiaria.innerText = 'diaria'
        optionUrgente.innerText = 'urgente'
        optionMensual.innerText = 'mensual'



        h2.appendChild( label )
        select.append( optionDiaria, optionMensual, optionUrgente )
        //Le doy el valor despues de haber añadido los options porque al añadirlos se cambia el value
        select.value = this.priority
        divDelete.appendChild( iconDelete )
        divLeft.append( inputCheck, h2 )
        divRight.append( select, divDelete )
        article.append( divLeft, divRight )
        dom.appendChild( article )
        console.log( select.value )
    }
    editPriority () { }
    editTitle () { }
    complete ( event ) {

    }
    delete () {

    }
}