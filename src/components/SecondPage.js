import styles from "./GeneralStyles.module.css"

function SecondPage(){
    return (
        <>
            <div className={styles.secondPage}>
                <div id={styles.viajeComItens}>
                    <div><button>+ Segurança;</button></div>
                    <div><button>+ Qualidade;</button></div>
                    <div><button>+ Comodidade.</button></div>
                </div>
            </div>
        </>
    )
}

export default SecondPage