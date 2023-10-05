//PREGUNTA FINAL:

const readData = () => {
    console.log ('aplicando ejemplo');

    //realizaremos la petición con fetch.

    const prueba = fetch ('https://jsonplaceholder.typicode.com/users')
    .then((info) => console.log(info));
    console.log(prueba);
}

//Ahora aplicaremos otro ejemplo pero con datos ficticios de la API de JsonPlaceholder pero para iterar.


const jsonPrueba = fetch('https://jsonplaceholder.typicode.com/users')
.then((info) => info.json())
.then((respuesta) => respuesta.forEach(phone => {
    console.log(phone.phone)
}));


readData();
jsonPrueba();



