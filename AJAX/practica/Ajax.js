(() => {
const xhr = new XMLHttpRequest(),
$xhr = document.getElementById('xhr'),
$fragment = document.createDocumentFragment();


//console.log(xhr)

  xhr.addEventListener('readystatechange', e =>  {
      if (xhr.readyState !== 4) return;

    console.log(xhr)

    if (xhr.status >= 200 && xhr.status < 300) {

     let json = JSON.parse(xhr.responseText)
      console.log(json)

      json.forEach(e => {
        const $li = document.createElement('li');
        $li.innerHTML = `Nombre: ${e.name}</br> email:${e.email} </br> ${e.address.street}`


        $fragment.appendChild($li)
      });

      $xhr.appendChild($fragment)
      
    } else {
      let message = xhr.statusText || 'Ocurrio un error'
      $xhr.innerHTML = `Error ${xhr.statusText}:${message}`
      $xhr.style.background = 'red'
    }
  })

  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users')
  xhr.send()

})();
