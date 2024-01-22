import styles from './sidebar.module.scss'
import React from "react";
import NavItem from "../navItem/navItem";

const Sidebar: React.FC = () => {
    return (
        <div className={styles.sideBarContainer}>
            <h2>PageSpeed Monitoring</h2>
            <NavItem label={'Dashboard'} domain={''}></NavItem>
            <NavItem label={'Protuner'} domain={'prod-protuner.samishop.pe'}></NavItem>
            <NavItem label={'Kawasaki'} domain={'prod-kawasaki.samishop.pe'}></NavItem>
            <NavItem label={'Croslandstore'} domain={'prod-croslandstore.samishop.pe'}></NavItem>
        </div>
    )
}

export default Sidebar