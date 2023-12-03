import { async } from "regenerator-runtime";
import AdminSource from "../data/admin-source";
export const middleware = async () => {
  const isLogin = await AdminSource.getData();
  if (isLogin.data !== "") {
    return true;
  }
  return false;
};
