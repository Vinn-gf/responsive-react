import { reduxGetUser } from "../../services/auth/get_me_user";
import { setTokenMe } from "../reducers/meUser/authMe";
// import { setIsUser, setTokenMe } from "../reducers/meUser/authMe";

export const GetUserMe = () => (dispatch) => {
  return reduxGetUser()
    .then((result) => {
    //   dispatch(setIsUser(true));
    console.log(result)
      dispatch(setTokenMe(result.data.data));
      return true;
    })
    .catch((err) => {
      console.log(err, "err me");
      return false;
    });
};
