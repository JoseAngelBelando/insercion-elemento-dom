// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

// # Ejercicios

// ## Inserción de elementos en el DOM

// - Usando este HTML, haz que al hacer click en el botón se vayan añadiendo items con el texto Item 1, Item 2, Item 3,... Los item deben llevar el número correspondiente independiente de con cuantos item empiece la lista-

// ```html
// <button>Añadir Elementos</button>
// <ul>
//   <li>Item 1</li>
// </ul>
// ```

// const button = document.getElementById('button');
// const ul = document.getElementById('ul');
// let itemCount = ul.getElementById('li').length;

// button.addEventListener('click', () => {
//   itemCount++;
//   const newItem = document.createElement('li');
//   newItem.textContent = `Item ${itemCount}`;
//   ul.appendChild(newItem);
// });
// - Usando el input range que te doy haz un generador de encabezados. El input te permite seleccionar un número del 1 al 6, en función de cual elijas ser generará un encabezado con la etiqueta correspondiente. Si elijes un 3, al hacer click en el botón se generará un h3 con el texto "soy un h3", si elijes un 5 un h5 con el texto "soy un h5" y así para todos.

// ```html
// <div>
//   <label>1</label>
//   <input type="range" id="range" min="1" max="6" step="1" value="1" />
//   <button>Generar Encabezado</button>
// </div>
// ```

// - Haz un simulador de posts, con este HTML tienes que conseguir que se añada un post con su autor y el texto que hayas escrito dentro del contenedor de posts. Cada post debe ir dentro de un div independiente.

// ```html
// <h1>Posts</h1>
// <h2>Post de ejemplo</h2>
// <!-- Contenedor de posts -->
// <div>
//   <!-- Post independiente -->
//   <div>
//     <span>Author: Dorian</span>
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//   </div>
//   <!-- Fin del post independiente -->
// </div>
// <!-- Fin del contenedor de posts -->
// <form>
//   <div>
//     <label>Author</label>
//     <input type="text" />
//   </div>
//   <div>
//     <label>Message:</label>
//     <textarea></textarea>
//   </div>
//   <button>Send Post</button>
// </form>
// ```

// - Crea una función que cree un div con dos botones dentro. Un botón tendrá el texto 'red' y el otro el texto 'green', al hacer click en los botones debe cambiar el background-color del div al color que corresponda.

// ## Inserción múltiple

// - Crea una función que sea capaz de generar 25 números aleatorios y los devuelva.

const generarNumerosEnterosAleatorios = () => {
  const numerosAleatorios = Array.from({ length: 25 }, () => Math.floor(Math.random() * 100) + 1);
  return numerosAleatorios;
};

// Llamada a la función y muestra de los números generados
const numeros = generarNumerosEnterosAleatorios();
console.log(numeros);

// - Crea una función que reciba los 25 números aleatorios que has creado en el ejercicio anterior y genere e inserte en el DOM 2 listas, una con números pares y otra con números impares.

const generarNumerosAleatorios = () => {
  return Array.from({ length: 25 }, () => Math.floor(Math.random() * 100) + 1);
};

const insertarListasParesImpares = numeros => {
  const pares = numeros.filter(num => num % 2 === 0);
  const impares = numeros.filter(num => num % 2 !== 0);

  const crearListaHTML = numeros => numeros.map(num => `<li>${num}</li>`).join('');

  document.getElementById('numeros-pares').innerHTML = crearListaHTML(pares);
  document.getElementById('numeros-impares').innerHTML = crearListaHTML(impares);
};

document.addEventListener('DOMContentLoaded', () => {
  const numeros = generarNumerosAleatorios();
  insertarListasParesImpares(numeros);
});

document.addEventListener('DOMContentLoaded', () => {
  const numeros = generarNumerosAleatorios();
  insertarListasParesImpares(numeros);
});

// - Con esta estructura, crea una función que, a medida que vayas escribiendo, te ponga dentro de la lista:
//   - El texto tiene X caracteres.
//   - El texto tiene X vocales.
//   - El texto tiene X consonantes.
//   - Has introducido X espacios

// ```html
// <div>
//   <input type="text" />
//   <ul></ul>
// </div>
// ```

const analizarTexto = texto => {
  const longitud = texto.length;
  const vocales = texto.match(/[aeiouáéíóúüAEIOUÁÉÍÓÚÜ]/g)?.length || 0;
  const consonantes = texto.match(/[bcdfghjklmnpqrstvwxyzñBCDFGHJKLMNPQRSTVWXYZÑ]/g)?.length || 0;
  const espacios = texto.match(/\s/g)?.length || 0;

  return [
    `El texto tiene ${longitud} caracteres.`,
    `El texto tiene ${vocales} vocales.`,
    `El texto tiene ${consonantes} consonantes.`,
    `Has introducido ${espacios} espacios.`
  ];
};

// Función para actualizar el DOM
const actualizarLista = informacion => {
  const lista = document.getElementById('informacion-texto');
  lista.innerHTML = informacion.map(item => `<li>${item}</li>`).join('');
};

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
  // Event listener para el input de texto
  document.getElementById('texto').addEventListener('input', event => {
    const texto = event.target.value;
    const informacion = analizarTexto(texto);
    actualizarLista(informacion);
  });
});

// - Con este HTML consigue que al introducir un número POSITIVO y MAYOR de 0 se genere la tabla de multiplicar de ese número del 0 al 10 como elementos de la lista. En el caso de que el número no sea correcto o no haya número, el botón estará desactivado.

// ```html
// <label>Introduce un número</label>
// <input type="number" />
// <button>Imprimir tabla de multiplicar</button>
// <ul></ul>
// ```

const boton = document.getElementById('boton');
const tabla = document.getElementById('tabla');

boton.addEventListener('click', () => {
  // Obtener el número introducido por el usuario
  const numero = parseInt(document.getElementById('numero').value);

  // Limpiar la tabla existente
  tabla.innerHTML = '';

  // Verificar si el número es válido (positivo y mayor que 0)
  if (numero > 0 && !isNaN(numero)) {
    // Generar la tabla de multiplicar del número del 0 al 10
    for (let i = 0; i <= 10; i++) {
      const resultado = numero * i;
      const item = document.createElement('li');
      item.textContent = `${numero} x ${i} = ${resultado}`;
      tabla.appendChild(item);
    }
  } else {
    // Mostrar un mensaje si el número no es válido
    const mensaje = document.createElement('li');
    mensaje.textContent = 'Introduce un número válido (mayor que 0).';
    tabla.appendChild(mensaje);
  }
});

// Desactivar el botón si el input está vacío inicialmente
boton.disabled = true;
document.getElementById('numero').addEventListener('input', () => {
  boton.disabled = document.getElementById('numero').value.trim() === '';
});

// - Con este objeto debes crear tarjetas de usuario que muestren todos los datos, el diseño es libre, lo importante es que muestren toda la información del usuario y la imagen de perfil. Crea una función que genere todas las tarjetas de usuario y las inserte en el DOM

const USERS = [
  {
    name: 'Josep Flores',
    age: 77,
    username: 'Josep85',
    email: 'Josep_Flores@hotmail.com',
    profileImage: 'https://randomuser.me/api/portraits/women/24.jpg'
  },
  {
    name: 'Ricardo Rosas',
    age: 43,
    username: 'Ricardo_Rosas',
    email: 'Ricardo_Rosas22@yahoo.com',
    profileImage: 'https://randomuser.me/api/portraits/men/57.jpg'
  },
  {
    name: 'Iván Tamayo',
    age: 40,
    username: 'tamayo87',
    email: 'Ivan_Tamayo61@yahoo.com',
    profileImage: 'https://randomuser.me/api/portraits/men/9.jpg',
    job: 'Lead Communications Designer'
  },
  {
    name: 'Maica Villanueva',
    age: 64,
    username: 'Maica.Villanueva18',
    email: 'Maica.Villanueva1@yahoo.com',
    profileImage: 'https://randomuser.me/api/portraits/women/4.jpg'
  },
  {
    name: 'Pedro Estrada',
    age: 55,
    username: 'Pedro29',
    email: 'Pedro_Estrada22@hotmail.com',
    profileImage: 'https://randomuser.me/api/portraits/men/2.jpg',
    job: 'Central Directives Liaison'
  },
  {
    name: 'Jorge Cedillo',
    age: 33,
    username: 'Jorge_Cedillo',
    email: 'Jorge.Cedillo2@yahoo.com',
    profileImage: 'https://randomuser.me/api/portraits/men/88.jpg'
  }
];
const generarTarjetasUsuarios = () => {
  const container = document.getElementById('cards-container');
  USERS.forEach(user => {
    const card = document.createElement('div');
    card.classList.add('card');

    const profileImage = document.createElement('img');
    profileImage.src = user.profileImage;
    profileImage.alt = `${user.name}'s profile`;

    const details = document.createElement('div');
    details.classList.add('details');

    const name = document.createElement('h2');
    name.textContent = user.name;

    const username = document.createElement('p');
    username.textContent = `Username: ${user.username}`;

    const age = document.createElement('p');
    age.textContent = `Age: ${user.age}`;

    const email = document.createElement('p');
    email.textContent = `Email: ${user.email}`;

    // Añadir información adicional si está disponible
    if (user.job) {
      const job = document.createElement('p');
      job.textContent = `Job: ${user.job}`;
      details.append(job);
    }

    details.append(name);
    details.append(username);
    details.append(age);
    details.append(email);

    card.append(profileImage);
    card.append(details);

    container.append(card);
  });
};

// Llamar a la función para generar las tarjetas al cargar la página
document.addEventListener('DOMContentLoaded', generarTarjetasUsuarios);
