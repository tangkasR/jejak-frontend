export const middleware = async () => {
  const token = localStorage.getItem("token");
  if (token !== null) {
    return true;
  }
  return false;
};
