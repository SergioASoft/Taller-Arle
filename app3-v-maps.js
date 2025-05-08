// Map para atención de clientes en supermercado (clave: turno único, valor: nombre)
let cola = new Map();
let turnoCliente = 1; // Contador para claves únicas

// Función para agregar clientes
const agregarCliente = (nombre) => {
    if (cola.size < 7) {
        cola.set(turnoCliente++, nombre);
        alert(` ${nombre} agregado con éxito.`);
    } else {
        alert("La fila está llena (Máximo 7 clientes).");
    }
};

// Función para atender clientes
const atenderCliente = () => {
    if (cola.size > 0) {
        // Obtener el primer cliente (primer par clave-valor)
        let iterador = cola.entries();
        let [turno, nombre] = iterador.next().value;
        cola.delete(turno);
        alert(`Atendiendo a: ${nombre} (Turno: ${turno})`);
    } else {
        alert("No hay clientes en la fila.");
    }
};

// Función para mostrar la fila
const mostrarFila = () => {
    let mensaje = "Clientes en fila: \n";
    for (let [turno , nombre] of cola) {
        mensaje += nombre +" --  (Turno: "+turno+") \n";
    }
    if (cola.size === 0) {
        mensaje = "No hay clientes en la fila.";
    }
    alert(mensaje);
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
        alert("Opción inválturnoa.");
    }
};
