import React from "react";
import PropTypes from 'prop-types'

function Alert(props) {
  return (
    <div style={{height:'50px'}}>
  {  props.alert&&<div class={`alert alert-${props.alert.type} mb-2 alert-dismissible fade show `}role="alert">
    <strong>{props.alert.type}</strong> : {props.alert.msg} 
  </div>}
  </div>
  );
}

export default Alert;
