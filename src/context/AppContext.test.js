import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent } from "@testing-library/react";
import { renderRouter } from '../utils/jest-context-helper';
import Navbar from '../components/Navbar';

describe("AppContext test", () => {
  it('initializes with /jalombroweb active menu', () => {
    const { getByText } = renderRouter(<Navbar />);
    const element = getByText(/home/i);
    expect(element).toHaveClass("btn-selected");
  });

  it('updates active menu to ABOUT ME when clicked', async () => {
    const { getByText, findByText } = renderRouter(<Navbar />);
    const element = getByText(/about me/i)
    await fireEvent.click(element);
    const newBtn = await findByText(/about me/i);
    expect(newBtn).toHaveClass("btn-selected");
  });
});