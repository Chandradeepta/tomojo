import React from "react";
import "./GoogleSignInButton.css";

export function GoogleSignInButton(props) {
  return (
    <>
      <div id="gSignInWrapper">
        <div id="customBtn" class="customGPlusSignIn">
          <span class="icon"></span>
          <span class="buttonText">{props.buttonText}</span>
        </div>
      </div>
    </>
  );
}
