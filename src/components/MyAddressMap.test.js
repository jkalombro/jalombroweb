import React from 'react';
import '@testing-library/jest-dom';
import render from '../utils/jest-context-helper';
import MyAddressMap from './MyAddressMap';

describe("MyAddressMap Component", () => {
  it('renders without crashing', async () => {
    const { getByTestId } = render(<MyAddressMap />);
    const element = getByTestId("addressMap");
    expect(element).toBeTruthy();
  });

  it('matches with snapshot', async () => {
    const { getByTestId } = render(<MyAddressMap />);
    const element = getByTestId("addressMap");
    expect(element).toMatchSnapshot();
  });
  
  it('has address info test', async () => {
    const { getByTestId } = render(<MyAddressMap />);
    const element = getByTestId(/map/i);
    expect(element).toBeInTheDocument();
  });
});