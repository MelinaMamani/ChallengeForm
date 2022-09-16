import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Form from '../components/Form';

test('Probando placeholders en formulario', () => {
    const component = render(<Form/>);

    component.getByPlaceholderText('Nombre');
    component.getByPlaceholderText('Apellido');
    component.getByPlaceholderText('Email');
    component.getByPlaceholderText('Edad');
});

test('Probando alt uploadImageIcon', () => {
    const component = render(<Form/>);

    component.getByAltText('uploadImageIcon');
});