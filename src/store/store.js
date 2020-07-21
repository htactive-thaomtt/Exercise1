import { createStore } from "redux";
import rootReducer from "../reducers";
import { saveState, loadState } from './localStorage';

const persistedState = loadState();
const store = createStore(rootReducer, persistedState);
store.subscribe(() => {
    saveState(store.getState());
})
export default store;
