import React, {useState} from "react";
import styles from './monitoringInfo.module.scss'
import {
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
} from 'chart.js';
import {Line} from 'react-chartjs-2';
import LastResultInfo from "../lastResultInfo/lastResultInfo";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

interface resultStructure {
    domain: string,
    date: Date,
    testId: string,
    performance_desktop: number,
    performance_mobile: number
}

interface resumeStructure {
    domain: string,
    date: Date,
    resumeId: string,
    dailyScore_desktop: number,
    dailyScore_mobile: number
}

interface MonitoringProps {
    resultData: Array<resultStructure>,
    resumeData: Array<resumeStructure>
}

const MonitoringInfo: React.FC<MonitoringProps> = ({resultData, resumeData}) => {
    const lastResult = resultData.slice(-12)
    const lastResume = resumeData[resumeData.length - 1]
    const labels = lastResult.map(item => {
        const dateObject = new Date(item.date);
        const hours = dateObject.getHours().toString().padStart(2, '0');
        const minutes = dateObject.getMinutes().toString().padStart(2, '0');

        return `${hours}:${minutes}`;
    });

    const chartData = {
        labels,
        datasets: [
            {
                label: 'Mobile',
                data: lastResult.map(item => {
                    const percentage = (item.performance_mobile * 100).toFixed(0);
                    return percentage.toString();
                }),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Desktop',
                data: lastResult.map(item => {
                    const percentage = (item.performance_desktop * 100).toFixed(0);
                    return percentage.toString();
                }),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ]
    }

    const formatDate = (dateString: string) => {
        const dateObject = new Date(dateString);
        const hours = dateObject.getHours().toString().padStart(2, '0');
        const minutes = dateObject.getMinutes().toString().padStart(2, '0');
        const day = dateObject.getDate().toString().padStart(2, '0');
        const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
        const year = dateObject.getFullYear().toString();

        return `${hours}:${minutes} - ${day}:${month}:${year}`;
    };

    return (
        <div className={styles.infoContainer}>
            <div>
                <Line data={chartData}/>
            </div>

            <div>
                <LastResultInfo lastResume={lastResume}></LastResultInfo>
            </div>

            <div className={styles.tableContainer}>
                <table>
                    <thead>
                    <tr>
                        <th>Fecha de Prueba</th>
                        <th>Resultado Mobile</th>
                        <th>Resultado Desktop</th>
                    </tr>
                    </thead>
                    <tbody>
                    {resultData && resultData.map((item) => (
                        <tr key={item.testId}>
                            <td>{formatDate(item.date.toString())}</td>
                            <td>{item.performance_mobile}</td>
                            <td>{item.performance_desktop}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MonitoringInfo