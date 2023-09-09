document.addEventListener("DOMContentLoaded", function () {
    const btnConectar = document.getElementById("btnConectar");
    const resultadosDiv = document.getElementById("resultados");

    btnConectar.addEventListener("click", function () {
        // Realizar una solicitud al servidor para ejecutar la conexión a la base de datos
        fetch("/conectar-bd", {
            method: "GET",
        })
        .then((response) => response.json())
        .then((data) => {
            // Mostrar los resultados en la página web
            resultadosDiv.innerHTML = JSON.stringify(data);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
    });
});
