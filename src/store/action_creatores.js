import * as Actions from './actions';

function updateCatalog(payload) {
	return {
		type: Actions.UPDATE_CATALOG,
		payload,
	};
}

function updateBrands(payload) {
	return {
		type: Actions.UPDATE_BRANDS,
		payload,
	};
}

function updateLoading(payload) {
	return {
		type: Actions.UPDATE_LOADING,
		payload,
	};
}
