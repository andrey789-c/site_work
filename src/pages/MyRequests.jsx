import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import styles from '../styles/Requests.module.css'

function MyRequests() {
    const requests = useSelector(state => state.requestReducer)
    console.log(requests);
    return (
        <div className="container">
            {requests.length ? requests.map(req => (
                <div className={styles.wrapper}>
                    <div className={styles.name}>Название работы: {req.name}</div>
                    <div className={styles.work}>Описание работы: {req.work}</div>
                    <div className={styles.terms}>Сроки: {req.terms}</div>
                    <div className={styles.price}>Примерная цена {req.price} руб.</div>
                </div>
            )) : <div className={styles.empty}>Вы не оставили заявок, <Link to='/form'>можно тут оставить)</Link></div>}
        </div>
    )
}

export default MyRequests