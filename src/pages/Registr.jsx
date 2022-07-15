import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'

import styles from '../styles/Form.module.css'

function Registr() {
    const dispatch = useDispatch()

    const [error, setError] = useState('')
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        repeatPassword: ''
    })
    const navigate = useNavigate()
    const registration = e => {
        e.preventDefault()
        if(form.password !== form.repeatPassword) {
            setError('Пароли не совпадают')
            return null
        } else if(form.name === '' || form.email === '' || form.password === '') {
            setError('Заполните все поля')
            return null
        }
        dispatch({type: 'ADD_INFO', action: {
            name: form.name,
            email: form.email,
            password: form.password
        }})
        setError('')
        navigate('/auth')
    }
    return (
        <div>
            <div className="container">
                <h1 className={styles.h1}>Регистрация</h1>
                <form onSubmit={registration}>
                    <input className={styles.input} onChange={e => setForm({...form, name: e.target.value})} type="text" placeholder="Введите свое имя" />
                    <input className={styles.input} onChange={e => setForm({...form, email: e.target.value})} type='text' placeholder="Введите свой email"/>
                    <input className={styles.input} onChange={e => setForm({...form, password: e.target.value})} type="password" placeholder="Введите пароль"/>
                    <input className={styles.input} onChange={e => setForm({...form, repeatPassword: e.target.value})} type="password" placeholder="Повторите пароль"/>
                    <button className={styles.button}>Зарегистрироваться</button>
                    <div className={styles.error}>{error}</div>
                </form>
                <div className={styles.quest}>Есть аккаунт? <Link className={styles.link} to='/auth'>Войти</Link></div>
            </div>
        </div>
    );
}

export default Registr