import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import LoginPage from "../../pages";

test("Login page to render without error", async () => {
    const getData = () => { }
    
    const { getByText } = render(
      <LoginPage /> 
    );
   
    const emailInput = document.querySelector("input[type=email]");

    expect(emailInput).not.toBe(null);
});

test("Form and shows an error", async () => {
    const { getByText } = render(
      <LoginPage /> 
    );
    
    
    const formNode = document.querySelector("form");
    
    fireEvent.submit(formNode)
    const errorMessage = document.querySelector("span.error").innerHTML;

    expect(errorMessage).toEqual("There was an issue signing in");
});