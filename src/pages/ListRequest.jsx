import {useSelector} from 'react-redux'
function ListResponse() {
    const requests = useSelector(state => state.requestReducer)
    return (
        <div className="list">
            <div className="container">
                {requests.length == 0 ? '<h2>Откликов пока нет</h2>' : (
                    <ul className="req__list">
                        {requests.map((req, i) => {
                            return (
                                <li key={i} className="req__li">
                                    <div className="req__name">Имя: {req.name}</div>
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