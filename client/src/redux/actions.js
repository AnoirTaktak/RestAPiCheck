import axios from 'axios'
import { DELETE_USER, GET_USER, UPDATE_USER } from './actiontypes';


export const getusers = () => async (dispatch) => {
    try {
       const res = await axios.get('/getusers') ;
       console.log(res);
       dispatch({
        type: GET_USER,
        payload:res.data,
       });
    } catch (error) {
        alert('get error');
    }
}

export const adduser = (newuser) => async (dispatch) => {
    try {
       const {data} = await axios.post('/adduser',newuser) ;
       dispatch({
        type: GET_USER,
        payload:data,
       });
    } catch (error) {
        alert('user added succesfuly');
    }
}

export const deluser = (id) => async (dispatch) => {
    try {
        await axios.delete('/deleteusers/'+id) ;
       dispatch({
        type: DELETE_USER,
        payload:id,
       });
    } catch (error) {
        alert('user deleted succesfuly');
    }
}

export const updateuser = (upduser,id) => async (dispatch) => {
    try {
        await axios.put('/updateusers/'+id,upduser) ;
       dispatch({
        type: UPDATE_USER,
        payload:id,upduser,
       });
    } catch (error) {
        alert('user updated succesfuly');
    }
}