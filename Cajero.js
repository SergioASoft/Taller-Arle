const depositos=[]
const retiros=[]
let saldo= 0;

let desplegarMenu= () =>{
    do{
        ans=parseInt(prompt("¡Bienvenido a nuestro cajero automático! \n ¿Qué deseas hacer? \n\n 1. Consultar saldo. \n 2. Depositar. \n 3. Retirar. \n 4. Registro movimientos. \n 5. Salir."))
        switch(ans){
            case 1:
                consultarSaldo()
                break
            case 2:
                saldo=depositar()
                break
            case 3:
                saldo=retirar()
                break
            case 4:
                consultarRegistro()
                break
            case 5:
                alert("¡Entendido, vuelvo pronto!")
                break
            default:
                alert("La respuesta no es válida")
        }
    }while(ans!==5)
}

let consultarSaldo= (saldo) => alert("Su saldo actual es : $" + saldo)

let depositar = (saldo) => {
    let deposito=0
    do{
        deposito=parseInt(prompt("Ingrese el valor a depositar"))
        if (deposito<=0 || isNaN(deposito)){
            alert("El valor a depositar debe ser mayor a $0")
        }
    }while (deposito<=0 || isNaN(deposito))
    saldo += deposito
    registroDeposito(deposito)
    return saldo
}

let retirar = (saldo) => {
    let retiro=0;
    do{
        retiro=parseInt(prompt("Ingrese el valor a depositar"))
        if (retiro<=0 || retiro>500 || isNaN(retiro)){
            alert("El valor a retirar debe ser mayor a $0 y menor a $500")
        }else if(retiro>saldo){
            alert("EL valor a retirar excede su saldo")
        }
    }while (retiro<=0 || retiro>500 || isNaN(retiro) || retiro>saldo)
    saldo -= retiro
    registroRetiro(retiro)
    return saldo
}

desplegarMenu(saldo,depositos,retiros);