/* 
Inline editing textfiled using Material UI InputBase Component
Author: Zahid Hussain
Dated: Feb 24, 2021
 */

import React from "react";
import "./App.css";
import InlineText from "./components/InlineText";
import Typography from "@material-ui/core/Typography";

function App() {
  const [text, setText] = React.useState("Zahid Hussain");

  const main = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "12px",
  };

  const container = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    margin: "12px",
  };

  const item = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
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
    </div>
  );
}

export default App;
