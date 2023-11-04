import { async } from "regenerator-runtime";
import AdminSource from "../data/admin-source";
export const middleware = async () => {
  if (!localStorage.id) {
    return;
  }
  const id = JSON.parse(localStorage.id);
  const isLogin = await AdminSource.getData(id.id);
  if (isLogin.token !== null) {
    return true;
  }
  return false;
};
