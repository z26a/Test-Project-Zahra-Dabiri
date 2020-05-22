import {GET_USER_ID} from '../Types/type.js';

export default params => async dispatch=>{

const res=await fetch('http://fakerestapi.azurewebsites.net/api/Books')
dispatch(getAsync(res.data));
};

const getAsync=res=>(
{
type:GET_USER_ID,
payload:res

}

)

