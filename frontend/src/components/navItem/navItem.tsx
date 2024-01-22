import React from "react";
import {Link} from "react-router-dom";
import styles from './navItem.module.scss'

interface NavItemProps {
    label: string;
    domain?: string;
}

const NavItem: React.FC<NavItemProps> = ({label, domain}) => {
    return (
        <div className={styles.navItemContainer}>
            {domain ? (
                <Link to={`/monitoring/${domain}`}>
                    <h3>{label}</h3>
                    <p>{domain}</p>
                </Link>
            ) : (
                <Link to={`/`}>
                    <h3>{label}</h3>
                </Link>
            )}


        </div>
    )
}

export default NavItem