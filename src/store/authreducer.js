import * as ACTION_TYPES from './action_type'

const initialState = {
  is_authenticated: false,
  profile: '',
  db_profile: null,
  category:[],
  blog:[]
}

const AuthReducer = (state = initialState, action) => {
    switch(action.type) {
      case ACTION_TYPES.LOGIN_SUCCESS:
        return {
          ...state,
          is_authenticated: true
        }
      case ACTION_TYPES.LOGIN_FAILURE:
        return {
          ...state,
          is_authenticated: false
        }
      case ACTION_TYPES.SET_PROFILE:
         return {
           ...state,
           
            profile:action.payload
        }
        case ACTION_TYPES.SET_CATEGORY:
          return {
            ...state,
            
            category:action.payload
         }

         case ACTION_TYPES.SET_ALLPOST:
          return {
            ...state,
            
            blog:action.payload
         }
     
      default:
        return state
    }
}

export default AuthReducer;
