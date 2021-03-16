import React from "react";
import { BookstoreServiceConsumer } from "../book-service-context/book-services-context";

export function withBookstoreService () {

 return function<T>(Component:React.ComponentType<T>)  {
  debugger
  return (props:any) => {
    return (
      <BookstoreServiceConsumer>
        {(bookstoreService) => {
          return <Component {...props} bookstoreService={bookstoreService} />;
        }}
      </BookstoreServiceConsumer>
    );
  };
}}
