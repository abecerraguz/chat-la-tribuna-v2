import './style.scss'
import javascriptLogo from './public/javascript.svg'
import viteLogo from './public/vite.svg'
import { setupCounter } from './components/counter.js'

document.querySelector('#app').innerHTML = `
<div class="chat">
<!-- Inicio chat__header -->
<div class="chat__header">
  <div class="chat__header-logo">
    <img src="http://placehold.jp/200x40.png" alt="logo" />
  </div>
  <div class="chat__header-button">
    <button class="chat__header-button-buttonOne">Inscribirme</button>
    <button class="chat__header-button-buttonTwo">Iniciar sesión</button>
  </div>
</div>
<!-- /fin chat__header -->

<!-- Inicio chat__body -->
<div class="chat__body">
  <div class="chat__body-contenedorPadre">

    <!-- Inicio Avatar Padre -->
    <div class="chat__body-avatarPadre">
      <img src="https://randomuser.me/api/portraits/women/55.jpg" alt="Autor">
    </div>
    <!-- Cierre Avatar Padre -->

    <!-- Inicio cometario Padre -->
    <div class="chat__body-contentCometarioPadre">
      <p class="chat__body-contentCometarioPadre-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem,
        corporis fugit? Reiciendis, esse est perferendis, blanditiis alias iusto numquam nulla molestiae omnis
        error, possimus fugit assumenda animi aliquam sed optio!. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem,
        corporis fugit? Reiciendis, esse est perferendis, blanditiis alias iusto numquam nulla molestiae omnis
        error, possimus fugit assumenda animi aliquam sed optio!</p>
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
  </div>
</div>
<!-- /Cierre chat__body -->

</div>
`

setupCounter(document.querySelector('#counter'))
