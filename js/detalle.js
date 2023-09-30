function obtenerIdProductoDesdeURL() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get("id");
}

function cargarDetallesDelProducto() {
  const productoId = obtenerIdProductoDesdeURL();

  const productos = JSON.parse(localStorage.getItem("productos"));

  const producto = productos.find((item) => item.id === parseInt(productoId));

  if (producto) {
    document.getElementById("imagenProducto").src = producto.imagen || "";
    document.getElementById("nombreProducto").textContent = producto.nombre;
    document.getElementById(
      "descripcionProducto"
    ).textContent = `Descripción: ${producto.descripcion}`;
    document.getElementById(
      "precioProducto"
    ).textContent = `Precio: $${producto.precio.toFixed(2)}`;
  } else {
    console.error("Producto no encontrado");
  }
}

cargarDetallesDelProducto();

document.addEventListener("DOMContentLoaded", () => {
  const starRatingContainers = document.querySelectorAll(".star-rating");

  starRatingContainers.forEach((container) => {
    const stars = container.querySelectorAll(".fa-star");
    let userRating = 0;

    stars.forEach((star, index) => {
      star.addEventListener("click", () => {
        userRating = index + 1;
        updateStarRating(container, userRating);
      });
    });

    function updateStarRating(container, rating) {
      const stars = container.querySelectorAll(".fa-star");
      stars.forEach((star, index) => {
        if (index < rating) {
          star.classList.add("checked");
        } else {
          star.classList.remove("checked");
        }
      });
    }
  });
});
