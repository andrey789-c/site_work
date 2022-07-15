import { useRef, useState } from 'react';
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames'

import styles from '../styles/Nav.module.css'
import Toombler from './Toombler';

function Nav() {
    const dispatch = useDispatch()

    const [isNav, setIsNav] = useState(false)
    const [role, setRole] = useState('Я исполнитель')

    const rootClasses = [styles.list]
    
    if(isNav) {
        rootClasses.push(styles.active)
    }
    
    function goOut() {
        dispatch({type: 'GO_OUT'})
    }

    return (
        <nav className={styles.nav}>
            <div className="container">
                <button className={styles.photo} onClick={e => setIsNav(!isNav)}></button>
                <ul className={rootClasses.join(' ')}>
                    {role == 'Я исполнитель' ? (
                        <div className={styles.content}>
                            <li className={styles.li}><Link onClick={e => setIsNav(false)} to='/request'>Заявки</Link></li>
                            <li className={styles.li}><Link onClick={e => setIsNav(false)} to='/profile'>Мой профиль</Link></li>
                            <li className={styles.li}><Link onClick={e => setIsNav(false)} to='/settings'>Настройки</Link></li>
                        </div>
                    ) : (
                        <div className={styles.content}>
                            <li className={styles.li}><Link onClick={e => setIsNav(false)} to='/request'>Мое местположение</Link></li>
                            <li className={styles.li}><Link onClick={e => setIsNav(false)} to='/profile'>Мой профиль</Link></li>
                            <li className={styles.li}><Link onClick={e => setIsNav(false)} to='/response'>Отклики</Link></li>
                        </div>
                    )}
                    <Toombler setIsNav={setIsNav} setRole={setRole} role={role} />
                    <button onClick={goOut} className={styles.exit}>Выйти</button>
                </ul>
            </div>

        </nav>
    );
}

export default Nav