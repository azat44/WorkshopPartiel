import Color from '../components/color/Color';
import Pointure from '../components/pointure/Pointure';
import styles from './Produit.module.css';

const Produit = () => {
    return (
        <section className={styles.section}>
            <div className={styles.gallery}>
                <a className={styles.galleryItem}>
                    <img className={styles.galleryImage} src='/gallery1.png' />
                </a>
                <a className={styles.galleryItem}>
                    <img className={styles.galleryImage} src='/gallery1.png' />
                </a>
                <a className={styles.galleryItem}>
                    <img className={styles.galleryImage} src='/gallery1.png' />
                </a>
                <a className={styles.galleryItem}>
                    <img className={styles.galleryImage} src='/gallery1.png' />
                </a>
            </div>
            <div className={styles.main}>
                <div className={styles.topMain}>
                    <img className={styles.mainImage} src='/gallery1.png'/>
                </div>
                <div className={styles.botMain}>
                    <p className={styles.story}>
                        Inspirée du modèle de la Jordan, la Wemby One affiche un look classique et épuré, à la fois familier et très actuel. Avec son design emblématique qui s'associe à toutes vos tenues, cette sneaker vous permet de rester au top en toutes circonstances.
                    </p>
                </div>
            </div >
            <div className={styles.info}>
                <div className={styles.infoTxt}>
                    <h1 className={styles.titre}>Wemby One</h1>
                    <h2 className={styles.category}>Chaussure pour homme</h2>
                    <p className={styles.couleurs}>3 couleurs</p>
                    <p className={styles.prix}>99,99€</p>
                </div>
                <div className={styles.couleursSelect}>
                    <Color colorName='a' groupName='colors'/>
                    <Color colorName='b' groupName='colors'/>
                    <Color colorName='c' groupName='colors'/>
                </div>
                <div className={styles.pointureSelect}>
                    <Pointure groupPointure='pointure' Pointure='EU 42'/>
                    <Pointure groupPointure='pointure' Pointure='EU 43'/>
                    <Pointure groupPointure='pointure' Pointure='EU 44'/>
                    <Pointure groupPointure='pointure' Pointure='EU 45'/>
                    <Pointure groupPointure='pointure' Pointure='EU 46'/>
                </div>
                <button className={styles.addCart}>Ajouter au panier</button>
                <button className={styles.addFav}>
                    Ajouter au favoris <svg className={styles.coeur} width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M22 8.86222C22 10.4087 21.4062 11.8941 20.3458 12.9929C17.9049 15.523 15.5374 18.1613 13.0053 20.5997C12.4249 21.1505 11.5042 21.1304 10.9488 20.5547L3.65376 12.9929C1.44875 10.7072 1.44875 7.01723 3.65376 4.73157C5.88044 2.42345 9.50794 2.42345 11.7346 4.73157L11.9998 5.00642L12.2648 4.73173C13.3324 3.6245 14.7864 3 16.3053 3C17.8242 3 19.2781 3.62444 20.3458 4.73157C21.4063 5.83045 22 7.31577 22 8.86222Z" stroke="#000000" strokeWidth="1.5" strokeLinejoin="round"></path></svg>
                </button>
                <div className={styles.avis}>
                    <div className={styles.avisText}>
                        <p>Avis</p>
                    </div>
                    <div className={styles.avisStar}>
                        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000" strokeWidth="1.5"><path d="M8.58737 8.23597L11.1849 3.00376C11.5183 2.33208 12.4817 2.33208 12.8151 3.00376L15.4126 8.23597L21.2215 9.08017C21.9668 9.18848 22.2638 10.0994 21.7243 10.6219L17.5217 14.6918L18.5135 20.4414C18.6409 21.1798 17.8614 21.7428 17.1945 21.3941L12 18.678L6.80547 21.3941C6.1386 21.7428 5.35909 21.1798 5.48645 20.4414L6.47825 14.6918L2.27575 10.6219C1.73617 10.0994 2.03322 9.18848 2.77852 9.08017L8.58737 8.23597Z" fill="#000000" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000" strokeWidth="1.5"><path d="M8.58737 8.23597L11.1849 3.00376C11.5183 2.33208 12.4817 2.33208 12.8151 3.00376L15.4126 8.23597L21.2215 9.08017C21.9668 9.18848 22.2638 10.0994 21.7243 10.6219L17.5217 14.6918L18.5135 20.4414C18.6409 21.1798 17.8614 21.7428 17.1945 21.3941L12 18.678L6.80547 21.3941C6.1386 21.7428 5.35909 21.1798 5.48645 20.4414L6.47825 14.6918L2.27575 10.6219C1.73617 10.0994 2.03322 9.18848 2.77852 9.08017L8.58737 8.23597Z" fill="#000000" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000" strokeWidth="1.5"><path d="M8.58737 8.23597L11.1849 3.00376C11.5183 2.33208 12.4817 2.33208 12.8151 3.00376L15.4126 8.23597L21.2215 9.08017C21.9668 9.18848 22.2638 10.0994 21.7243 10.6219L17.5217 14.6918L18.5135 20.4414C18.6409 21.1798 17.8614 21.7428 17.1945 21.3941L12 18.678L6.80547 21.3941C6.1386 21.7428 5.35909 21.1798 5.48645 20.4414L6.47825 14.6918L2.27575 10.6219C1.73617 10.0994 2.03322 9.18848 2.77852 9.08017L8.58737 8.23597Z" fill="#000000" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000" strokeWidth="1.5"><path d="M8.58737 8.23597L11.1849 3.00376C11.5183 2.33208 12.4817 2.33208 12.8151 3.00376L15.4126 8.23597L21.2215 9.08017C21.9668 9.18848 22.2638 10.0994 21.7243 10.6219L17.5217 14.6918L18.5135 20.4414C18.6409 21.1798 17.8614 21.7428 17.1945 21.3941L12 18.678L6.80547 21.3941C6.1386 21.7428 5.35909 21.1798 5.48645 20.4414L6.47825 14.6918L2.27575 10.6219C1.73617 10.0994 2.03322 9.18848 2.77852 9.08017L8.58737 8.23597Z" fill="#000000" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000" strokeWidth="1.5"><path d="M8.58737 8.23597L11.1849 3.00376C11.5183 2.33208 12.4817 2.33208 12.8151 3.00376L15.4126 8.23597L21.2215 9.08017C21.9668 9.18848 22.2638 10.0994 21.7243 10.6219L17.5217 14.6918L18.5135 20.4414C18.6409 21.1798 17.8614 21.7428 17.1945 21.3941L12 18.678L6.80547 21.3941C6.1386 21.7428 5.35909 21.1798 5.48645 20.4414L6.47825 14.6918L2.27575 10.6219C1.73617 10.0994 2.03322 9.18848 2.77852 9.08017L8.58737 8.23597Z" fill="#000000" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    </div>
                </div>
            </div >
        </section>
    )
}
export default Produit