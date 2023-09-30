const buscador = document
  .querySelector("form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
  });

function verDetalles(productoId) {
  function guardarProductosEnLocalStorage() {
    fetch("productos.json")
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("productos", JSON.stringify(data));
      })
      .catch((error) => {
        console.error(
          "Error al cargar los productos desde el archivo JSON",
          error
        );
      });
  }
  guardarProductosEnLocalStorage();
  document.location.href = `detalle.html?id=${productoId}`;
}
