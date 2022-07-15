import { useEffect, useState } from "react";
import styles from '../styles/Responce.module.css'

function Responce({coordinates, setIsModal}) {
    
    function modalOpen() {
        setIsModal(true)
    }

    const [x, setX] = useState(150)
    const [y, setY] = useState(200)

    useEffect(() => {
        const newX = Math.random() * (coordinates.width - coordinates.x) + coordinates.x;
        const newY = Math.random() * (coordinates.height - coordinates.y) + coordinates.y;
        setX(newX)
        setY(newY)
    }, [])

    return (
        <div style={{top: `${y}px`, left: `${x}px`}} className={styles.responce}>
            <div className={styles.work}>Починить кран</div>
            <div className={styles.name}>Иванов Василий</div>
            <button onClick={modalOpen} className={styles.button}>Подробнее</button>
        </div>
    );
}

export default Responce