let productos = ["Galletas", "Chicles", "Chocolate", "Gaseosa", "Papas"];
let cantidades = [3, 2, 4, 1, 5]; // Cantidad disponible de cada producto

// Mostrar el inventario
const mostrarInventario = () => {
    let mensaje = "Inventario:\n";
    for (let i = 0; i < productos.length; i++) {
        mensaje += `${i + 1}. ${productos[i]} - ${cantidades[i]} unidades\n`;
    }
    alert(mensaje);
};

// Comprar un producto
const comprarProducto = (codigo) => {
    if (codigo < 1 || codigo > productos.length) {
        alert("Código inválido. Elige un número del 1 al 5.");
    } else if (cantidades[codigo - 1] === 0) {
        alert("Producto agotado.");
    } else {
        cantidades[codigo - 1]--;
        alert(`Has comprado ${productos[codigo - 1]}. ¡Gracias!`);
    }
};

// Menú principal
while (true) {
    let opcion = prompt("Máquina Expendedora\n1. Ver inventario\n2. Comprar producto\n3. Salir\nElige una opción:");

    if (opcion === "1") {
        mostrarInventario();
    } else if (opcion === "2") {
        let codigo = parseInt(prompt("Ingresa el número del producto (1-5):"));
        comprarProducto(codigo);
    } else if (opcion === "3") {
        alert("¡Gracias por usar la máquina!");
        break;
    } else {
        alert("Opción inválida.");
    }
}
