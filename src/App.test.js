import React from 'react';
import '@testing-library/jest-dom';
import { screen } from "@testing-library/react";
import render from './utils/jest-context-helper';
import App from './App';

describe("App Component", () => {
  it('renders without crashing', async () => {
    const { findByTestId } = render(<App />);
    const AppElement = await findByTestId('App');
    expect(AppElement).toBeInTheDocument();
  });

  // it('should have scores component', () => {
  //   render(<App />);
  //   expect(screen.getByText(/scores/i)).toBeInTheDocument();
  // });

  // it('should have tictactoe component', () => {
  //   render(<App />);
  //   expect(screen.getByText(/Click Start Match to start!/i)).toBeInTheDocument();
  // });

  // it('should have instructions component', () => {
  //   render(<App />);
  //   expect(screen.getByText(/Instructions/i)).toBeInTheDocument();
  // });
});