import {useDispatch} from "react-redux"
import authSlice from "../store/authSlice";
import "../css/Login.css"

const Login = () => {
  const dispatch = useDispatch();
  const isLogging = () => {
    dispatch(authSlice.actions.login());
  }

  return <div className="containerLogin">
    <button type="button" onClick={isLogging}>LOGIN?</button>
  </div>
}

export default Login;