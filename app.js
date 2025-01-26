// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
// Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos =[];

function agregarAmigo(){

     // Obtener el valor del campo de texto
     const entrada = document.getElementById('amigo');
     const nombre = entrada.value.trim();

    console.log(nombre);
     // Verificar si el campo de texto está vacío
     if (nombre === '') {
       alert('Por favor, inserte un nombre');
       return;
     }
     // Agregar el nombre a la lista utilizando push
     listaAmigos.push(nombre);
     actualizarLista();

     // Limpiar el campo de texto después de actualizar la lista
      entrada.value = '';
    }

    function actualizarLista() {
      const lista = document.getElementById('listaAmigos');
      lista.innerHTML = '';
      for (let i = 0; i < listaAmigos.length; i++) {        // Recorrer el array mostrando el contenido de la lista 
        const nuevoNombre = document.createElement('li');
        nuevoNombre.textContent = listaAmigos[i];
        lista.appendChild(nuevoNombre);
      };
   }

function sortearAmigo(){
    if (listaAmigos.length === 0) {
        alert('La lista está vacía. Agregue nombres primero.');
        return;
      }
      // Genera un indice aleatorio para el sorteo, según la cantidad de elementos en la lista
      const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);  
      const amigoSorteado = listaAmigos[indiceAleatorio];
      document.getElementById('resultado').innerHTML = `Amigo Sorteado: ${amigoSorteado}`;
    } 