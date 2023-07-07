import { AUTH_LOGIN_ERROR, AUTH_LOGIN_LOADING, AUTH_LOGIN_SUCCESS, AUTH_LOGOUT, AUTH_SIGNUP_ERROR, AUTH_SIGNUP_LOADING, AUTH_SIGNUP_SUCCESS } from "./auth.types"

let token = localStorage.getItem("token") || "";

const initialState = {
    token: token,
    loading: false,
    error: false,
}
export const authReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case AUTH_LOGIN_LOADING: {
            return {
                ...state,
                loading: true,
            }
        }
        case AUTH_LOGIN_ERROR: {
            return {
                ...state,
                loading: false,
                error: true,
            } 
        }

        case AUTH_LOGIN_SUCCESS: {
            // window.alert("saved",payload)
             
                localStorage.setItem("token", payload)             
                setTimeout(() => {
                    window.location.href="https://toggl-time-tracking.vercel.app/timer";
                }, 1000)

            console.log(payload, "Success");
            return {
                ...state,
                loading: false,
                error: false,
                token: payload,
            }
        }
        case AUTH_LOGOUT: {
            let tok = localStorage.removeItem("token")
            return {
                ...state,
                loading: false,
                error: false,
                token: tok,
            }
        }
        case AUTH_SIGNUP_LOADING: {
            return {
                ...state,
                loading: true,
            }
        }
        case AUTH_SIGNUP_ERROR: {
            return {
                ...state,
                loading: false,
                error: true,
            }
        }
        case AUTH_SIGNUP_SUCCESS: {
            console.log(payload, "inside REducer")
            return {
                ...state,
                loading: false,
                error: false,
                token: payload,
            }
        }

        default: {
            return state
        }
    }
}


