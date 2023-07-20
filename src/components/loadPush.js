import * as UI from './interfaz.js'

export const loadPush = ( domLoad ) => {
    if( typeof domLoad === 'object' ){ 
        setTimeout(() => {
            UI.contentPush.classList.add('slide-down');
        }, 1000 );
    }
}

export const unLoadPush = (e) => {
    e.preventDefault();
    UI.contentPush.classList.remove('slide-down');
}