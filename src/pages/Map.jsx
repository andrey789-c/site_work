import {useEffect, useRef, useState } from 'react';
import Responce from '../components/Responce';
import Respond from '../components/Respond';
import style from '../styles/Map.module.css'

function Map() {
    const [isModal, setIsModal] = useState(false)
    const [isRespond, setIsRespond] = useState(false)
    const mapRef = useRef()

    const [elem, setElem] = useState({})

    useEffect(() => {
        setElem(mapRef.current.getBoundingClientRect())
    }, [])

    return (
        <div className={style.map}>
            {isModal ? <Respond setIsRespond={setIsRespond} setIsModal={setIsModal} /> : ''}
            <h1 className={style.h1}>Поиск клиента</h1>
            <div ref={mapRef} className={style.map__window}>
                <iframe className='map__load' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d169316.54632324056!2d134.97334400460932!3d48.46475950293641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5efae9c6b0368ac9%3A0xfa97bc0e5fba7f50!2z0KXQsNCx0LDRgNC-0LLRgdC6LCDQpdCw0LHQsNGA0L7QstGB0LrQuNC5INC60YDQsNC5!5e0!3m2!1sru!2sru!4v1657600905407!5m2!1sru!2sru" width="600" height="450" style={{border: 0}} loading="lazy"></iframe>
                {!isRespond ? <Responce isModal={isModal} setIsModal={setIsModal} coordinates={elem}/> : ''}
            </div>
            
        </div>
    );
}


export default Map