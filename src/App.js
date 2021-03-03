/* 
Inline editing textfiled using Material UI InputBase Component
Author: Zahid Hussain
Dated: Feb 24, 2021
Last updated: Mar 03, 2021
*/

import React from "react";
import InlineText from "./components/InlineText";
import Typography from "@material-ui/core/Typography";
import "./App.css";

function App() {
  const [text, setText] = React.useState("Zahid Hussain");
  const [mtext, setMtext] = React.useState("I am multiline box");
  const main = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "20px",
  };

  const container = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    margin: "20px",
  };

  const item = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: "20px",
  };

  return (
    <div style={main}>
      <Typography
        variant="body1"
        color="primary"
        style={{ marginRight: "12px" }}
      >
        Inline TextField Example (maxLength: 25 Characters)
      </Typography>

      <div style={container}>
        <Typography
          variant="body1"
          color="primary"
          style={{ marginRight: "12px" }}
        >
          Enter Text:
        </Typography>
        <div style={item}>
          <InlineText
            value={text}
            fontSize={"18px"}
            color="blue"
            maxLength={25}
            onSave={({ value }) => {
              setText(value);
            }}
          />
        </div>
      </div>
      <Typography variant="h6" color="initial">
        {`You have entered: ${text} - (Characters: ${text.length})`}
      </Typography>

      <Typography
        variant="body1"
        color="primary"
        style={{ marginRight: "12px" }}
      >
        Inline Multline TextField Example (rows: 2 [~100 Characters]) It will
        display expand more and less icon after 100 characters
      </Typography>

      <div style={container}>
        <Typography
          variant="body1"
          color="primary"
          style={{ marginRight: "12px" }}
        >
          Enter Text:
        </Typography>

        <div style={item}>
          <InlineText
            value={mtext}
            fontSize={"18px"}
            color="blue"
            multiline
            rows={2}
            more={true}
            maxLengthBeforeMore={100}
            onSave={({ value }) => {
              setMtext(value);
            }}
          />
        </div>
      </div>
      <div style={item}>
        <Typography variant="h6" color="initial">
          {`You have entered: ${mtext} - (Characters: ${mtext.length})`}
        </Typography>
      </div>
    </div>
  );
}

export default App;
