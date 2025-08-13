import React from 'react';
import { render, screen } from '@testing-library/react';
import RadioButtons from '../radio-buttons/radio-buttons';
import { describe } from 'node:test';
import '@testing-library/jest-dom';

describe('RadioButtons component', () => {
    it('Renders the radio buttons with appropriate filter names', () => {
        const emptyOnClickMethod = () => {
            return
        }
        render(<RadioButtons onClick={emptyOnClickMethod()} copy="Test copy"/>)
        const firstNameRadioButton = screen.getByRole('radio', {name: 'firstNameRadioButton'})
        const lastNameRadioButton =  screen.getByRole('radio', {name: 'lastNameRadioButton'})
        const cityRadioButton =  screen.getByRole('radio', {name: 'cityRadioButton'})
        const degreeRadioButton =   screen.getByRole('radio', {name: 'degreeRadioButton'})
        const specialtiesRadioButton =   screen.getByRole('radio', {name: 'specialtiesRadioButton'})
        const experienceRadioButton =   screen.getByRole('radio', {name: 'experienceRadioButton'})
        const phoneNumberRadioButton =   screen.getByRole('radio', {name: 'phoneRadioButton'})
        expect(firstNameRadioButton ).toBeInTheDocument()
        expect(lastNameRadioButton ).toBeInTheDocument()
        expect(cityRadioButton).toBeInTheDocument()
        expect(degreeRadioButton).toBeInTheDocument()
        expect(specialtiesRadioButton).toBeInTheDocument()
        expect(experienceRadioButton).toBeInTheDocument()
        expect(phoneNumberRadioButton).toBeInTheDocument()

    })
})

