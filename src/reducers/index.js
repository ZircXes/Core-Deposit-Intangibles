import {combineReducers} from 'redux';
import portfolios from './portfolioReducer';
// import yieldCurve from './yieldCurveReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  portfolios,
  ajaxCallsInProgress
});

export default rootReducer;
