const initialState = {
  books:[]
}


export const reducer = (state = initialState,action:any)=>{
  switch (action.type) {
    case'BOOKS_LOADED':
      return {
        books: action.payload
      }
    default:
      return state
  }

}
