import { combineReducers } from 'redux';

import mainAlcoholListReducer from './main_alcohol_list_reducer';
import alcoholChoicesReducer from './alcohol_choices_reducer';

const rootReducer = combineReducers({
  mainAlcoholList: mainAlcoholListReducer,
  alcoholChoices: alcoholChoicesReducer
});

export default rootReducer;
