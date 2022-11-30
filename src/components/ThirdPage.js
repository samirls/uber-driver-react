import styles from "./GeneralStyles.module.css"
import corollaTransparente from "../img/corolla-frente-transparente.png";

function ThirdPage() {
    return (
        <>
            <div className={styles.thirdPage}>
            <br></br><br></br>
                <div><img id={styles.corollaFrenteTransparente} src={corollaTransparente} alt=""/></div><br></br>
                <div id={styles.thirdPageItens1}>Conte com um profissional com mais de 12.000 corridas.</div><br></br>
                <div id={styles.thirdPageItens2}>Com mais de 4 anos de experiência com aplicativos de mobilidade urbana.</div> <br></br>
                <div id={styles.thirdPageItens3}>Que consegue atender a sua demanda com agilidade.</div>
            </div>
            <br></br><br></br>
        </>
    )
}

export default ThirdPage