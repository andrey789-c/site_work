import {Link} from 'react-router-dom'
import {useState} from 'react'

import burger from '../assets/img/multipleline_114207.svg'
import '../styles/Main.css'

function Main() {
    const [isActive, setIsActive] = useState(false)
    function openBurger() {
        setIsActive(!isActive)
    }

    return (
        <div className="main">
            <div onClick={e => setIsActive(false)} className={`overlay ${isActive ? 'active' : ''}`}></div>
            <header className="header">
                <div className="container header__container">
                    <button className={`header__burger ${isActive ? 'active' : ''}`} onClick={openBurger}><img src={burger} alt="" /></button>

                    <div className="header__logo"></div>

                    <ul className={`header__list ${isActive ? 'active' : ''}`}>
                        <li className="header__li">
                            <Link to='/auth' className="header__btn">Войти</Link>
                        </li>
                        <li className="header__li">
                            <Link to='/reg' className="header__btn">Зарегистрироваться</Link>
                        </li>
                        <button className="header__link">Скачать в Play Market</button>
                        <button className="header__link">Скачать в App Store</button>
                    </ul>
                </div>
            </header>
            <div className="intro">
                <div className="intro__container container">
                    <h1 className="intro__title">Lorem ipsum dolor sit amet consectetur.</h1>
                    <div className="intro__content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, voluptatibus. Molestiae quasi ipsam molestias, commodi explicabo nobis corporis veniam nam accusantium enim suscipit! Blanditiis, voluptatibus!
                    </div>
                </div>
            </div>
            <div className="about" data-find="about">
                <div className="about__container container">
                    <div className="about__title">О нашем продукте</div>
                    <div className="about__items">
                        <div className="about__item">
                            <div className="about__img"></div>
                            <div className="about__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, aperiam?</div>
                        </div>
                        <div className="about__item">
                            <div className="about__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, aperiam?</div>
                            <div className="about__img"></div>
                        </div>
                        <div className="about__item">
                            <div className="about__img"></div>
                            <div className="about__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, aperiam?</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="stat" data-find="stat">
                <div className="stat__container container">
                    <div className="stat__title">Статистика приложения</div>
                    <div className="stat__items">
                        <div className="stat__item">
                            <div className="item__num">80%</div>
                            <div className="item__text">Пользователей</div>
                        </div>  
                        <div className="stat__item">
                            <div className="item__num">60000</div>
                            <div className="item__text">Зарегистрировались</div>
                        </div>
                        <div className="stat__item">
                            <div className="item__num">1800000</div>
                            <div className="item__text">Всего заявок</div>
            
                        </div>
                    </div>
                </div>
            </div>
            
            
            <div className="change">
                <div className="change__container container">
                    <div className="change__title">Выбрав нас вы сможете:</div>
                    <ol className="change__list">
                        <li>1. Много заработать</li>
                        <li>2. Найти хорошего исполнителя</li>
                        <li>3. Раскрутиться как предприниматель</li>
                    </ol>
                </div>
            </div>
            
            <footer className="footer">
                <div className="footer__container container">
                    <div className="footer__logo"></div>
                    <div className="footer__list">
                        <li className="footer__li">
                            <button className="footer__btn">О нас</button>
                        </li>
                        <li className="footer__li">
                            <button className="footer__btn">Контакты</button>
                        </li>
                        <li className="footer__li">
                            <button className="footer__btn">FAQ</button>
                        </li>
                        <div className="footer__links">
                            <div className="footer__link">Скачать в Play Market</div>
                            <div className="footer__link">Скачать в App Store</div>
                        </div>
                        
                    </div>
                </div>
            </footer>
        </div>
    );
}


Main.propTypes = {

}
export default Main