import React from 'react';
import '@testing-library/jest-dom';
import { act, fireEvent } from "@testing-library/react";
import render from './utils/jest-context-helper';
import App from './App';

describe("App Component", () => {
  it('renders without crashing', async () => {
    const { getByTestId } = await act(async () => render(<App />));
    const app = getByTestId("App");
    expect(app).toBeTruthy();
  });

  it('has a correct landing page', async () => {
    const { getByTestId } = await act(async () => render(<App />));
    const page = getByTestId("homepage");
    expect(page).toBeInTheDocument();
  });

  it('navigates to About Me page correctly', async () => {
    const { getByRole, findByTestId } = await act(async () => render(<App />));
    const element = getByRole('button', {
      name: /about me/i
    });
    await fireEvent.click(element);
    const page = await findByTestId("aboutmepage");
    expect(page).toBeInTheDocument();
  });
  
  it('navigates to Contact page correctly', async () => {
    const { getByRole, findByTestId } = await act(async () => render(<App />));
    const element = getByRole('button', {
      name: /contact/i
    });
    await fireEvent.click(element);
    const page = await findByTestId("contactpage");
    expect(page).toBeInTheDocument();
  });
});