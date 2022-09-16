import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Card from '../components/Card';

test('Probando Loader', () => {
    const component = render(<Card/>);

    component.getByLabelText('cardContainer');
    component.getByText('Esperando tu tarjeta de bienvenida');
});

test('Probando alt loaderIcon', () => {
    const component = render(<Card/>);

    component.getByAltText('loaderIcon');
});