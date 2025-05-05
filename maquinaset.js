// Usamos un Set para almacenar productos como "Nombre:Stock"
let productosSet = new Set([
    "Galletas:3",
    "Gaseosa:2",
    "Chicle:1",
    "Chocolate:0",
    "Agua:5"
]);

// Función para mostrar inventario
const mostrarInventario = () => {
    let mensaje = "Inventario actual:\n";
    let index = 1;
    for (let item of productosSet) {
        let [nombre, cantidad] = item.split(":");
        mensaje += `${index}. ${nombre} - Stock: ${cantidad}\n`;
        index++;
    }
    alert(mensaje);
};

// Función para comprar un producto
const comprarProducto = (codigo) => {
    let productosArray = Array.from(productosSet);
    if (codigo < 1 || codigo > productosArray.length) {
        alert("Código inválido.");
        return;
    }

    let productoOriginal = productosArray[codigo - 1];
    let [nombre, cantidad] = productoOriginal.split(":");
    cantidad = parseInt(cantidad);

    if (cantidad <= 0) {
        alert(`Producto agotado: ${nombre}`);
        return;
    }

    let moneda = prompt("Inserta una moneda de $1 (escribe 1):");
    if (moneda !== "1") {
        alert("Moneda inválida.");
        return;
    }

    // Actualizar stock
    productosSet.delete(productoOriginal); // Eliminamos el viejo
    productosSet.add(`${nombre}:${cantidad - 1}`); // Agregamos el nuevo

    alert(`Producto entregado: ${nombre}`);
};

// Menú principal
while (true) {
    let opcion = prompt("1. Ver inventario\n2. Comprar producto\n3. Salir\nElige una opción:");
    
    if (opcion === "1") {
        mostrarInventario();
    } else if (opcion === "2") {
        mostrarInventario();
        let codigo = parseInt(prompt("Ingresa el código del producto (1-5):"));
        comprarProducto(codigo);
    } else if (opcion === "3") {
        alert("Gracias por usar la máquina expendedora.");
        break;
    } else {
        alert("Opción inválida.");
    }
}
