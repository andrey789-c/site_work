import { Link } from 'react-router-dom'
import user from '../assets/json/user.json'
import styles from '../styles/Form.module.css'

function Edit() {
    return (
        <div className="edit">
            <div className="container">
                <h1 className={styles.h1}>Изменить данные</h1>
                <form className={styles.form} onClick={e => e.preventDefault()}>
                    <input className={styles.input} value={user.name} type="text" placeholder="Имя"/>
                    <input className={styles.input} value={user.age} type="text" placeholder='Email'/>
                    <input className={styles.input} value={user.category} type="text" placeholder='Категория'/>
                    <Link to='/request'><button className={styles.button}>Изменить</button></Link>
                </form>
            </div>
            
        </div>
    )
}

export default Edit