
'use strict';

import { createStore, applyMiddleware, compose } from 'redux'
import devTools from 'remote-redux-devtools'
import thunk from 'redux-thunk'
import reducer from './reducers'
import { persistStore } from 'redux-persist'
import { AsyncStorage } from 'react-native'
import promise from './promise';

import { getGeoLocation } from './actions/app';

export default function configureStore(onCompletion:()=>void):any {
	const enhancer = compose(
		applyMiddleware(thunk, promise),
		devTools({
			name: 'NativeStarterKit', realtime: true
		}),
	);

	let store = createStore(reducer, enhancer);
	persistStore(store, {storage: AsyncStorage}, onCompletion);
	initStore(store);

	return store
}

/**
Fire (possibly async) actions to initialize the application state
*/
function initStore(store) {
	store.dispatch(getGeoLocation());
}
