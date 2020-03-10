import React, { FC } from "react";
import GoogleLogin, { GoogleLoginResponse, GoogleLoginResponseOffline } from "react-google-login";

import { responseFromGoogleType } from "../../types/personalType";

// Type guard for response from Google
function isGoogleLoginResponse(res: GoogleLoginResponse | GoogleLoginResponseOffline): res is GoogleLoginResponse {
  return (res as GoogleLoginResponse) !== undefined;
}

const responseGoogle: responseFromGoogleType = async (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
  // console.log(response);
  if (isGoogleLoginResponse(response)) {
    console.log(response.tokenId);
  }
};

const UserPage: FC<void> = () => {
  return (
    <div>
      <h2>This is user page</h2>
      <GoogleLogin
        clientId="903071779533-b9om8er3acdvuh5kea67qa264vc915ut.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

export default UserPage;
