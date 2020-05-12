import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { SignIn } from '../Account/SignIn/SignIn';
import { Account } from '../Account/Account';
import { SignUp } from '../Account/SignUp/SignUp';

export const history = createHistory();

export const Layout = () => {
	return (
		<Router
			history={history}>
			<div>
				<Switch>
					<Route path="/" component={() => <Account><SignIn /></Account>} exact={true} />
					<Route path="/signUp" component={() => <Account><SignUp /></Account>} exact={true} />
				</Switch>
			</div>
		</Router>
	);
};
