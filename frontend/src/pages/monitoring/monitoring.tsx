import React from "react";
import styles from './monitoring.module.scss'
import {useParams} from "react-router-dom";
import MonitoringInfo from "../../components/monitoringInfo/monitoringInfo";

const Monitoring: React.FC = () => {
    const {domain} = useParams()
    return (
        <div className={styles.monitoringContainer}>
            <h2>Resultados de {domain}</h2>
            <MonitoringInfo></MonitoringInfo>
        </div>
    )
}

export default Monitoring