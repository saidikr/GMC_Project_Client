

export const Compare2 = (text, current) => {
  if (
    /*window.location.pathname*/ 
    current === text ||
    current === `${text}/mens` ||
    current === `${text}/womens`||
    current === `${text}/electronics`||
    current === `${text}/jewelery` 
  ) {
    return true;
  } else {
    return false;
  }
};