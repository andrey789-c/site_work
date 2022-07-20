import {useDispatch, useSelector} from 'react-redux'

import styles from '../styles/Respond.module.css'

function Respond({setIsModal, setIsRespond}) {
    const user = useSelector(state => state.NameReducer)
    const dispatch = useDispatch()


    function respond() {
        setIsModal(false)
        setIsRespond(true)
        dispatch({type: 'ADD_RESPONSE', array: user})
    }

    return (
        <div className={styles.respond}>
            <div className={styles.window}>
                <div className={styles.header}>
                    <div className={styles.title}>Заявка</div>
                    <button onClick={e => setIsModal(false)} className={styles.close}>&#10008;</button>
                </div>
                <div className={styles.content}>
                    <div className={styles.name}>Имя: Василий</div>
                    <div className={styles.work}>Название работы: Починить кран</div>
                    <div className={styles.descript}>Описание: Aliquam erat volutpat. Nunc pulvinar lectus vitae magna elementum, sed eleifend erat aliquam. Integer est erat, sollicitudin at velit nec.</div>
                </div>
                <div className={styles.footer}>
                    <button onClick={e => setIsModal(false)} className={[styles.button, styles.red].join(' ')}>Закрыть</button>
                    <button onClick={respond} className={[styles.button, styles.success].join(' ')}>Откликнуться</button>
                </div>
            </div>
        </div>
    );
}

export default Respond