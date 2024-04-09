import styles from './Header/Header.module.css'

type Props = {
    backgroundColor: string
}

const BackgroundComponent = ({ backgroundColor }: Props) => {
    return (
        <div
            className={styles.background} style={{ backgroundColor }}>
        </div>
    )
}

export default BackgroundComponent