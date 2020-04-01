import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Pod from "../../../components/pod";

test("Pod to render with children without error", async () => {
    
    const { getByText } = render(
      <Pod>Hello</Pod>
    );
   
    const hello = getByText("Hello")

    expect(hello).not.toBe(null);
});