import styles from "./GeneralStyles.module.css"
import corollaFrente from "../img/corolla-frente.jpg"
import corollaFrente2 from "../img/corolla-frente2.jpg"
import corollaInteriorFrente from "../img/corolla-interior-frente.jpg"
import corollaInteriorTras from "../img/corolla-interior-tras.jpg"
import corollaTras from "../img/corolla-tras.jpg"
import italo from "../img/italo.jpg"
import passenger from "../img/passenger.jpg"
import passenger2 from "../img/passenger2.jpg"
import passenger3 from "../img/passenger3.jpg"
import pauseCarousel from "../img/pause-circle-outline.png"
import playCarousel from "../img/play-circle-outline.png"
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import Carousel from 'nuka-carousel';

function EightPage(){


    return (
        <div id={styles.carouselNew}>
            <Carousel wrapAround={true} slidesToShow={1}>
                <img src={corollaFrente} />
                <img src={corollaFrente2} />
                <img src={corollaInteriorFrente} />
                <img src={corollaInteriorTras}/>
                <img src={corollaTras}/>
                <img src={italo}/>
                <img src={passenger}/>
                <img src={passenger2}/>
                <img src={passenger3}/>
            </Carousel>
        </div>
    )
}

export default EightPage