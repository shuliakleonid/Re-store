import {reducer} from './reducers/ruducer';
import { createStore } from 'redux';

const store = createStore(reducer)
export default store
