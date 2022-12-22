import { useParams } from "react-router-dom";


export const Compare2 = (text, current) => {
  const id = useParams().id;
  if (
    /*window.location.pathname*/ 
    current === text ||
    current === `${text}/mens` ||
    current === `${text}/womens`||
    current === `${text}/electronics`||
    current === `${text}/jewelery` ||
    current === `/shopDetail/${id}` 
  ) {
    return true;
  } else {
    return false;
  }
};