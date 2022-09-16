import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Button from '../components/Button';

test('Probando que exista el botón', () => {
    const component = render(<Button/>);

    component.getByText('Descargar tarjeta');
});