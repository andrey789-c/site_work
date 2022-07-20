import styles from '../styles/Setting.module.css'
import { useState } from 'react';
import ContentSettings from '../components/ContentSettings';

function Settings() {

    const [properties, setProperties] = useState('')

    return (
        <div className="setting">
            <h1 className={styles.h1}>Настройки</h1>
            <div className={[styles.container, 'container'].join(' ')}>
                <ul className={styles.list}>
                    <li className={styles.li}><button onClick={e => setProperties(e.target.innerText)}>Конфиденциальность</button></li>
                    <li className={styles.li}><button onClick={e => setProperties(e.target.innerText)}>Черный список</button></li>
                    <li className={styles.li}><button onClick={e => setProperties(e.target.innerText)}>Уведомления</button></li>
                    <li className={styles.li}><button onClick={e => setProperties(e.target.innerText)}>Безопасность</button></li>
                    <li className={styles.li}><button onClick={e => setProperties(e.target.innerText)}>Аккаунт</button></li>
                </ul>
                <ContentSettings properties={properties}/>
            </div>
        </div>
    );
}

export default Settings