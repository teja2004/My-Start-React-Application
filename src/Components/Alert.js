import React from 'react'

export default function Alert(props) {
  return (
    <div className={`container mt-2 `} style={{height : "50px"}}>
      {props.alert && <div className="alert alert-primary d-flex align-items-center" role="alert" style={props.mainStyle}>
        <strong>{props.alert.type}</strong>&nbsp; :&nbsp; <div>{ props.alert.msg}</div>
      </div>}
    </div>
  );
}
