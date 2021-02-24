/* 
Inline editing textfiled using Material UI InputBase Component
Author: Zahid Hussain
Dated: Feb 24, 2021
 */

import React, { useState, useEffect, createRef } from "react";
import { InputBase } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const InlineInput = withStyles((theme) => ({
  root: {
    fontSize: (props) => props.fontSize || "12px",
    fontWeight: (props) => props.fontWeight || "normal",
    backgroundColor: (props) => props.background || "transparent",
    color: (props) => props.color || "rgb(0,0,0)",
    width: (props) => props.width || "100%",
  },
  input: {
    overflow: "hidden",
    "&:focus": {
      border: "1px dashed lightblue",
    },
  },
}))(({ color, ...rest }) => <InputBase {...rest} />);

const InlineText = (props) => {
  const {
    id,
    value,
    maxLength,
    size,
    onSave = () => {},
    onClick = () => {},
    ...rest
  } = props;
  const [text, setText] = useState(value);
  const ref = createRef(InlineInput);

  useEffect(() => {
    setText(value);
  }, [value]);

  const handleChange = (e) => {
    e.stopPropagation();
    let { value } = e.target;
    console.log(maxLength);
    if (value.length > maxLength) return;
    setText(e.target.value);
  };

  const handleSave = (e) => {
    e.stopPropagation();
    onSave({ id, value: text });
  };

  return (
    <InlineInput
      id={id}
      inputRef={ref}
      size={size || "small"}
      value={text}
      autoComplete="off"
      onChange={(e) => handleChange(e)}
      onBlur={handleSave}
      onMouseLeave={(e) => {
        e.stopPropagation();
        ref.current.blur();
      }}
      onClick={(e) => {
        e.stopPropagation();
        onClick(e);
      }}
      {...rest}
    />
  );
};

export default InlineText;
