import React from "react";
import "@testing-library/jest-dom";
import { renderRouter } from "../../utils/jest-context-helper";
import Navbar from "./Navbar";

describe("Navbar Component", () => {
    it("renders without crashing", () => {
        const { getByTestId } = renderRouter(<Navbar />);
        const element = getByTestId("navbar");
        expect(element).toBeTruthy();
    });

    it("matches with snapshot", () => {
        const { getByTestId } = renderRouter(<Navbar />);
        const element = getByTestId("navbar");
        expect(element).toMatchSnapshot();
    });

    it("has logo", () => {
        const { getByAltText } = renderRouter(<Navbar />);
        const element = getByAltText(/My Logo/i);
        expect(element).toBeInTheDocument();
    });

    it("has all menu", () => {
        const { getByText } = renderRouter(<Navbar />);
        const home = getByText(/home/i);
        const aboutme = getByText(/about me/i);
        const contact = getByText(/contact/i);
        expect(home).toBeInTheDocument();
        expect(aboutme).toBeInTheDocument();
        expect(contact).toBeInTheDocument();
    });
});
