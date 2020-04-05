import React from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import { loadCatalog } from './store/action_creatores';
import Spinner from './components/spinner'
import './App.css';

class App extends React.Component {

	componentDidMount() {
		this.props.loadCatalog();
	}

	renderCatalog = () => {
		console.log(this.props.catalog);

		const text = this.props.catalog
			&& this.props.catalog.data
			&& this.props.catalog.data.length
			&& this.props.catalog.data[0].title;

		return this.props.catalogLoading ? <Spinner /> : (
			`первый элемент каталога: ${ text }`
		);
	};

	render() {
	  return (
		  <>
			  <div className="App">
				  <header className="App-header">
					  <img src={logo} className="App-logo" alt="logo" />
					  <p>
						  <strong>Catalog:</strong>
						  {
							  this.renderCatalog()
						  }

							<br />
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
