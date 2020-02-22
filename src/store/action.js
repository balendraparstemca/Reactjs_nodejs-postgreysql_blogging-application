import * as ACTION_TYPES from './action_type';

  
  export const login_success = () => {
    return {
      type: ACTION_TYPES.LOGIN_SUCCESS
    }
  }
  
  export const login_failure = () => {
    return {
      type: ACTION_TYPES.LOGIN_FAILURE
    }
  }

  export const set_profile = (profile) => {
    return {
      type: ACTION_TYPES.SET_PROFILE,
      payload: profile
    }
  }

  export const set_category = (cat) => {
    return {
      type: ACTION_TYPES.SET_CATEGORY,
      payload: cat
    }
  }

  export const set_allpost = (post) => {
    return {
      type: ACTION_TYPES.SET_ALLPOST,
      payload: post
    }
  }