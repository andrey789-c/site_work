import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
import styles from '../styles/List.module.css'

function ListResponse() {
    const response = useSelector(state => state.responseReducer)
    console.log(response);
    return (
        <div className={styles.wrapper}>
            <div className="container">
                <h2 className={styles.h2}>Отклики</h2>
                {response.length == 0 ? <h3 className={styles.h3}>Откликов пока нет</h3> : (
                    <ul className={styles.list}>
                        {response.map((req, i) => {
                            console.log(req);
                            return (
                                <li key={i} className={styles.li}>
                                    <div className={styles.name}>Имя: <Link to={`/user/${i + 1}`}>{req.name}</Link></div>
                                    
                                </li>
                            )
                        })}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default ListResponse