import React from "react";

export default function Alerts(props) {
  return (
    props.msg && <div className={`alert alert-${props.msg.type} alert-dismissible fade show`} role="alert">
      <strong>{props.msg.type}:</strong> {props.msg.msg}
    </div>
  );
}
