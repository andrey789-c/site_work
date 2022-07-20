import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import {Link} from 'react-router-dom' 
import styles from '../styles/Customer.module.css'

function MapCustomer() {
    const mapRef = useRef()

    const [dot, setDot] = useState('')
    const requests = useSelector(state => state.requestReducer)

    useEffect(() => {
        const coordinates = mapRef.current.getBoundingClientRect()
        console.log(requests);
        setDot({
            x: coordinates.width / 2,
            y: coordinates.height / 2
        })
    }, [])

    return (
        <div className={styles.map}>
            <div className={[styles.container, 'container'].join(' ')}>
                <div className={styles.window} ref={mapRef}>
                    <h3 className={styles.h1}>Заказчик</h3>
                    <iframe className={styles.load} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d169316.54632324056!2d134.97334400460932!3d48.46475950293641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5efae9c6b0368ac9%3A0xfa97bc0e5fba7f50!2z0KXQsNCx0LDRgNC-0LLRgdC6LCDQpdCw0LHQsNGA0L7QstGB0LrQuNC5INC60YDQsNC5!5e0!3m2!1sru!2sru!4v1657600905407!5m2!1sru!2sru" width="600" height="450" style={{border: 0}} loading="lazy"></iframe>
                    <div className={styles.dot} style={{top: `${dot.y}px`, left: `${dot.x}px`}}></div>
                    <Link to='/requests' className={styles.my__req}>Мои заявки</Link>

                </div>
                <div className={styles.form}><Link to='/form'>Оставить заявку</Link></div>
            </div>
        </div>
    );
}


MapCustomer.propTypes = {

}
export default MapCustomer