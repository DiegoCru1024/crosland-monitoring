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
                <Link to={`/monitoring/${domain}`} className={styles.link}>
                    <div>
                        <h3>{label}</h3>
                        <p>{domain}</p>
                    </div>
                </Link>
            ) : (
                <Link to={`/`}>
                    <div>
                        <h3>{label}</h3>
                    </div>
                </Link>
            )}


        </div>
    )
}

export default NavItem