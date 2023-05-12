import { crearCartaHTML, pedirCarta,valorCarta } from "./";
/**
 * Turno de la computadora
 * @param {number} puntosMinimos puntos minimos que la computadora necesita para ganar
 * @param {Array<String>} deck
 * @param {HTMLElement} puntosHTML elemento html para mostrar los puntos 
 */

export const turnoComputadora = ( puntosMinimos,puntosHTML,divCartasComputadora,deck =[] ) => {

    if(!puntosMinimos) throw new Error('Puntos minimos son necesarios');
    if(!puntosHTML) throw new Error('Argumento puntosHTMl  son necesarios');

    let puntosComputadora=0;

    do {
        const carta = pedirCarta( deck );

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">
        const imgCarta = crearCartaHTML(carta);
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}