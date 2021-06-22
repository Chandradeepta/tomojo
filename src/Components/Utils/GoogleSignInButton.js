import React from "react";
import "./GoogleSignInButton.css";

export function GoogleSignInButton({ buttonText, ...buttonProps }) {
  return (
    <>
      <div id="gSignInWrapper" {...buttonProps}>
        <div id="customBtn" class="customGPlusSignIn">
          <span class="icon"></span>
          <span class="buttonText">{buttonText}</span>
        </div>
      </div>
    </>
  );
}
