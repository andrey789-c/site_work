import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

function ContentSettings({properties}) {
    const security = useSelector(state => state.JsonReducer)
    const selectedProperties = properties ? security[properties] : null

    return (
        <div className="properties">
            {selectedProperties == null ? '' : Object.keys(selectedProperties).map((prop, i) => {
                const change = selectedProperties[prop]
                return (
                    <div key={i}>
                        <h3>{prop}</h3>
                        <div className="properties__selected">
                            {change.selected}
                        </div>
                    </div>

                )
            })}
        </div>
    );
}

export default ContentSettings