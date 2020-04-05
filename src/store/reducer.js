import { combineReducers } from "redux";
import * as Actions from "./actions";

const initialStore = {
	catalog: [],
	brands: [],
	colors: [],
	isLoading: {}, // ~ {catalog: true, brands: false, colors: false, }
};

function rootReducer(store = initialStore, action) {

	switch (action.type) {
		case Actions.UPDATE_CATALOG: // это как бэ if (action.type === Actions.UPDATE_CATALOG)
			return {
				...store,
				catalog: action.payload,
			};

	}

	return store;
}

export default () => combineReducers({
	app: rootReducer,
});
