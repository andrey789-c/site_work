import json from '../assets/json/user.json'
// import '../styles/Profile.css'

function MyProfile() {
    return (
        <div className="profile">
            <div className="container">
                <div className="profile__content">
                    <div className="profile__info">
                        <div className="profile__name">Имя: {json.name}</div>
                        <div className="profile__age">Возраст: {json.age} лет</div>
                        <div className="profile__category">Категория: {json.category}</div>
                        <div className="profile__experience">Опыт работы: {json.experience} года</div>
                    </div>
                </div>
                <div className="profile__descript">
                    <h3>О себе:</h3>
                    <div className="profile__text">{json.descript}</div>
                </div>
            </div>
        </div>
    );
}

export default MyProfile