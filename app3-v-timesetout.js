let cola = []

//Función para agregar clientes
const agregarCliente = (nombre) => {
    if (cola.length < 7) {
        cola.push(nombre)
        alert(` ${nombre} agregado con éxito.`)
    } else {
        alert("La fila esta llena (Máximo 7 clientes).")
    }
};

//Función para atender clientes con espera de 3 segundos
const atenderCliente = () => {
    if (cola.length > 0) {
        alert("Atendiendo a cliente...");
        setTimeout(() => {
            const cliente = cola.shift();
            alert(`El cliente ${cliente} ha sido atendido.`);
        }, 3000);
    } else {
        alert("No hay clientes en la fila.");
    }
};


//Menú principal
while (true) {
    let opcion = prompt("1. Agregar cliente\n2. Atender cliente\n3. Ver fila\n4. Dejar caja\nElige una opción:");
    if (opcion === "1") {
        let nombre = prompt("Ingresa el nombre del cliente:");
        agregarCliente(nombre);
    } else if (opcion === "2") {
        atenderCliente()
    } else if (opcion === "3") {
        alert("Clientes en fila:\n" + (cola.length > 0 ? cola.join("\n"): "Ninguno"));
    } else if (opcion === "4") {
        alert("Dejando la caja...");
        break;
    } else {
        alert("Opción invalida.")
    }
};