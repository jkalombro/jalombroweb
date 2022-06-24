import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, act } from "@testing-library/react";
import render from '../utils/jest-context-helper';
import App from '../App';

describe("AppContext test", () => {
  it('initializes with /jalombroweb active menu', async () => {
    const { getByRole } = await act(async () => render(<App />));
    const element = getByRole('button', {
      name: /home/i
    });
    expect(element).toHaveClass("btn-selected");
  });

  it('updates active menu to ABOUT ME when clicked', async () => {
    const { getByRole, findByRole } = await act(async () => render(<App />));
    const element = getByRole('button', {
      name: /about me/i
    });
    await fireEvent.click(element);
    const newBtn = await findByRole('button', {
      name: /about me/i
    });
    expect(newBtn).toHaveClass("btn-selected");
  });
});