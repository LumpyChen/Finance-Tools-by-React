/**
 * Created by Lumpychen on 16/5/21.
 */
import { createStore,combineReducers } from 'redux';
import stocks from './stocks';
import showSolution from './showSolution'
import changeRf from './changeRf'
import verify from './verify'

const rootReducer = combineReducers({
    stocks,
    showSolution,
    changeRf,
    verify
})

const store = createStore(rootReducer)

store.subscribe(()=>{
    console.log(store.getState());
})


export default store;