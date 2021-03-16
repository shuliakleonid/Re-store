 const booksLoaded = (newBooks:any) =>{
  return{
    type:'BOOKS_LOADED',
    payload:{
      newBooks
    }
  }
}


export {
  booksLoaded,
}
