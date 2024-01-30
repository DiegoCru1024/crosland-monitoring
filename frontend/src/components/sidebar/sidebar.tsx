import styles from './sidebar.module.scss'
import React from "react";
import NavItem from "../navItem/navItem";

const Sidebar: React.FC = () => {
    return (
        <div className={styles.sideBarContainer}>
            <h2>PageSpeed Monitoring</h2>
            <NavItem label={'Dashboard'} domain={''}></NavItem>
            <NavItem label={'Protuner'} domain={'protuner.pe'}></NavItem>
            <NavItem label={'Kawasaki'} domain={'kawasaki.com.pe'}></NavItem>
            <NavItem label={'Croslandstore'} domain={'croslandstore.com.pe'}></NavItem>
            <NavItem label={'Rok'} domain={'rok.pe'}></NavItem>
        </div>
    )
}

export default Sidebar