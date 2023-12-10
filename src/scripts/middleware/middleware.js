import { async } from "regenerator-runtime";
import AdminSource from "../data/admin-source";
export const middleware = async () => {
  const token = localStorage.getItem("token");
  if (token !== null) {
    return true;
  }
  return false;
};
