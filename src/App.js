import './assets/boxicons-2.1.2/css/boxicons.min.css';
import './App.scss';
import 'swiper/swiper.min.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './config/Routes';
import DefaultLayout from './components/defaultLayout/DefaultLayout';

function App() {
    return (
        <Router>
            <Routes>
                {publicRoutes.map((route, index) => {
                    const Page = route.component;
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <DefaultLayout>
                                    <Page />
                                </DefaultLayout>
                            }
                        />
                    );
                })}
            </Routes>
        </Router>
    );
}

export default App;
