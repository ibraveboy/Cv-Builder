import axios from "axios"
export const registerUser = (user) => {
    return (dispatch) => {
        axios
            .post("http://localhost:3000/user/add", user)
            .then((res) => {
                if (res.data.error) {
                    return dispatch({
                        type: "REGISTER_FAIL",
                        payload:res.data
                    })
                }
                res.data.success=true
                return dispatch({
                    type: "REGISTER_SUCCESS",
                    payload:res.data
                })
            }
            )
    }
}

export const signinUser = (user) => {
    return (dispatch) => {
        axios
            .post("http://localhost:3000/signin", user)
            .then((res) => {
                if (res.data.error) {
                    return dispatch({
                        type: "LOGIN_FAIL",
                        payload:res.data
                    })
                }
                res.data.success=true
                return dispatch({
                    type: "LOGIN_SUCCESS",
                    payload:res.data
                })
            }
            )
    }
}

export const resetUser = () => {
    return {
        type:"RESET_USER"
    }
}

export const toggleModal = (name, value) => {
    return {
        type: "TOGGLE_MODAL",
        payload: {name,value}
    }
}