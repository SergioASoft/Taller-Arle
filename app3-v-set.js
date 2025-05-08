// Set para Atención de clientes en supermercado
let cola = new Set();

// Función para agregar clientes
const agregarCliente = (nombre) => {
    if (cola.size < 7) {
        cola.add(nombre);
        alert(` ${nombre} agregado con éxito.`);
    } else {
        alert("La fila está llena (Máximo 7 clientes).");
    }
};

// Función para atender clientes
const atenderCliente = () => {
    if (cola.size > 0) {
        // Obtener el primer cliente usando iterador
        let iterador = cola.values();
        let cliente = iterador.next().value;
        cola.delete(cliente);
        alert(`Atendiendo a: ${cliente}`);
    } else {
        alert("No hay clientes en la fila.");
    }
};

// Función para mostrar la fila
const mostrarFila = () => {
    let mensaje="Clientes en cola: \n"
    let i=0;
    for (let cliente of cola) {
        i++
        mensaje+=i+"- "+ cliente + "\n";
    }
    if (cola.size==0) {
        mensaje="No hay clientes en la cola."
    }
    alert(mensaje)
};

// Función para salir y limpiar la fila
const salirCaja = () => {
    cola.clear();
    alert("Fila limpiada. Dejando la caja...");
};

// Menú principal
while (true) {
    let opcion = prompt("1. Agregar cliente\n2. Atender cliente\n3. Ver fila\n4. Dejar caja\nElige una opción:");
    if (opcion === "1") {
        let nombre = prompt("Ingresa el nombre del cliente:");
        agregarCliente(nombre);
    } else if (opcion === "2") {
        atenderCliente();
    } else if (opcion === "3") {
        mostrarFila();
    } else if (opcion === "4") {
        salirCaja();
        break;
    } else {
        alert("Opción inválida.");
    }
};
