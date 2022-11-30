import styles from "./GeneralStyles.module.css"
import chevronDown from "../img/chevron-down.png";
import closeCircle from "../img/close-circle-outline.png";
import whatsappLogo from "../img/whatsapp.png";
import gmailLogo from "../img/gmail.png";
import {useState} from 'react';

function PreSecondPage() {

    //Open and close modal1
    const [isShown, setIsShown] = useState(false);

    const openAndCloseModal = event => {
      setIsShown(current => !current);
    };

    //Open and close modal2
    const [isShown2, setIsShown2] = useState(false)
    const openAndCloseModal2 = event => {
      setIsShown2(current => !current);
    };

    // When the user clicks on the button, scroll to the bottom of page
    function scrollToBottom(){
    document.body.scrollTop = 5000;
    document.documentElement.scrollTop = 5000;
    }
  

  return (
    <>
      <div className={styles.preSecondPage}>
        <div>
          <button id={styles.buttonContato} onClick={openAndCloseModal}>Contato</button>
        </div>
        <div>
          <button id={styles.buttonFormasDePagamento} onClick={openAndCloseModal2}>
            Formas de Pagamento
          </button>
        </div>
        <div>
          <button id={styles.buttonImagens} onClick={scrollToBottom}>
            Imagens
          </button>
        </div>
      </div>
      <div className={styles.prePreSecondPage}>
        <img alt="chevronDown" src={chevronDown} />
      </div>

      <div className={styles.fullscreen_container} style={{display: isShown ? 'flex' : 'none'}} >
        <div id={styles.modal}>
            <div id={styles.close_page} ><img src={closeCircle} onClick={openAndCloseModal}/></div>
            <div id={styles.modalName}>Ítalo Devend Asturias</div>
            <div id={styles.modalPhone1}>Celular / Whatsapp</div>
            <div id={styles.modalPhone2}>(27)99776-1863</div>
            <div id={styles.modalPhone3}><a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=5527997761863"><img src={whatsappLogo} /></a></div>
            <div id={styles.modalEmail1}>E-mail</div>
            <div id={styles.modalEmail2}>samirlaguardiaii@gmail.com</div>
            <div id={styles.modalEmail3}><a href="mailto:samirlaguardiaii@gmail.com"><img src={gmailLogo}/></a></div>
        </div>
    </div>
    <div className={styles.fullscreen_container2} style={{display: isShown2 ? 'flex' : 'none'}}>
        <div id={styles.modal2}>
            <div id={styles.close_page2} ><img src={closeCircle} onClick={openAndCloseModal2}/></div>
            <div id={styles.modal2Title}><u>Aceito dinheiro, PIX, PicPay e cartão de débito/crédito.</u></div>
            <div id={styles.chavePix1}>Chave PIX por E-mail: <mark>fulanofulano@ficticio.com</mark></div>
            <div id={styles.chavePix2}>Chave PIX por telefone: <mark>(27)12345-7891</mark></div>
            <div id={styles.chavePicPay}>PicPay: <mark>@fulanoFicticio</mark></div>
        </div>
    </div>
    </>
  );
}

export default PreSecondPage;
