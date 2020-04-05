import React from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import { loadCatalog } from './store/action_creatores';
import './App.css';

import roots from './router/router';


class App extends React.Component {

	componentDidMount() {
		this.props.loadCatalog();
	}



	render() {
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

}

const mapStateToProps = (store) => {
	return {
		catalog: store.app.catalog, // имя ключа catalog - в итоге попадет в качестве пропса в наш компонент App
		catalogLoading: store.app.isLoading.catalog || false, // имя ключа catalogLoading - в итоге попадет в качестве пропса в наш компонент App
	}
};

const mapDispatchToProps = (dispatch) => {
		return {
			loadCatalog: () => dispatch(loadCatalog()), // имя ключа loadCatalog - в итоге попадет в качестве пропса в наш компонент App
		}
};


const connected = connect(mapStateToProps, mapDispatchToProps);
export default connected(App);

// обчно последние 2 строки имеют следующий, более короткий вид:
// export default connect(mapStateToProps, mapDispatchToProps)(App)
