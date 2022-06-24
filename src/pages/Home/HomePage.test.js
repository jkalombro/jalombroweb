import React from 'react';
import '@testing-library/jest-dom';
import render from '../../utils/jest-context-helper';
import HomePage from './HomePage';

describe("HomePage Component", () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(<HomePage />);
    const element = getByTestId("homepage");
    expect(element).toBeTruthy();
  });

  it('matches with snapshot', () => {
    const { getByTestId } = render(<HomePage />);
    const element = getByTestId("homepage");
    expect(element).toMatchSnapshot();
  });

  it('has all necessary texts', () => {
    const { getByText } = render(<HomePage />);
    const el1 = getByText(/Hi, I'm Jerich!/);
    const el2 = getByText(/I'm a Software Developer that specializes in Front-end./);
    const el3 = getByText(/I love using ReactJS./);
    expect(el1).toBeInTheDocument();
    expect(el2).toBeInTheDocument();
    expect(el3).toBeInTheDocument();
  });
  
  it('has all social media icons', async () => {
    const { findAllByTitle } = render(<HomePage />);
    const elements = await findAllByTitle('smedia');
    expect(elements).toHaveLength(3);
  });
  
  it('has my cartoon img', () => {
    const { findByAltText } = render(<HomePage />);
    const element = findByAltText(/my-cartoon-self/i);
    expect(element).toBeTruthy();
  });
});