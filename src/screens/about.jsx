import React from 'react';
import { useSelector } from 'react-redux';
import Spinner from "../components/spinner";

function About(props) {

	const catalog = useSelector(store => store.app.catalog );
	const catalogLoading = useSelector(store => (store.app.isLoading.catalog || false) );


	function renderItemData() {
		if (catalogLoading) {
			return (<Spinner />);
		}

		if (catalog
			&& catalog.data
			&& catalog.data.length) {

			const { data = [] } = catalog;
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


export default About;
