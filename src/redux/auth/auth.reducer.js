// Note: Do not update/change the initial state
import {
  AUTH_SIGN_IN_ERROR,
  AUTH_SIGN_IN_LOADING,
  AUTH_SIGN_IN_SUCCESS,
  AUTH_SIGN_OUT,
} from "./auth.types";

export const authInitalState = {
  loading: false,
  data: {
    token: "",
    isAuthenticated: false,
  },
  error: false,
};

export const authReducer = (state = authInitalState, { type, payload }) => {
  switch (type) {
    case AUTH_SIGN_IN_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case AUTH_SIGN_IN_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case AUTH_SIGN_IN_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: { isAuthenticated: true, token: payload.token },
      };
    }
    case AUTH_SIGN_OUT: {
      return {
        ...state,
        loading: false,
        data: { isAuthenticated: false, token: "" },
      };
    }
    case AUTH_SIGN_IN_LOADING: {
      return { ...authInitalState };
    }
    default: {
      return state;
    }
  }
};
