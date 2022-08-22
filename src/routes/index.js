import Home from '../pages/Home';
import Following from '../pages/Following';
import Profile from '../pages/Frofile';
import Upload from '../pages/Upload';
import Search from '../pages/Search';

//import layout from
import { HeaderOnly } from '../components/Layout';

const publishRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];

const privateRoutes = [];

export { publishRoutes, privateRoutes };
