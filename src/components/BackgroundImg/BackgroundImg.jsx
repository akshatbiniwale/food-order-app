import styles from './BackgroundImg.module.css'
import img from './bg-img.jpg'

const BackgroundImg = ()=> {
    return (
        <header className={styles.imgBox}>
            <img src={img} alt="bg-img" className={styles['bg-img']} />
        </header>
    );
}

export default BackgroundImg;