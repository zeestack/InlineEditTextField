/* 
Inline editing textfiled using Material UI InputBase Component
Author: Zahid Hussain
Dated: Feb 24, 2021
 */

import React, { useState, useEffect, useRef } from "react";
import { InputBase, InputAdornment, IconButton } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import UnfoldLessIcon from "@material-ui/icons/UnfoldLess";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";

const InlineInput = withStyles((theme) => ({
  root: {
    fontSize: (props) => props.fontSize || "12px",
    fontWeight: (props) => props.fontWeight || "normal",
    backgroundColor: (props) => props.background || "transparent",
    color: (props) => props.color || "rgb(0,0,0)",
    width: (props) => props.width || "100%",
  },
  input: {
    overflow: (props) => props.overflow || "hidden",
    "&:focus": {
      border: "1px dashed lightblue",
    },
  },
}))(({ color, ...rest }) => <InputBase {...rest} />);

const InlineText = (props) => {
  const {
    id,
    value,
    maxLength = null,
    size,
    spellCheck = false,
    onSave = () => {},
    onClick = () => {},
    onFocus = () => {},
    rows,
    more = false,
    maxLengthBeforeMore = 150,
    ...rest
  } = props;
  const [text, setText] = useState(value);

  const [editting, setEditting] = useState(false);
  const [showMore, setMore] = useState(false);

  const ref = useRef(InlineInput);

  useEffect(() => {
    setText(value);
  }, [value]);

  const handleChange = (e) => {
    e.stopPropagation();
    const { value } = e.target;
    if (maxLength) {
      if (value.length > maxLength) return;
    }
    setText(value);
  };

  const handleSave = (e) => {
    e.stopPropagation();
    onSave({ id, value: text });
    setEditting(false);
    setMore(false);
  };

  return (
    <InlineInput
      id={id}
      inputRef={ref}
      size={size || "small"}
      value={text}
      autoComplete="off"
      onChange={(e) => {
        handleChange(e);
      }}
      onBlur={handleSave}
      onClick={(e) => {
        e.stopPropagation();
        onClick(e);
      }}
      onFocus={(e) => {
        e.stopPropagation();
        setEditting(true);
        onFocus();
      }}
      inputProps={{ spellCheck: spellCheck ? "true" : "false" }}
      rows={more && showMore ? undefined : rows}
      endAdornment={
        !editting &&
        more &&
        text.length > maxLengthBeforeMore && (
          <InputAdornment position="end">
            <IconButton onClick={() => setMore(!showMore)}>
              {showMore ? <UnfoldLessIcon /> : <UnfoldMoreIcon />}
            </IconButton>
          </InputAdornment>
        )
      }
      {...rest}
    />
  );
};

export default InlineText;
