import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { SignIn } from '../SignIn/SignIn';

export const history = createHistory();

export const Layout = () => {
	return (
		<Router
			history={history}>
			<div>
				<Switch>
					<Route path="/" component={SignIn} exact={true} />
				</Switch>
			</div>
		</Router>
	);
};
