import gmail from "../img/gmail.png"
import whatsapp from "../img/whatsapp.png"
import styles from "./GeneralStyles.module.css"


function SeventhPage(){
    return (
        <div className={styles.seventhPage}>
            <div id={styles.contJa}>
                Contate <u>já!</u>
            </div>
            <div id={styles.whatsGmailIcons}>
                <a target="_blank" href="https://api.whatsapp.com/send?phone=5527997761863"><img src={whatsapp}/></a>
                <a href="mailto:samirlaguardiaii@gmail.com"><img src={gmail}/></a>
            </div>
        </div>
    )
}

export default SeventhPage




