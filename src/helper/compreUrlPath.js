/**
 * This function will take a url text as argument and check if the current url is equal to the url passed
 */
import { useParams } from "react-router-dom";


export const Compare = (text, current) => {
  
  const id = useParams().id;
  if (
    /*window.location.pathname*/ current === text ||
    current === `${text}/create` ||
    current === `${text}/edit/${id}`||
    current === `${text}/${id}`
  ) {
    return true;
  } else {
    return false;
  }
};
