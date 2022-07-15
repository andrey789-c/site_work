import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'

function Form() {
    const dispatch = useDispatch()
    const request = useSelector(state => state.requestReducer)

    const navigate = useNavigate()
    const [form, setForm] = useState({
        name: '',
        work: '',
        terms: '',
        price: ''
    })

    function auth(e) {
        e.preventDefault()
        // dispatch({type: 'ADD_REQUESTS', array: form})
        setForm({})
        // console.log(request)
        navigate('/request')
    }

    return (
        <div className="container">
                <form onSubmit={auth} className="auth__form">
                    <input onChange={e => setForm({...form, name: e.target.value})} placeholder="Введите имя" />
                    <input onChange={e => setForm({...form, work: e.target.value})} placeholder="Работа" />
                    <input onChange={e => setForm({...form, terms: e.target.value})} placeholder="Сроки" />
                    <input onChange={e => setForm({...form, price: e.target.value})} placeholder="Цена" />
                    <div className="error"></div>
                    <button className='form__btn'>Оставить заявку</button>
            </form>
        </div>
    );
}


export default Form