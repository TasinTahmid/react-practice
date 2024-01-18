import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import UseStateObject from "./UseStateObject.jsx";

test("UseStateObject Testing", () => {
    // ARRANGE
    render(<UseStateObject />);

    // ACT
    const firstName = screen.getByTestId("firstName");
    const lastName = screen.getByTestId("lastName");
    fireEvent.change(firstName, { target: { value: "tasin" } });
    const button = screen.getByRole("button");
    fireEvent.click(button);

    // ASSERT
    expect(firstName).toBeInTheDocument();
    expect(firstName.value).toBe("tasin");
    expect(lastName).toBeInTheDocument();
    expect(screen.getByText("button clicked...")).toBeInTheDocument();
});
