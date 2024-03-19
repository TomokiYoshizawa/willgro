import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./SuccessPage.scss";

function SuccessPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => {
      clearTimeout(redirectTimer);
    };
  }, [navigate]);
  return (
    <div className="success">
      <h1 className="success__title">Success!</h1>
      <p className="success__disc">Your payment was successful.</p>
      <p className="success__disc">
        You will be redirected to the homepage in 5 seconds...
      </p>
    </div>
  );
}

export default SuccessPage;
