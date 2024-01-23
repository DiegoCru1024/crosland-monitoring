import React from "react";
import styles from './lastResult.module.scss'
import {Doughnut} from "react-chartjs-2";
import {Chart, ArcElement, Title} from "chart.js";

Chart.register(ArcElement, Title);

interface resumeStructure {
    domain: string,
    date: Date,
    resumeId: string,
    dailyScore_desktop: number,
    dailyScore_mobile: number
}

interface lastResultProps {
    lastResume: resumeStructure
}

const LastResultInfo: React.FC<lastResultProps> = ({lastResume}) => {
    if (!lastResume) {
        return (
            <div></div>
        )
    }

    const mobilePercentage = lastResume.dailyScore_mobile * 100
    const desktopPercentage = lastResume.dailyScore_desktop * 100

    const dataMobile = {
        labels: ['Rendimiento', 'Por mejorar'],
        datasets: [
            {
                data: [mobilePercentage, 100 - mobilePercentage],
                backgroundColor: [
                    "#84e19a",
                    "#b4babe",
                ],
                display: true,
                borderColor: "#D1D6DC"
            }
        ]
    }

    const dataDesktop = {
        labels: ['Rendimiento', 'Por mejorar'],
        datasets: [
            {
                data: [desktopPercentage, 100 - desktopPercentage],
                backgroundColor: [
                    "#84e19a",
                    "#b4babe",
                ],
                display: true,
                borderColor: "#D1D6DC"
            }
        ]
    }


    return (
        <div className={styles.lastResultContainer}>
            <h2>Ultimo Promedio Diario</h2>
            <div className={styles.graphContainer}>
                <div>
                    <Doughnut
                        data={dataMobile}
                        options={{
                            plugins: {
                                legend: {
                                    display: true,
                                    position: 'bottom'
                                },
                                tooltip: {
                                    enabled: true
                                }, title: {
                                    display: true,
                                    text: 'Rendimiento Mobile'
                                }
                            },
                            rotation: -90,
                            circumference: 180,
                            cutout: "60%",
                            maintainAspectRatio: true,
                            responsive: true
                        }}
                    />
                    <h1>{mobilePercentage.toFixed(0)}</h1>
                </div>
                <div>
                    <Doughnut
                        data={dataDesktop}
                        options={{
                            plugins: {
                                legend: {
                                    display: true,
                                    position: 'bottom'
                                },
                                tooltip: {
                                    enabled: true
                                }, title: {
                                    display: true,
                                    text: 'Rendimiento Desktop'
                                }
                            },
                            rotation: -90,
                            circumference: 180,
                            cutout: "60%",
                            maintainAspectRatio: true,
                            responsive: true
                        }}
                    />
                    <h1>{desktopPercentage.toFixed(0)}</h1>
                </div>
            </div>
        </div>
    )
}

export default LastResultInfo