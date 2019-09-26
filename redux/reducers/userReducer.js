const initialState = {
    fullName: "",
    email: "",
    password: "",
    city: "",
    country: "",
    dob:null,
    education: null,
    experience: null,
    skills: null,
    errors: null,
    user: {
        error:""
    },
    modalEduVisible: false,
    modalExpVisible:false,
}

export const userReducer = (state = initialState, actions) => {
    if (actions.type == "REGISTER_FAIL") {
        return {
            ...state,
            user: actions.payload
        }
    }
    else if (actions.type == "REGISTER_SUCCESS") {
        const userData=action.payload
        return {
            ...state,
            fullName: userData.fullName,
            email: userData.email,
            dob: userData.dob,
            city: userData.city,
            country: userData.country,
            password: userData.password,
            phone:userData.phone,
            education: userData.education,
            experience: userData.experience,
            skills:userData.skills
        }
    }
    else if (actions.type == "LOGIN_SUCCESS") {
        return {
            ...state,
            fullName: userData.fullName,
            email: userData.email,
            dob: userData.dob,
            city: userData.city,
            country: userData.country,
            password: userData.password,
            phone:userData.phone,
            education: userData.education,
            experience: userData.experience,
            skills:userData.skills
        }
    }
    else if (actions.type == "LOGIN_FAIL") {
        return {
            ...state,
            user:actions.payload
        }
    }
    else if (actions.type == "RESET_USER") {
        return {
            ...state,
            fullName: "",
            email: "",
            dob: "",
            city: "",
            country: "",
            password: "",
            phone:"",
            education: "",
            experience: "",
            skills:"",
        }
    }
    else if (actions.type == "TOGGLE_MODAL") {
        return {
            ...state,
            [actions.payload.name]:actions.payload.value
        }
    }
    return state
}
