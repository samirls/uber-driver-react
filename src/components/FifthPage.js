import joiaEditado from "../img/joia-editado.png"
import limpoEditado from "../img/limpo-editado.png"
import sorrisoEditado from "../img/sorriso-editado.png"
import styles from "./GeneralStyles.module.css"


function FifthPage(){
    return (
        <div className={styles.fifthPage}>
            <figure>
                <img src={joiaEditado}/>
                <figcaption>Ótimo atendimento</figcaption>
            </figure>
            <figure>
                <img src={limpoEditado}/>
                <figcaption>Carro limpo e confortável</figcaption>
            </figure>
            <figure>
                <img src={sorrisoEditado}/>
                <figcaption>Muito simpático</figcaption>
            </figure>
        </div>
    )
}

export default FifthPage