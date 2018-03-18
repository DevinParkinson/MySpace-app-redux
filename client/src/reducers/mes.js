const mes = (state = [], action ) => {
  switch(action.type) {
    case 'MES':
      return action.mes
    case 'ADD_ME':
      return [action.me, ...state]
    case 'UPDATE_ME':
      return state.map( a => {
        if (a.id === action.me.id)
          return action.me
        return a
      })
    case 'DELETE_ME':
      return state.filter( a => a.id !== action.id )
    default:
      return state;
  }
}

export default mes;
