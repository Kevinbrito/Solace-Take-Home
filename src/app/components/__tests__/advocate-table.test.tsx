import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe } from 'node:test';
import '@testing-library/jest-dom';
import { advocateData } from '@/db/seed/advocates';
import AdvocateTable from '../Table/advocate-table';

describe('AdvocateTable component', () => {
    it('Renders the table based on advocate data', () => {
        //checkout seeds file to see what the test data looks like
        const testData = advocateData
        render(<AdvocateTable filteredAdvocates={testData}/>)
        expect(screen.getByText('John')).toBeInTheDocument()
        expect(screen.getByText("Doe")).toBeInTheDocument()
        expect(screen.getByText("New York")).toBeInTheDocument()
    })
})

