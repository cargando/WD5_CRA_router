import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import logo from './logo.svg';
import { loadCatalog } from './store/action_creatores';
import './App.css';

import roots from './router/router';


function App (props) {
	const dispatch = useDispatch();

	useEffect(() => dispatch(loadCatalog()), []);

	  return (
		  <>
			  <div className="App">
				  <header className="App-header">
					  <img src={logo} className="App-logo" alt="logo" />

					  {
						  roots
					  }


				  </header>
			  </div>
			  <div>11</div>
		  </>
	  );
}

export default App;

// обчно последние 2 строки имеют следующий, более короткий вид:
// export default connect(mapStateToProps, mapDispatchToProps)(App)
