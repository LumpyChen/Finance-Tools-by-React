/**
 * Created by Lumpychen on 16/5/21.
 */
import { createStore,combineReducers,compose } from 'redux';
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

const store = createStore(rootReducer,compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
))



export default store;