import { Link } from 'react-router-dom';
import json from '../assets/json/user.json'
import styles from '../styles/Profile.module.css'

function MyProfile() {
    return (
        <div className={styles.profile}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.info}>
                        <div className={styles.name}>Имя: {json.name}</div>
                        <div className={styles.age}>Возраст: {json.age} лет</div>
                        <div className={styles.category}>Категория: {json.category}</div>
                        <div className={styles.experience}>Опыт работы: {json.experience} года</div>
                    </div>
                </div>
                <div className={styles.descript}>
                    <h3 className={styles.h3}>О себе:</h3>
                    <div className={styles.text}>{json.descript}</div>
                    <Link className={styles.button} to='/edit'>Изменить</Link>
                </div>
            </div>
        </div>
    );
}

export default MyProfile