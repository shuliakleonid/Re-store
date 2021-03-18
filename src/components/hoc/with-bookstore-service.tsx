import React from "react";
import { BookstoreServiceConsumer } from "../book-service-context/book-services-context";
import {InitialStateType} from '../../reducers/reducer';
import {connect} from 'react-redux';


const mapStateToProps = (state:InitialStateType)=>{
  return {
    books: state.books
  }
}
export function withBookstoreService () {

 return function<T>(Component:React.ComponentType<T>)  {
  debugger
  const AddComponent=(props:any)=> {
    return (
      <BookstoreServiceConsumer>
        {(bookstoreService) => {
          return <Component {...props} bookstoreService={bookstoreService} />;
        }}
      </BookstoreServiceConsumer>
    );
  };
  const ConnectAddComponent = connect(mapStateToProps)(AddComponent)
   return ConnectAddComponent
}}
