// About.test.jsx
import {render, screen} from '@testing-library/react';
import About from './About';

describe('About', () => {
  test('About renders correctly', () => {
    render(<About />);
    expect(screen.getByText("I'm the about page!"))
		.toBeInTheDocument();
  });
});