/* eslint-disable */
import React, { lazy } from 'react';
import BlankLayout from '../layouts/BlankLayout';
import DashboardLayout from '../layouts/DashboardLayout';
import { Suspense } from 'react';
import { BrowserRouter as AppRouter, Redirect, Route, Switch } from 'react-router-dom';
// ** Routes & Default Routes
import { DefaultRoute, Routes } from './routes';
import { selectUser } from '../features/user/userSlice';
import { useSelector } from 'react-redux';

const Router = () => {
	const user = useSelector(selectUser);
	const DefaultLayout = 'DashboardLayout';
	const Layouts = { DashboardLayout, BlankLayout };

	// ** Return Filtered Array of Routes & Paths
	const LayoutRoutesAndPaths = (layout) => {
		const LayoutRoutes = [];
		const LayoutPaths = [];

		if (Routes) {
			Routes.forEach((route) => {
				if (route.layout === layout || (route.layout === undefined && DefaultLayout === layout)) {
					LayoutRoutes.push(route);
					LayoutPaths.push(route.path);
				}
			});
		}

		return { LayoutRoutes, LayoutPaths };
	};

	const Error = lazy(() => import('../views/PageNotFound'));

	const FinalRoutes = (props) => {
		const route = props.route;

		if (
			(!user && route.meta === undefined) ||
			(!user && route.meta && !route.meta.authRoute && !route.meta.publicRoute)
		) {
			return <Redirect to="/login" />;
		} else if (route.meta && route.meta.authRoute && user) {
			// ** If route has meta and authRole and user is Logged in then redirect user to home page (DefaultRoute)
			return <Redirect to="/" />;
		} else {
			// ** If none of the above render component
			return <route.component {...props} />;
		}
	};

	const ResolveRoutes = () => {
		return Object.keys(Layouts).map((layout, index) => {
			// ** Convert Layout parameter to Layout Component
			// ? Note: make sure to keep layout and component name equal

			const LayoutTag = Layouts[layout];

			// ** Get Routes and Paths of the Layout
			const { LayoutRoutes, LayoutPaths } = LayoutRoutesAndPaths(layout);

			// ** We have freedom to display different layout for different route
			// ** We have made LayoutTag dynamic based on layout, we can also replace it with the only layout component,
			// ** that we want to implement like VerticalLayout or HorizontalLayout
			// ** We segregated all the routes based on the layouts and Resolved all those routes inside layouts

			// ** RouterProps to pass them to Layouts
			const routerProps = {};

			return (
				<Route path={LayoutPaths} key={index}>
					<LayoutTag routerProps={routerProps} layout={layout}>
						<Switch>
							{LayoutRoutes.map((route) => {
								return (
									<Route
										key={route.path}
										path={route.path}
										exact={route.exact === true}
										render={(props) => {
											// ** Assign props to routerProps
											Object.assign(routerProps, {
												...props,
												meta: route.meta
											});

											return (
												<Suspense fallback={null}>
													<FinalRoutes route={route} {...props} />
												</Suspense>
											);
										}}
									/>
								);
							})}
						</Switch>
					</LayoutTag>
				</Route>
			);
		});
	};

	return (
		<AppRouter basename={process.env.REACT_APP_BASENAME}>
			<Switch>
				<Route
					exact
					path="/"
					render={() => {
						return user ? <Redirect to={DefaultRoute} /> : <Redirect to="/login" />;
					}}
				/>

				{ResolveRoutes()}
				<Route path="*" component={Error} />
			</Switch>
		</AppRouter>
	);
};

export default Router;
