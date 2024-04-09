import styles from './Header.module.css'
import logo from '../../assets/logo.svg'
import arrowDown from '../../assets/icon-arrow-down.svg'
import arrowUp from '../../assets/icon-arrow-up.svg'
import openMenu from '../../assets/icon-menu.svg'
import closeMenu from '../../assets/icon-close-menu.svg'
import todoList from '../../assets/icon-todo.svg'
import calendar from '../../assets/icon-calendar.svg'
import reminders from '../../assets/icon-reminders.svg'
import planning from '../../assets/icon-planning.svg'
import { useState } from 'react';

type Props = {
    onToggleMenu: (isOpen: boolean) => void;
}

const Header = ({ onToggleMenu }: Props) => {
    const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
    const [isFeaturesOpen, setIsFeaturesOpen] = useState<boolean>(false);
    const [isCompanyOpen, setIsCompanyOpen] = useState<boolean>(false);

    const handleToggleMenu = () => {
        const isOpen = !isMenuOpened;
        setIsMenuOpened(isOpen);
        onToggleMenu(isOpen);
    };

    const handleToggleFeatures = () => {
        setIsFeaturesOpen(prevState => !prevState);
    }

    const handleToggleCompany = () => {
        setIsCompanyOpen(prevState => !prevState);
    }

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <img src={logo} alt="Snap Logo" />
                <nav className={`${styles.navBar} ${isMenuOpened ? styles.showMenu : styles.hideMenu}`}>
                    <div className={styles.menuContainer}>
                        <div className={styles.menu}>
                            <section style={{position: 'relative'}}>
                                <button
                                    onClick={handleToggleFeatures}
                                    className={`${styles.featureBtn} ${styles.hover}`}>Features
                                    <img src={isFeaturesOpen ? arrowUp : arrowDown} alt="Dropdown" />
                                </button>
                                {isFeaturesOpen && (
                                    <div className={styles.ulFeaturesWrapper}>
                                        <ul className={styles.ulFeatures}>
                                            <li>
                                                <a href="#"
                                                    className={styles.aFeatures}>
                                                    <img src={todoList} alt="Todo list icon" />Todo List
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                    className={styles.aFeatures}>
                                                    <img src={calendar} alt="Calendar icon" />Calendar
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                    className={styles.aFeatures}>
                                                    <img src={reminders} alt="Reminders icon" />Reminders
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                    className={styles.aFeatures}>
                                                    <img src={planning} alt="Planning icon" />Planning
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </section>
                            <section style={{position: 'relative'}}>
                                <button
                                    className={`${styles.featureBtn} ${styles.hover}`}
                                    onClick={handleToggleCompany}>Company
                                    <img src={isCompanyOpen ? arrowUp : arrowDown} alt="Dropdown" />
                                </button>
                                {isCompanyOpen && (
                                    <div className={styles.ulCompanyWrapper}>
                                        <ul className={styles.ulCompany}>
                                            <li><a
                                                className={`${styles.aCompany} ${styles.hover}`} href="#">History</a></li>
                                            <li><a className={styles.hover} href="#">Our Team</a></li>
                                            <li><a className={styles.hover} href="#">Blog</a></li>
                                        </ul>
                                    </div>
                                )}
                            </section>
                            <ul className={styles.careersAbout}>
                                <li className={styles.careers}>
                                    <a className={styles.hover} href="#">Careers</a></li>
                                <li className={styles.about}>
                                    <a className={styles.hover} href="#">About</a></li>
                            </ul>
                        </div>

                        <ul className={styles.lastUl}>
                            <li><a className={styles.hover} href="#">Login</a></li>
                            <li className={styles.register}>
                                <a className={styles.hover} href="#">Register</a></li>
                        </ul>
                    </div>
                </nav>
            </div >

            <button className={styles.menuButtons}>
                <img
                    src={isMenuOpened ? closeMenu : openMenu}
                    alt="Menu icon"
                    className={isMenuOpened ? styles.closeMenu : styles.openMenu}
                    onClick={handleToggleMenu} />
            </button>
        </header >
    )
}

export default Header