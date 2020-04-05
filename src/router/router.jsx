import React, { lazy } from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import * as URL from './url'

import Root from "../screens/root";
import About from "../screens/about";


export default (
	<Router>
		<Switch> {/* прямая аналоги с JS switch - case */}

			<Route exact path={ URL.ROOT } component={ Root } /> {/* непосредственно case */}
			<Route exact path={ URL.ABOUT_CODE } component={ About } /> {/* непосредственно case */}


		</Switch>

	</Router>
)
