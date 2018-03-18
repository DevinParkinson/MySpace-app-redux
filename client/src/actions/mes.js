import axios from 'axios';

export const MES = 'MES';
export const ADD_Me = 'ADD_ME';
export const UPDATE_ME = 'UPDATE_ME';
export const DELETE_ME = 'DELETE_ME';

export const getMes = () => {
  return (dispatch) => {
    axios.get('/api/mes')
      .then( res => dispatch({ type: MES, mes: res.data }) )
  }
}

export const addMe = (me) => {
  return (dispatch) => {
    axios.post('/api/mes', { me } )
     .then( res => dispatch({ type: ADD_ME, me: res.data }) )
  }
}

export const updateMe = (me) => {
  return (dispatch) => {
    axios.put(`/api/mes/${me.id}`, { me } )
      .then( res => dispatch({ type: UPDATE_ME, me: res.data }) )
  }
}

export const deleteMe = (id) => {
  return (dispatch) => {
    axios.delete(`/api/mes/${id}`)
      .then( () => dispatch({ type: DELETE_ME, id }) )
  }
}
