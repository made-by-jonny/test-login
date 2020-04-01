import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import useForm from "../../hooks/useform";
import useValidation from "../../hooks/useValidation";


/* 
    there seems to be an issue with oninvalid in jest-dom / testing-library
    so can't test usevalidation properly or custom input
*/  

const FormComponent = ({onSubmit}) => {
    const [submitAction] = useForm(onSubmit)
    const [message, validate] = useValidation()
    return (
        <form onSubmit={submitAction}>
            <input name="email" onBlur={validate} onInvalid={() => console.log("yo")} minLength="1"/>
            <span>{message.message}</span>
            <input name="remember_me" type="checkbox" defaultChecked={true}/>
            <button type="submit">Submit</button>
        </form>
    )
}

test("form renders fine ", async () => {
    const getData = (data) => {}
    
    render(
      <FormComponent onSubmit={getData} /> 
    );
  
    const formNode = [...document.querySelectorAll("form input")].length;

    expect(formNode).toEqual(2);
});

// test("message should show error", async () => {
//     let returnedData; 
//     const getData = (data) => {returnedData = data}
    
//     const { getByText } = render(
//       <FormComponent onSubmit={getData} /> 
//     );
  
//     const formNode = document.querySelector("form");
    
//     fireEvent.submit(formNode)
//     
//     expect(getByText("Please fill in this field.")).not.toBe(null);
// });
