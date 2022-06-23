import React from 'react';
import '@testing-library/jest-dom';
import { act } from "@testing-library/react";
import render from './utils/jest-context-helper';
import App from './App';

describe("App Component", () => {
  it('renders without crashing', async () => {
    const { getByTestId } = await act(async () => render(<App />));
    const app = getByTestId("App");
    expect(app).toBeTruthy();
  });
});