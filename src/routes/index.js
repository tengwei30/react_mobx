
import Home from '../pages/Home/index.jsx';
import Schedule from '../pages/Schedule/index.jsx';
import Roster from '../pages/Roster/index.jsx';
import LayoutPage from '../pages/LayoutPages/index.jsx';
import Login from '../pages/Login/index.jsx';
import Meet from '../pages/Meet/meet.jsx';

const createRoutes = [{
    path:'/login',
    component: Login
},{
    path: '/',
    component: LayoutPage,
    routes: [
        {
            path: '/home',
            component: Home
        },{
            path: '/roster',
            component: Roster
        },{
            path: '/schedule',
            component: Schedule
        },{
            path: '/meet/:id',
            component: Meet
        }
    ]
}]

export default createRoutes