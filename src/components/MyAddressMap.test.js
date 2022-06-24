import React from 'react';
import '@testing-library/jest-dom';
import render from '../utils/jest-context-helper';
import MyAddressMap from './MyAddressMap';

describe("MyAddressMap Component", () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(<MyAddressMap />);
    const element = getByTestId("addressMap");
    expect(element).toBeTruthy();
  });

  it('matches with snapshot', () => {
    const { getByTestId } = render(<MyAddressMap />);
    const element = getByTestId("addressMap");
    expect(element).toMatchSnapshot();
  });
  
  it('has address info test', () => {
    const { getByText } = render(<MyAddressMap />);
    const element = getByText(/Villa Azalea, Cotcot/i);
    expect(element).toBeInTheDocument();
  });

  it('has rendered the map', () => {
    const { getByTestId } = render(<MyAddressMap />);
    const element = getByTestId(/map/i);
    expect(element).toBeInTheDocument();
  });
});