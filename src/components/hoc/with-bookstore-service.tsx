import React from "react";
import { BookstoreServiceConsumer } from "../book-service-context/book-services-context";

export const withBookstoreService = () => (Component:any) => {
  return (props: any) => {
    return (
      <BookstoreServiceConsumer>
        {(bookstoreService) => {
          return <Component {...props} bookstoreService={bookstoreService} />;
        }}
      </BookstoreServiceConsumer>
    );
  };
};
