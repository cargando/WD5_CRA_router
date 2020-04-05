import * as Actions from './actions';

export function updateCatalog(payload) {
	return {
		type: Actions.UPDATE_CATALOG,
		payload,
	};
}

export function updateBrands(payload) {
	return {
		type: Actions.UPDATE_BRANDS,
		payload,
	};
}

export function updateLoading(payload) {
	return {
		type: Actions.UPDATE_LOADING,
		payload,
	};
}

export function loadCatalog() {

	return (dispatch) => {

		dispatch(updateLoading({ catalog: true }));

		const data = fetch('http://test-api.ipromote.ru/API/CATALOG/FIND');

		data.
		then((data) => { // async (data) => { ...
			return data.json();
		}).then( (data) => {

			dispatch(updateCatalog(data)); // экшн - обновить данные в каталоге (в ридаксе)
			dispatch(updateLoading({ catalog: false })); // экшен - обновить флажок загрузки, сказать что = фолз, типа загрузка завешена

		}).
		catch((e) => {
			dispatch(updateLoading({ catalog: false }));
			console.log("ERROR while loading data from url", e);
		});

	};

}
