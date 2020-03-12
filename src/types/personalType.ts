import { GoogleLoginResponse, GoogleLoginResponseOffline } from "react-google-login";

// Compo types

export type TestCompoProp = {
  coolname: string;
  youngage: string;
};

export type NavBarProp = {
  endpoint: string;
};

// Model types

export type ProductType = {
  _id: string;
  name: string;
  description: string;
  categories: string[];
  variants: string[];
  size: string;
};

export type responseFromGoogleType = (arg: GoogleLoginResponse | GoogleLoginResponseOffline) => void;

// Hook types

export type useProductType = (
  arg1: string
) => {
  productAll: ProductType[] | undefined;
  product: ProductType | undefined;
};
