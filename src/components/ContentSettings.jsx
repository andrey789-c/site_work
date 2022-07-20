import { useSelector } from "react-redux";

import styles from '../styles/Setting.module.css'

function ContentSettings({properties}) {
    const security = useSelector(state => state.JsonReducer)
    const selectedProperties = properties ? security[properties] : null

    return (
        <div className={styles.properties}>
            {selectedProperties == null ? '' : Object.keys(selectedProperties).map((prop, i) => {
                const change = selectedProperties[prop]
                return (
                    <div className={styles.wrapper} key={i}>
                        <div className={styles.title}>{prop}</div>
                        <div className={styles.selected}>
                            {change.selected}
                        </div>
                    </div>

                )
            })}
        </div>
    );
}

export default ContentSettings