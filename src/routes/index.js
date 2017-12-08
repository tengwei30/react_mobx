
import Home from '../pages/Home/index.jsx'
import Schedule from '../pages/Schedule/index.jsx'
import Roster from '../pages/Roster/index.jsx'
import LayoutPage from '../pages/LayoutPages/index.jsx'

const createRoutes = [{
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
        }
    ]
}]

export default createRoutes