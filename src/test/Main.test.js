import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Main from '../components/Main';

test('Renderizando Main sin tarjeta', () => {
    const component = render(<Main/>);

    component.getByText('Crear');
    component.getByLabelText('formSection');
    component.getByLabelText('cardContainer');
});