import {reducer} from './reducers/ruducer';
import { createStore } from "redux";

export const store = createStore(reducer)
