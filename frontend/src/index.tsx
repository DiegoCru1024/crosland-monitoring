import ReactDOM from 'react-dom/client';
import styles from './index.module.scss'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard";
import Sidebar from "./components/sidebar/sidebar";
import Monitoring from "./pages/monitoring/monitoring";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <div className={styles.indexContainer}>
        <BrowserRouter>
            <Sidebar/>
            <Routes>
                <Route path={'/'} element={<Dashboard/>}/>
                <Route path={'/monitoring/:domain'} element={<Monitoring/>}/>
            </Routes>
        </BrowserRouter>
    </div>
);