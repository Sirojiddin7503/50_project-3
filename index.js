const opens = document.getElementById('open'),
      closes  = document.getElementById('close'),
      container = document.querySelector('.container');


      opens.addEventListener('click',()=>container.classList.add('show-nav'));
      closes.addEventListener('click',()=>container.classList.remove('show-nav'));