import React from 'react';
import IcoMoon from "react-icomoon";
import Selection from "./selection.json"

// passas o icon="icon-arrow"

export default function Icon(props) {
  return (
    <IcoMoon iconSet={Selection} {...props} />
  );
}