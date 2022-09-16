import { render, screen } from '@testing-library/react';
import App from '../App';

test('Renderizando App', () => {
  render(<App />);
  const linkElement = screen.getByText('Creá tu tarjeta de bienvenida');
  expect(linkElement).toBeInTheDocument();
});
