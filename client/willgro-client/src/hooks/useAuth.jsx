import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../redux/features/userSlice";
import authUtils from "../utils/authUtils";

export function useAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.userInfo);

  useEffect(() => {
    const checkAuth = async () => {
      const user = await authUtils.isAuthenticated();
      if (!user) {
        // navigate("/");
      } else {
        dispatch(setUser(user));
      }
    };

    if (!user) {
      checkAuth();
    }
  }, [dispatch, navigate, user]);

  return user;
}
