let productos = ["Gaseosa", "Chocolate", "Caramelos", "Galletas", "Papas"];
let cantidades = [3, 2, 5, 0, 4];

const mostrarInventario = () => {
    let inventario = "Inventario:\n";
    for (let i = 0; i < productos.length; i++) {
        inventario += `${i + 1}. ${productos[i]} - Cantidad: ${cantidades[i]}\n`;
    }
    alert(inventario);
};

const sugerirProducto = () => {
    for (let i = 0; i < cantidades.length; i++) {
        if (cantidades[i] > 0) return productos[i];
    }
    return null;
};

const comprarProducto = (codigo) => {
    if (codigo < 1 || codigo > productos.length) {
        alert("Código inválido.");
    } else if (cantidades[codigo - 1] <= 0) {
        let sugerencia = sugerirProducto();
        if (sugerencia) {
            alert(`Producto agotado. ¿Por qué no pruebas con: ${sugerencia}?`);
        } else {
            alert("Todos los productos están agotados.");
        }
    } else {
        cantidades[codigo - 1]--;
        alert(`Entregando ${productos[codigo - 1]}. ¡Gracias por tu compra!`);
    }
};

while (true) {
    let opcion = prompt("1. Ver productos\n2. Comprar\n3. Salir");
    if (opcion === "1") {
        mostrarInventario();
    } else if (opcion === "2") {
        let moneda = prompt("Inserta $1 para continuar (escribe 1):");
        if (moneda === "1") {
            let codigo = parseInt(prompt("Ingresa el código del producto (1-5):"));
            comprarProducto(codigo);
        } else {
            alert("Moneda incorrecta.");
        }
    } else if (opcion === "3") {
        alert("Saliendo...");
        break;
    } else {
        alert("Opción inválida.");
    }
}
