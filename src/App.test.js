/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import App from "./App";

test("App Testing", () => {
    // ARRANGE
    render(<App />);

    // ACT
    const element = screen.getByText("Welcome in React");

    // ASSERT
    // expect(element).toBeInTheDocument();
    // expect(screen.getByRole("button")).toBeDisabled();
});
