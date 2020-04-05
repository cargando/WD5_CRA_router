import React from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import { loadCatalog } from './store/action_creatores';
import './App.css';

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
					  <p>
						  Edit <code>src/App.js</code> and save to reload.
					  </p>
					  <a
						  className="App-link"
						  href="https://reactjs.org"
						  target="_blank"
						  rel="noopener noreferrer"
					  >
						  Learn React
					  </a>
				  </header>
			  </div>
			  <div>11</div>
		  </>
	  );
  }

}

const mapStateToProps = (store) => {
	return {
		catalog: store.app.catalog,
	}
};

const mapDispatchToProps = (dispatch) => {
		return {
			loadCatalog: () => dispatch(loadCatalog()),
		}
};


const connected = connect(mapStateToProps, mapDispatchToProps);
export default connected(App);

// обчно последние 2 строки имеют следующий, более короткий вид:
// export default connect(mapStateToProps, mapDispatchToProps)(App)
