import {BooksType} from '../components/pages/home-page/HomePage';

export type InitialStateType = {
  books:Array<BooksType>
}

const initialState:InitialStateType = {
  books: [
    // {
    //   id: 1,
    //   title: 'kldhf;hfd',
    //   author: 'kdlfj;alsjfkds;'
    // },
    // {
    //   id: 2,
    //   title: 'kldsfds',
    //   author: 'kdfdskds;'
    // },
  ]
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
