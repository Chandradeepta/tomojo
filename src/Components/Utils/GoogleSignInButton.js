import React from "react";
import "./GoogleSignInButton.css";

export function GoogleSignInButton(props) {
  return (
    <>
      <div id="gSignInWrapper">
        <div id="customBtn" class="customGPlusSignIn">
          <span class="icon"></span>
          <span class="buttonText">Sign in with Google</span>
        </div>
      </div>
    </>
  );
}
