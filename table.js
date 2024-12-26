// window.onload = () => {
//     listMovie();
// }

// let listMovie = async () => {
//     const peticion = await fetch('http://localhost:8080/movie',
//     {
//         method: 'GET',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         }
//     });

//     const movies = await peticion.json();

//     let contentTable = "";

//     for(let movie of movies){
//         let row = `<tr>
//             <td>${movie.id}</td>
//             <td>${movie.title}</td>
//             <td>${movie.director}</td>
//             <td>${movie.genre}</td>
//             <td>
//                 <i onClick="updateMovie(${movie.id})" class="material-icons button edit">edit</i>
//                 <i onClick="deleteMovie(${movie.id})" class="material-icons button delete">delete</i>
//             </td>
//         </tr>`;
//         contentTable += row;
//     }
//     document.querySelector("#table tbody").outerHTML = contentTable;
// };

// let deleteMovie = async (id) => {
//     const peticion = await fetch('http://localhost:8080/movie/'+id,
//     {
//         method: 'DELETE',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         }
//     });

//     listMovie();
// }

// let idUpdate;

// let updateMovie = async (id) => {
//     showForm();

//     idUpdate = id;

//     const peticion = await fetch('http://localhost:8080/movie/'+id,
//     {
//         method: 'GET',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         }
//     });
//     const movie = await peticion.json();

//     document.getElementById("title").value = movie.title;
//     document.getElementById("director").value = movie.director;
//     document.getElementById("genre").value = movie.genre;

//     let btnUpdate = document.getElementById("btnUpdate");
// }

// btnUpdate.addEventListener("click", event => {
//     applyUpdate(idUpdate);
// });

// let applyUpdate = async (id) => {
//     let camps = {};

//     camps.id = id;
//     camps.title = document.getElementById("title").value;
//     camps.director = document.getElementById("director").value;
//     camps.genre = document.getElementById("genre").value;

//     const peticion = await fetch('http://localhost:8080/movie',
//     {
//         method: 'PUT',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(camps)
//     });

//     listMovie();
// }

// function showForm(){
//     let form = document.getElementById("form").style.visibility="visible";
// }

window.onload = () => {
    listMovie();
};

let listMovie = async () => {
    const peticion = await fetch('http://localhost:8080/movie', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });

    const movies = await peticion.json();

    let contentTable = "";

    for (let movie of movies) {
        let row = `<tr>
            <td>${movie.id}</td>
            <td>${movie.title}</td>
            <td>${movie.director}</td>
            <td>${movie.genre}</td>
            <td>
                <i onClick="updateMovie(${movie.id})" class="material-icons button edit">edit</i>
                <i onClick="deleteMovie(${movie.id})" class="material-icons button delete">delete</i>
            </td>
        </tr>`;
        contentTable += row;
    }
    document.querySelector("#table tbody").outerHTML = contentTable;
};

let deleteMovie = async (id) => {
    const peticion = await fetch('http://localhost:8080/movie/' + id, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });

    listMovie();
};

let idUpdate;

let updateMovie = async (id) => {
    showForm();

    idUpdate = id;

    const peticion = await fetch('http://localhost:8080/movie/' + id, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });

    const movie = await peticion.json();

    document.getElementById("title").value = movie.title;
    document.getElementById("director").value = movie.director;
    document.getElementById("genre").value = movie.genre;
};

let btnUpdate = document.getElementById("btnUpdate");

btnUpdate.addEventListener("click", event => {
    event.preventDefault();
    applyUpdate();
});

let applyUpdate = async () => {
    let camps = {};

    camps.title = document.getElementById("title").value;
    camps.director = document.getElementById("director").value;
    camps.genre = document.getElementById("genre").value;

    const peticion = await fetch('http://localhost:8080/movie/' + idUpdate, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(camps)
    });

    if (peticion.ok) {
        alert("Movie updated successfully!");
        listMovie();
        hideForm();
    } else {
        alert("Failed to update the movie.");
    }
};

function showForm() {
    document.getElementById("form").style.visibility = "visible";
}

function hideForm() {
    document.getElementById("form").style.visibility = "hidden";
}
