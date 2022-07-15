// import '../styles/Settings.css'
import { useState } from 'react';
import ContentSettings from '../components/ContentSettings';

function Settings() {

    const [properties, setProperties] = useState('')

    return (
        <div className="setting">
            <h1>Настройки</h1>
            <div className="setting__container container">
                <ul className="setting__list">
                    <li className="setting__li"><button onClick={e => setProperties(e.target.innerText)}>Конфиденциальность</button></li>
                    <li className="setting__li"><button onClick={e => setProperties(e.target.innerText)}>Черный список</button></li>
                    <li className="setting__li"><button onClick={e => setProperties(e.target.innerText)}>Уведомления</button></li>
                    <li className="setting__li"><button onClick={e => setProperties(e.target.innerText)}>Безопасность</button></li>
                    <li className="setting__li"><button onClick={e => setProperties(e.target.innerText)}>Аккаунт</button></li>
                </ul>
                <ContentSettings properties={properties}/>
            </div>
        </div>
    );
}

export default Settings