import './style.scss';

window.addEventListener('DOMContentLoaded', function(){


    let iniciarModalCometario = document.querySelector('#buttonModalComentarios'),
    modalComentarios = new bootstrap.Modal(document.getElementById('modalComentarios')),
    alerta = document.querySelector('#alerta'),
    formulario = document.querySelector('#formulario'),
    infoTextAreaModal = document.querySelector('#infoTextArea'),
    chat = document.querySelector('#chat'),
    numComentario = document.querySelector('.chat__comentarios');



    const arrComentarios = [];
    

    iniciarModalCometario.addEventListener('click', function(e){
        e.preventDefault();
        modalComentarios.show();
    })

    formulario.addEventListener('submit', function(e){
        e.preventDefault();
        let infoTextArea = document.querySelector('#infoTextArea'),
        infoUser = document.querySelector('#user')
        if(infoTextArea.value.length == 0){
            alerta.style.color = 'red';
            alerta.style.display = 'block';
            alerta.innerHTML = '* Debe ingresar un comentario';
        }else{
            alerta.style.display = 'none';
            modalComentarios.hide();
            let dataComentario = infoTextArea.value;
            let dataUser = infoUser.value;
            let objUser = {
                usuario : dataUser,
                comentario : dataComentario
            }
            arrComentarios.push(objUser);
            this.reset();
            mostrarPrimerComentario(arrComentarios);
            mostrarOcultarButton();
            arrComentarios.length > 0 ? numComentario.innerHTML = `${arrComentarios.length} Comentarios` : numComentario.innerHTML = `0 Comentarios`;
        }
        console.log('Comentarios guardados en un array-->', arrComentarios )
    })


    infoTextAreaModal.addEventListener('input', function(e){
        e.preventDefault();
        if( e.target.value.length >= 1 ) {
            alerta.style.display = 'none';
        }
    })



    function mostrarPrimerComentario(arr){
        console.log('arr--->',arr)
        chat.innerHTML = ` <div class="chat__body-contenedorPadre">
    
        <!-- Inicio Avatar Padre -->
        <div class="chat__body-avatarPadre">
          <img src="https://randomuser.me/api/portraits/women/55.jpg" alt="Autor">
        </div>
        <!-- Cierre Avatar Padre -->
    
        <!-- Inicio cometario Padre -->
        <div class="chat__body-contentCometarioPadre">
          <p class="chat__body-contentCometarioPadre-text">
            <span class="chat__body-contentCometarioPadre-text-name">${arr[0].usuario}</span>
            ${arr[0].comentario}
            </p>
          <div class="chat__body-contentCometarioPadre-like">
            <small>
              <img src="./src/public/like.svg" alt="like"><span class="textNum">(10)</span>
            </small>
            <small>
              <img src="./src/public/no-like.svg" alt="not-like"><span class="textNum">(2)</span>
            </small>
            <small class="textTime">Hace 4 horas</small>
          </div>
        </div>
        <!-- Cierre cometario Padre -->
      </div>`
    }

    function mostrarOcultarButton(){
        if(arrComentarios.length > 1){

            let elemento = document.getElementById('showComment');

            if(elemento){
                elemento.remove();
            }else{
                console.log('El elemento no existe en el DOM')
            }


            let button = document.createElement('button');
            button.classList.add('buttonMostrarMas');
            button.setAttribute('id', 'showComment');
            button.innerHTML = 'Mostrar todos los comentarios';
            chat.after(button);

            button.addEventListener('click', function(e){
                e.preventDefault();
                let sinElPrimerComentario = arrComentarios.slice(1);
                sinElPrimerComentario.forEach(function(element){
                    const { usuario, comentario } = element
                    chat.innerHTML += ` <div class="chat__body-contenedorPadre">
    
        <!-- Inicio Avatar Padre -->
        <div class="chat__body-avatarPadre">
          <img src="https://randomuser.me/api/portraits/women/55.jpg" alt="Autor">
        </div>
        <!-- Cierre Avatar Padre -->
    
        <!-- Inicio cometario Padre -->
        <div class="chat__body-contentCometarioPadre">
          <p class="chat__body-contentCometarioPadre-text">
            <span class="chat__body-contentCometarioPadre-text-name">${usuario}</span>
            ${comentario}
            </p>
          <div class="chat__body-contentCometarioPadre-like">
            <small>
              <img src="./src/public/like.svg" alt="like"><span class="textNum">(10)</span>
            </small>
            <small>
              <img src="./src/public/no-like.svg" alt="not-like"><span class="textNum">(2)</span>
            </small>
            <small class="textTime">Hace 4 horas</small>
          </div>
        </div>
        <!-- Cierre cometario Padre -->
      </div>`

      button.remove();
                })
            })

        }
    }

   
})

