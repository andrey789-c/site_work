import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {ROLE_REVERSAL} from '../utils/constants'

import styles from '../styles/Toombler.module.css';
function Toombler({role, setRole, setIsNav}) {
    const dispatch = useDispatch()
    const exec = useSelector(state => state.executorReducer)
    const [toombler, setToombler] = useState(false)
    const rootClasses = [styles.toombler]
    if(toombler) {
        rootClasses.push(styles.active)
    }

    useEffect(() => {
        dispatch({type: ROLE_REVERSAL, action: role})
    }, [role])

    function changeRole(e) {
        setRole(e.target.innerText)
        setToombler(false)
        setIsNav(false)
    }
    
    return (
        <div className={styles.change}>
            <div className={styles.wrapper}>
                <button onClick={e => setToombler(!toombler)} className={styles.role}>{role}</button>
                <div className={rootClasses.join(' ')}>
                    <button onClick={changeRole} className={styles.button}>Я исполнитель</button>
                    <button onClick={changeRole} className={styles.button}>Я заказчик</button>
                </div>
            </div>
        </div>
    );
}

export default Toombler