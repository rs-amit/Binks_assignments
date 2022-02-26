import axios from "axios";

export const LoginUser = (email, password) => async (dispatch, getState) => {
    console.log('its working...')
    try {
        dispatch({type:"LOGIN-REQUEST"})

        const { data } = await axios.post(`https://server.jerryroy.repl.co/api/Auth/login`, { email, password })
        console.log("data",data)

        dispatch({ type:"LOGIN-SUCCESSFUL",payLoad:data.user })
        
    } catch (error) {

        dispatch({ type:"LOGIN-FAIL", payLoad:error.message})
    }
}

export const LogoutUser=()=>(dispatch)=>{
    dispatch({
       type:"LOGOUT-USER"   
    })
}
