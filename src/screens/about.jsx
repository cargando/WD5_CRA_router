import React from 'react';
import { connect } from 'react-redux';
import Spinner from "../components/spinner";

function About(props) {

	function renderItemData() {
		if (props.catalogLoading) {
			return (<Spinner />);
		}

		if (props.catalog
			&& props.catalog.data
			&& props.catalog.data.length) {

			const { data = [] } = props.catalog;
			let item = {};

			for (let i = 0; i < data.length; i++) {
				console.log("item ", data[ i ]);
				if (data[ i ].id == props.match.params.code) {
					item = data[ i ];
				}
			} // end of FOR

			return (
				<>
					<strong>ID:</strong> <span>{ item.id } </span><br />
					<strong>Title:</strong> <span>{ item.title } </span><br />
					<strong>Available:</strong> <span>{ item.available } </span><br />
					<strong>Image URL:</strong> <span>{ item.img_url } </span><br />
				</>
			);

		} // end of IF

	}

	return (
		<div>
			<h3>This is about some catalog item PAGE</h3>
			<h4>Need item N { props.match.params.code }</h4>
			<div>
				{
					renderItemData()
				}
			</div>
		</div>
	);
}

const mapStateToProps = (store) => {
	return {
		catalog: store.app.catalog, // имя ключа catalog - в итоге попадет в качестве пропса в наш компонент App
		catalogLoading: store.app.isLoading.catalog || false, // имя ключа catalogLoading - в итоге попадет в качестве пропса в наш компонент App
	}
};



const connected = connect(mapStateToProps);

export default connected(About);
