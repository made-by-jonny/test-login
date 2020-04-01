import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import LoginForm from "../../../components/forms/login";

const mockData = {
    email: "something@gmail.com"
}

test("Form to render without error", async () => {
    const getData = () => { }
    
    const { getByText } = render(
      <LoginForm onSubmit={getData} /> 
    );
   
    const emailInput = document.querySelector("input[type=email]");

    expect(emailInput).not.toBe(null);
});

test("Form submits without error", async () => {
    let returnedData; 
    const getData = (data) => {returnedData = data}
    
    const { getByText } = render(
      <LoginForm onSubmit={getData} /> 
    );
    
    document.querySelector("input[type=email]").value = mockData.email;
    const formNode = document.querySelector("form");
    
    fireEvent.submit(formNode)

    expect(returnedData).toEqual({...mockData, ["remember_me"]: true});
});