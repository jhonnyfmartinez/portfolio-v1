import { render } from '@testing-library/react';
import App from '@/app/page';
import '@testing-library/jest-dom';

describe('App', () => {
  it('App should render', () => {
    render(<App />);
    // Mocking test until more components are created
    expect(true).toBe(true);
  });
});
