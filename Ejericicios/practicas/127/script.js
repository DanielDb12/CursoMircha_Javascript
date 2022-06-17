const d = document;


  function contactForm() {
   const $form = d.querySelector(".contact-form")
    $inputs = d.querySelectorAll(".contact-form [require]")



    $inputs.forEach( e => {
      const $span = d.createElement("span")
      $span.id = input.name;
      $span.textContent = input.title;
      $span.classList.add("contact-form-error", "none")
      input.insertAdjacentElement("afterend", "$span")
 
    });

  
    d.addEventListener('keyup', e => {
    if (e.target.matches(".contact-form[require]")) {

      let $input = e.target,
        pattern = $input.pattern || $input.dataset.pattern
        
      if(pattern && $input.value!=="") {


      let regex = new RegExp(pattern);
        return !regex.exec($input.value)
          ?d.getElementById($input.name).classList.add("is-active")
          :d.getElementById($input.name).classList.remove("is-active")

      }

      if (!pattern) {
        return $input.value ===""
          ? d.getElementById($input.name).classList.add("is-active")
          : d.getElementById($input.name).classList.remove("is-active")
        
      }

    }

    })

    d.addEventListener("keyup", (e) => {
      d.addEventListener("submit", (e) => {
      e.preventDefault()
        alert("Enviando Formulario")


        const $loader = d.querySelector(".contact-form-loader"),
          $response = d.querySelector(".contact-form-response")

        $loader.classList.remove("none")

      })


    })





  }




d.addEventListener('DOMContentLoaded', contactForm)
