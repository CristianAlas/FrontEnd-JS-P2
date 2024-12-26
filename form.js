// let button = document.getElementById("btnRegister");

// button.addEventListener("click", event => {
//     registerMovie();
// });

// let registerMovie = async () => {

// let camps = {};

// camps.title = document.getElementById("title").value;
// camps.director = document.getElementById("director").value;
// camps.genre = document.getElementById("genre").value;

// const paticion = await fetch("http://localhost:8080/movie", 
// {
//     method: "POST",
//     headers: {
//         "Accept": "application/json",
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify(camps)
// });
// }

let button = document.getElementById("btnRegister");

button.addEventListener("click", event => {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario
    registerMovie();
});

let registerMovie = async () => {
    let camps = {};

    camps.title = document.getElementById("title").value;
    camps.director = document.getElementById("director").value;
    camps.genre = document.getElementById("genre").value;

    const response = await fetch("http://localhost:8080/movie", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(camps)
    });

    if (response.ok) {
        alert("Movie registered successfully!");
    } else {
        alert("Failed to register movie. Please check your input.");
    }
}
