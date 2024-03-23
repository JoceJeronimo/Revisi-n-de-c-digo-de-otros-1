const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');// se coloca un punto para hacer referencia a una clase
const $b = document.querySelector('.blog'); // se cambia # por un punto para hacer referencia a una clase, ya que estaba parcado como id
const $l = document.querySelector('.location');

async function displayUser(username) { /* Se agrego al inicio de la funcion el async */
  $n.textContent = 'cargando...';
  try { // Se señala un bloque de instrucciones con try 
    const response = await fetch(`${usersEndpoint}/${username}`);
    const data = await response.json(); // cambia la variable a response a un formato .json

    $n.textContent = '${data.name}';
    $b.textContent = '${data.blog}';
    $l.textContent = '${data.location}';
  } catch (err) { // Se usa catch para resolver la promesa cerrando el bloque de intrucciones 
    handleError(err); //En caso de producirse una excepcion se manda a llamar a la funcion handleError(err)
  }
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}


displayUser('stolinski').catch(handleError);