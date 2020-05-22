import {GET_USER_ID} from '../Types/type.js'


export default (state=null , action)=>{

switch(action.type){
case GET_USER_ID:
    state=action.payload;
    return{
    data:state,
    alert:false
    }

    default:
        return state;

}

}