import star from "../img/star_2b50.png";
import styles from "./GeneralStyles.module.css"


function ThirdPage3 (){
    return (
        <div className={styles.thirdPage3}>
            <div id={styles.stars}>
                <img id={styles.corollaFrenteTransparente} src={star}/>
                <img id={styles.corollaFrenteTransparente} src={star}/>
                <img id={styles.corollaFrenteTransparente} src={star}/>
                <img id={styles.corollaFrenteTransparente} src={star}/>
                <img id={styles.corollaFrenteTransparente} src={star}/>
            </div>
            <br></br><br></br>
            <div id={styles.thirdPageItens1}>Motorista 5 estrelas.</div><br></br> 
            <div id={styles.thirdPageItens2}>Carro confortável para proporcionar aquela viagem tranquila.</div><br></br> 
            <div id={styles.thirdPageItens3}>Disponível para corridas dentro da cidade e entre cidades também.</div><br></br><br></br><br></br>
        </div>
    )
}

export default ThirdPage3