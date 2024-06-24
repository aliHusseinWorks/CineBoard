import React from "react";
import { useSelector } from "react-redux";
import { Oval } from "react-loader-spinner";

import "../index.css";

const Loading = () => {
  const visible = useSelector((state) => state.loading.isLoading);

  if (!visible) return null;

  return (
    <div className="loading-overlay">
      <Oval
        visible={true}
        height="80"
        width="80"
        color="rgb(19, 20, 22)"
        secondaryColor="white"
        ariaLabel="oval-loading"
      />
    </div>
  );
};

export default Loading;
