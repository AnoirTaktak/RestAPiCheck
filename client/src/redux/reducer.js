const { GET_USER, ADD_USER, DELETE_USER, UPDATE_USER } = require("./actiontypes");

const init = {
    loading : true ,
    users : null   
};

const reducer = (state=init,{type,payload}) => {
    switch (type) {
        case  GET_USER : 
            return {
                ...state,
                loading:false,
                users:payload
            };
        case ADD_USER : 
        return {
            ...state,users:[...state.users,payload],
        }
        case DELETE_USER : 
        return {
             ...state,users:state.users.filter(el => el._id !== payload)
        }
        case UPDATE_USER : 
        return {...state,users:state.users.map((el) => 
            el._id === payload._id ?
            {...el ,name :payload.name, email:payload.email, phone:payload.phone}  
             : el 
             )}
        default:
            return state ;
    }
}
export default reducer;