import "jest-extended";
import ReactGa from "react-ga";

export const setupTests = () => {
  const script = document.createElement("script");
  ReactGa.initialize("dummy", { testMode: true });
  document.body.appendChild(script);
};
