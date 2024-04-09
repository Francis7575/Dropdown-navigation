import Header from '../components/Header/Header'
import MainContent from '../components/Main/MainContent'
import BackgroundComponent from '../components/BackgroundComponent'
import { useState } from 'react'

const Homepage = () => {
    const [backgroundColor, setBackgroundColor] = useState<string>("");

    const handleToggleMenu = (isOpen: boolean) => {
        if (isOpen) {
            setBackgroundColor('rgba(21, 21, 21, 0.75)');
        } else {
            setBackgroundColor("");
        }
    }

    return (
        <>
            <BackgroundComponent backgroundColor={backgroundColor} />
            <Header onToggleMenu={handleToggleMenu} />
            <MainContent />
        </>
    )
}

export default Homepage