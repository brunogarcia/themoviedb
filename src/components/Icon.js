import React from 'react';

const Icon = (props) => {
  const name = props.name;
  return (
    <span className={`glyphicon glyphicon-${name}`} aria-hidden="true"></span>
  );
}

export default Icon;
