const d = document,
  $main = d.querySelector('main')

const getHTML = (options) => {
let {error, success, url } = options;

const xhr = new XMLHttpRequest();

  xhr.addEventListener('readystatechange', e => {
  if(xhr.status =! 4) return;

    if(xhr.status >= 200 && xhr.status < 300) {
    
      let html = xhr.responseText;
      success(html);

    } else {
    
      let message = xhr.statusText || "Ocurrio un error";
      error(`"Error" ${xhr.status}:${message}` )

    }
  })

  xhr.open('Get', url);
  xhr.setRequestHeader('Content-type','text/html;charset=utf-8')
  xhr.send();

};


d.addEventListener('DomContendLoaded', e => {

getHTML({
  url:'./assets/home.html',
  success: (html) => ($main.innerHTML = html),
  error: (err) => ($main.innerHTML `<h1>${err}</h1>`)
})

})

d.addEventListener('click', e => {
  if (e.target.matches('.menu a')) {
    e.preventDefault();

    getHTML({
    url: e.target.href,
      success:(html) => ($main.innerHTML = html),
      error: (err) => ($main.innerHTML = `<h1>${err}</h1>`)
    })
    
  }


})




