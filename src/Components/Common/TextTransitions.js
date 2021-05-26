import { Typography } from "@material-ui/core";
import React from "react";
import TextTransition, { presets } from "react-text-transition";

export default function TextTransitions(props) {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      2000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <Typography variant="h3" style={{fontWeight: 800}} display="inline" color="secondary">
      <TextTransition
        text={props.textArray[index % props.textArray.length]}
        springConfig={presets.stiff}
      />
    </Typography>
  );
}
