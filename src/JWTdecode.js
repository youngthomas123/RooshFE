import { jwtDecode } from "jwt-decode";

export const JWTdecode = (jwt) => {
    return jwtDecode(jwt);
  }
