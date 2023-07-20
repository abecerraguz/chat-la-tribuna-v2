import './style.scss';
import { loadPush, unLoadPush } from './components/loadPush.js';
import * as UI from './components/interfaz.js'

const windowObject = window.document;


if( typeof window === 'object' ){

    window.addEventListener('DOMContentLoaded', function(){
        loadPush(windowObject);
        UI.buttonSiPorNotificaciones.addEventListener('click', unLoadPush );
        UI.buttonNoNotificaciones.addEventListener('click', unLoadPush )
    })

}