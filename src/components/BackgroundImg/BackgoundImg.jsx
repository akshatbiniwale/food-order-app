import styles from './BackgroundImg.module.css'
import img from './bg-img.jpg'

const BackgroundImg = ()=> {
    return (
        <div className={styles.imgBox}>
            <img src={img} alt="bg-img" className={styles['bg-img']} />
        </div>
    );
}

export default BackgroundImg;