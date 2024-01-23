import React, {useEffect, useState} from "react";
import styles from './monitoring.module.scss'
import {useParams} from "react-router-dom";
import MonitoringInfo from "../../components/monitoringInfo/monitoringInfo";
import axios from "axios";

const Monitoring: React.FC = () => {
    const {domain} = useParams()
    const [resultData, setResultData] = useState([])
    const [resumeData, setResumeData] = useState([])

    const getResultData = async () => {
        const url = `http://3.211.180.43:5000/getData/resultData?domain=${domain}`
        const response = await axios.get(url)
        setResultData(response.data.results)
    }

    const getResumeData = async () => {
        const url = `http://3.211.180.43:5000/getData/resumeData?domain=${domain}`
        const response = await axios.get(url)
        setResumeData(response.data.results)
    }

    useEffect(() => {
        try {
            getResultData().then(() => {
                console.log('Datos de resultados obtenidos.')
            })

            getResumeData().then(() => {
                console.log('Datos de resumen obtenidos.')
            })
        } catch (error) {
            console.log('Error al obtener datos de dominio: ', error)
            setResultData([])
            setResumeData([])
        }
    }, [domain]);

    return (
        <div className={styles.monitoringContainer}>
            <h2>Resultados de {domain}</h2>
            <MonitoringInfo resultData={resultData} resumeData={resumeData}></MonitoringInfo>
        </div>
    )
}

export default Monitoring