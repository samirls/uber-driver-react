import styles from "./GeneralStyles.module.css"
import italo from "../img/italo-transparente.png"
import {useRef, useEffect} from 'react';

function FirstPage(){

    // When the user scrolls down 20px from the top of the document, show the button
    const ref = useRef(null);
    useEffect(() => {
        //use document.getElementById()
        const backButton = document.getElementById('voltarTopo');

        window.onscroll = function() {scrollFunction()};
        function scrollFunction() {
          if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backButton.style.display = "block";
          } else {
            backButton.style.display = "none";
          }
        }

      }, []);




    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }



    return (
        <>
            <button onClick={topFunction} ref={ref} className={styles.voltarTopo} id='voltarTopo'>Topo</button>
            <div className={styles.firstPage}>
            <div className={styles.italo}>
            <img id={styles.italoPrimeiro} alt="italo" src={italo}/>
            </div>
            <div className={styles.italoApresentation}>
                <div className={styles.italoApresentation2}>
                    <h1>Ítalo Devend Asturias</h1>
                    <h2>Motorista Profissional</h2>
                </div>    
            </div>
            </div>
        </>
    )
}

export default FirstPage

