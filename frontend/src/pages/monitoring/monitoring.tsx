import React from "react";
import {useParams} from "react-router-dom";

const Monitoring: React.FC = () => {
    const {domain} = useParams()
    return (
        <div>
            <h1>{domain}</h1>
        </div>
    )
}

export default Monitoring