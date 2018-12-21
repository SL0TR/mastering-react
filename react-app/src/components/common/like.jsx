import React from "react";

const Like = ({ liked, onClick }) => {
  let classes = "mr-4 fa fa-heart";
  if (!liked) classes += "-o";
  return (
    <i
      onClick={onClick}
      className={classes}
      aria-hidden="true"
      style={{ cursor: "pointer" }}
    />
  );
};

export default Like;
