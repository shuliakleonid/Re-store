 const booksLoaded = (newBooks:string) =>{
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
