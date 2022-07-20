import { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import styles from '../styles/Form.module.css'

import {Link} from 'react-router-dom'
import { AUTH } from '../utils/constants';

function Auth() {
    const person = useSelector(state => state.NameReducer)

    const dispatch = useDispatch()
    const [error, setError] = useState('')
    const [form, setForm] = useState({
        name: '',
        password: ''
    })

    function auth(e) {
        e.preventDefault()
        if(form.name !== person.name) {
            setError('Такого имени не существует');
            return null
        } else if(form.password !== person.password) {
            setError('Неверный пароль или имя')
            return null
        }

        setError('')
        dispatch({type: AUTH})
    }
    return (
        <div className={styles.auth}>
            <div className="container">
                <h1 className={styles.h1}>Вход</h1>
                <form onSubmit={auth} className={styles.auth__form}>
                    <input className={styles.input} onChange={e => setForm({...form, name: e.target.value})} type="text" placeholder="Введите имя" />
                    <input className={styles.input} onChange={e => setForm({...form, password: e.target.value})} type='password' placeholder='Введите пароль'/>
                    <div className={styles.error}>{error}</div>
                    <button className={styles.button}>Войти</button>
                    <div className={styles.quest}>Нет аккаунта? <Link className={styles.link} to='/reg'>Зарегистрироваться</Link></div>
                </form>
            </div>
            
        </div>
    );
}

export default Auth