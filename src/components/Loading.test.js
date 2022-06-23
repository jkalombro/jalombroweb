import React from 'react';
import '@testing-library/jest-dom';
import render from '../utils/jest-context-helper';
import Loading from './Loading';

describe("Loading Component", () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(<Loading />);
    const element = getByTestId("loadingComponent");
    expect(element).toBeTruthy();
  });

  it('matches with snapshot', () => {
    const { getByTestId } = render(<Loading />);
    const element = getByTestId("loadingComponent");
    expect(element).toMatchSnapshot();
  });
});