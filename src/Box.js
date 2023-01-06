import React from "react";

export default function Box(props) {

  const styles = {
    backgroundColor: props.on? "#333" : "transparent"
  }

return(
    <div
    onClick = {() => props.toggle(props.id)}
    className="box"
    style={styles}>
    </div>
)
}
