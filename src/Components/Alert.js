import React from 'react'

export default function Alert(props) {
  return (
    props.alert && <div className="alert alert-primary d-flex align-items-center" role="alert">
      <strong>{props.alert.type}</strong>&nbsp; :&nbsp; <div>{ props.alert.msg}</div>
    </div>
  );
}
