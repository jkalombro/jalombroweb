import React from 'react';
import '@testing-library/jest-dom';
import render from '../../utils/jest-context-helper';
import AboutMePage from './AboutMePage';

describe("AboutMePage Component", () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(<AboutMePage />);
    const element = getByTestId("aboutmepage");
    expect(element).toBeTruthy();
  });

  it('has link to my resume', () => {
    const { getByRole } = render(<AboutMePage />);
    const element = getByRole('link', { name: 'RESUME / CV' });
    expect(element).toHaveAttribute('href', 'https://www.docdroid.net/xwJhDh4/alombro-resume-pdf');
  });

  it('renders a spinning cube with 6 sides', async () => {
    const { findAllByTitle } = render(<AboutMePage />);
    const elements = await findAllByTitle('cubeface');
    expect(elements).toHaveLength(6);
  });
  
  it('renders all skills with FontAwesome icons', async () => {
    const { findAllByTitle } = render(<AboutMePage />);
    const elements = await findAllByTitle('skills');
    expect(elements).toHaveLength(17);
  });
});