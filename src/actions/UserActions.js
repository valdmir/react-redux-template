import * as types from './actionTypes';
import UserApi from '../api/UserApi';
import {beginAjaxCall,ajaxCallError} from './ajaxStatusActions';
// export function createCourse(course){
//   return {type: types.CREATE_COURSE, course};
// }
export function authSuccess(user){
  return {type:types.AUTH_SUCCESS,user};
}
export function authFailed(user){
  return {type:types.AUTH_FAILED,user};
}
export function authUser(user){
  return function(dispatch,getState){
    dispatch(beginAjaxCall());
    return UserApi.auth(user).then(authenticate => {
        dispatch(authSuccess(authenticate));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
