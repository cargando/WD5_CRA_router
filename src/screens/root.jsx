import React from 'react';
import Spinner from "../components/spinner";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import * as URL from '../router/url'


class Root extends React.Component {


	renderCatalog = () => {
		console.log(this.props.catalog);

		const data = this.props.catalog && this.props.catalog.data

		if (this.props.catalogLoading) {
			return <Spinner />
		}

		if (Array.isArray(data) && data.length) {
			return data.map((item) => {
				return (
					<>
						<Link className="App-link" to={ `${ URL.ABOUT }/${ item.id }` } >{ item.title }</Link><br />
					</>
				)
			});

		}

	};

	render () {
		return (
			<>
				<p>
					<strong>Catalog:</strong><br />
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
			</>
		)
	}
}

const mapStateToProps = (store) => {
	return {
		catalog: store.app.catalog, // имя ключа catalog - в итоге попадет в качестве пропса в наш компонент App
		catalogLoading: store.app.isLoading.catalog || false, // имя ключа catalogLoading - в итоге попадет в качестве пропса в наш компонент App
	}
};



const connected = connect(mapStateToProps);

export default connected(Root);
