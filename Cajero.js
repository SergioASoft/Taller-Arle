const movimientos=[]

var saldo= 0;
var repetir= true;

let desplegarMenu= () =>{
        ans=parseInt(prompt("¡Bienvenido a nuestro cajero automático! \n ¿Qué deseas hacer? \n\n 1. Consultar saldo. \n 2. Depositar. \n 3. Retirar. \n 4. Registro movimientos. \n 5. Salir."))
        switch(ans){
            case 1:
                consultarSaldo()
                return true;
            case 2:
                depositar()
                return true;
            case 3:
                retirar()
                return true;
            case 4:
                consultarmovimientos()
                return true;
            case 5:
                alert("¡Entendido, vuelvo pronto!")
                return false
            default:
                alert("La respuesta no es válida")
                return true;
        }
}

let consultarSaldo= () => alert("Su saldo actual es : $" + saldo)

let depositar = () => {
    let deposito=0
    do{
        deposito=parseInt(prompt("Ingrese el valor a depositar"))
        if (deposito<=0 || isNaN(deposito)){
            alert("El valor a depositar debe ser mayor a $0")
        }
    }while (deposito<=0 || isNaN(deposito))
    saldo += deposito
    alert("Se han depositado $" + deposito + " en su cuenta")
    registroDeposito(deposito)
}

let retirar = () => {
    let retiro=0;
    do{
        retiro=parseInt(prompt("Ingrese el valor a retirar"))
        if (retiro<=0 || retiro>500 || isNaN(retiro)){
            alert("El valor a retirar debe ser mayor a $0 y menor a $500")
        }else if(retiro>saldo){
            alert("EL valor a retirar excede su saldo")
        }
    }while (retiro<=0 || retiro>500 || isNaN(retiro) || retiro>saldo)
    saldo -= retiro
    alert("Se han retirado $" + retiro + " de la cuenta")
    registroRetiro(retiro)
}

let registroDeposito = (deposito) => {
    if (movimientos.length>=5){
        movimientos.shift()
    }
    movimientos.push("+ $"+deposito+" \n")
}
let registroRetiro = (retiro) => {
    if (movimientos.length>=5){
        movimientos.shift()
    }
    movimientos.push("- $"+retiro+" \n")
    
} 

let consultarmovimientos= () => {
    let mensaje=""
    for (mov of movimientos){
        mensaje+= mov    
    }
    alert(" Su historial de movimientos es: \n"+mensaje)
}

while (repetir){
    repetir=desplegarMenu();
}
