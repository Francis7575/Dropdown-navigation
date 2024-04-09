import imageHeroMobile from '../../assets/image-hero-mobile.png'
import imageHeroDesktop from '../../assets/image-hero-desktop.png'
import databiz from '../../assets/client-databiz.svg'
import audiophile from '../../assets/client-audiophile.svg'
import meet from '../../assets/client-meet.svg'
import maker from '../../assets/client-maker.svg'
import styles from './MainContent.module.css'

const MainContent = () => {
    return (
        <main>
            <div className={styles.container}>
                <picture className={styles.pictureContainer}>
                    <img className={styles.imageHeroMobile} src={imageHeroMobile} alt="Hero image" />
                    <img className={styles.imageHeroDesktop} src={imageHeroDesktop} alt="Hero image" />
                </picture>
                <div className={styles.textContainer}>
                    <article className={styles.article}>
                        <h1 className={styles.h1}>Make remote work</h1>
                        <p className={styles.paragraph}>
                            Get your team in sync, no matter your location.
                            Streamline processes, create team rituals, and
                            watch productivity soar.
                        </p>
                        <button className={styles.button}>Learn More</button>
                    </article>
                    <section className={styles.imageSection}>
                        <img className={styles.databiz} src={databiz} alt="databiz" />
                        <img className={styles.audiophile} src={audiophile} alt="audiophile" />
                        <img className={styles.meet} src={meet} alt="meet" />
                        <img className={styles.maker} src={maker} alt="maker" />
                    </section>
                </div>
            </div>
        </main>
    )
}

export default MainContent