
export const ErrorFetch = ({ message = "Error happend while fetching" }) => {
  return <div className="alert alert-danger">{message}</div>;
};
