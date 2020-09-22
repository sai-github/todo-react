import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("basic todo test", () => {
  const { getApp } = render(<App />);
});
