// import Slider from "react-slick";
import BuyButton from "../components/buyButton/BuyButton";
import SectionProduits from "../components/sectionProduits/SectionProduits";
import Slider from "../components/slider/Slider";
import Apercu from "../components/thumbnail/Apercu";
import styles from "./Home.module.css";

const Home = () => {
    const images = [
        '/Slide1.png',
        '/Slide2.png',
        '/Slide3.png',
        '/Slide4.png',
        '/Slide5.png'
    ];
    return (
        <>
            <section className={styles.section}>
                <div className={styles.hero}>
                    <img className={styles.wembyHero} src="/wemby1.png"/>
                    <img className={styles.wembyHero} src="/wemby2.png"/>
                    <img className={styles.wembyHero} src="/wemby3.png"/>
                    <img className={styles.wembyHero} src="/wemby4.png"/>
                </div>
            </section>
            <section className={styles.sectionNikeXWemby}>
                <div className={styles.topNikeXWemby}>
                    <h1>Nike x Wemby</h1>
                    <p>Collectionnez les tous !</p>
                    <BuyButton path={'/produits'}/>
                </div>
                <div className={styles.sliderContainer}>
                    <Slider images={images}/>
                </div>
            </section>
            <section className={styles.sectionModele}>
                <h2>Nos modèles</h2>
                <div className={styles.container}>
                    <Apercu />
                    <Apercu />
                    <Apercu />
                </div>
            </section>
            <SectionProduits nom={'Wemby Homme'} path={'/homme.png'}/>
            <SectionProduits nom={'Wemby Femme'} path={'/femme.png'}/>
            <SectionProduits nom={'Wemby Enfant'} path={'/enfant.png'}/>
        </>
    )
}
export default Home