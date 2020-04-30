import React from 'react';
import { useSelector } from 'react-redux';
import Spinner from "../components/spinner";
import { Link } from 'react-router-dom'
import * as URL from '../router/url'


const Root = (props) => {
	const catalog = useSelector(store => store.app.catalog );
	const catalogLoading = useSelector(store => (store.app.isLoading.catalog || false) );

	const renderCatalog = () => {
		console.log(catalog);

		const data = catalog && catalog.data

		if (catalogLoading) {
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

		return (
			<>
				<p>
					<strong>Catalog:</strong><br />
					{
						renderCatalog()
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
		);
};

export default Root;
