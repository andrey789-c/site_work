import { useSelector } from "react-redux";

import styles from '../styles/Profile.module.css'

function Profile() {
    const user = useSelector(state => state.NameReducer)
    console.log(user);

    return (
        <div className={styles.profile}>
            <div className={styles.name}>{user.name}</div>
            <div className={styles.age}>{user.email}</div>
        </div>
    );
}

export default Profile