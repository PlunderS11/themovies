import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Detail from '../pages/Detail';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/:category/search/:keyword', component: Catalog },
    { path: '/:category/:id', component: Detail },
    { path: '/:category', component: Catalog },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
