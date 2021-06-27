import BlankLayout from '../../layouts/BlankLayout';
import DashboardLayout from '../../layouts/DashboardLayout';
import Home from '../../views/HomeFeature';
import Login from '../../views/Login';
import Register from '../../views/Register';
import TugasTim from '../../views/TugasTim';

const Routes = [
	{
		path: '/login',
		component: Login,
		layout: 'BlankLayout',
		meta: {
			authRoute: true
		}
	},
	{
		path: '/register',
		component: Register,
		layout: 'BlankLayout',
		meta: {
			authRoute: true
		}
	},
	{
		path: '/home',
		component: Home,
		layout: 'DashboardLayout'
	},
	{
		path: '/tugas-tim',
		component: TugasTim,
		layout: 'DashboardLayout'
	}
];

const DefaultRoute = '/home';

// ** Merge Routes

export { DefaultRoute, Routes };
