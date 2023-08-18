import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Setting = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/setting/edit");
  }, []);

  return <>Setting</>;
};

export default Setting;
