const readline = require('readline');

let cola = [];
let contadorTurno = 1;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const mostrarMenu = () => {
    console.log("\n--- Menú ---");
    console.log("1. Agregar cliente");
    console.log("2. Atender cliente");
    console.log("3. Ver fila");
    console.log("4. Salir");
    rl.question("Elige una opción: ", manejarOpcion);
};

const agregarCliente = () => {
    if (cola.length >= 7) {
        console.log("⚠️  La fila está llena (máximo 7 clientes).");
        return mostrarMenu();
    }

    rl.question("Ingresa el nombre del cliente: ", (nombre) => {
        const cliente = {
            nombre: nombre.trim(),
            turno: contadorTurno++,
            horaIngreso: new Date().toLocaleTimeString()
        };
        cola.push(cliente);
        console.log(`✅ Cliente ${cliente.nombre} (Turno ${cliente.turno}) agregado a las ${cliente.horaIngreso}.`);
        mostrarMenu();
    });
};

const atenderCliente = () => {
    if (cola.length === 0) {
        console.log("⚠️  No hay clientes en la fila.");
        return mostrarMenu();
    }

    const cliente = cola[0];
    console.log(`⏳ Atendiendo a ${cliente.nombre} (Turno ${cliente.turno})...`);

    setTimeout(() => {
        const atendido = cola.shift();
        console.log(`✅ Cliente ${atendido.nombre} (Turno ${atendido.turno}) fue atendido.`);
        mostrarMenu();
    }, 3000);
};

const verFila = () => {
    if (cola.length === 0) {
        console.log("📭 No hay clientes en la fila.");
    } else {
        console.log("📋 Clientes en fila:");
        cola.forEach((c, i) => {
            console.log(`${i + 1}. ${c.nombre} | Turno: ${c.turno} | Ingreso: ${c.horaIngreso}`);
        });
    }
    mostrarMenu();
};

const manejarOpcion = (opcion) => {
    switch (opcion.trim()) {
        case "1":
            agregarCliente();
            break;
        case "2":
            atenderCliente();
            break;
        case "3":
            verFila();
            break;
        case "4":
            console.log("👋 Cerrando aplicación...");
            rl.close();
            break;
        default:
            console.log("❌ Opción inválida.");
            mostrarMenu();
            break;
    }
};

// Inicio del programa
mostrarMenu();