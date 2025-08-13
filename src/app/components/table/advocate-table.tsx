import React from 'react';
import { Advocate } from '@/app/type';

interface TableProps {
    filteredAdvocates: Advocate[],
}



export default function AdvocateTable({ filteredAdvocates }: TableProps) {

    const tableHeaders = ['First Name', 'Last Name', 'City', 'Degree', 'Specialties', 'Years of Experience', 'Phone Number']


    return (
        <table className="text-center">
        <thead>
          <tr>
          {tableHeaders.map((header, index) => (
            <th key={`table-header-${index}`} className='border hover:bg-yellow-100'>{header}</th>
          ))}
          </tr>
        </thead>
        <tbody>
          {filteredAdvocates.map((advocate: Advocate, index) => {
            return (
              <tr>
                <td >{advocate.firstName}</td>
                <td >{advocate.lastName}</td>
                <td >{advocate.city}</td>
                <td >{advocate.degree}</td>
                <td>
                  {advocate.specialties.map((s: string) => (
                    <div key={`${advocate.id}-${s}`}>{s}</div>
                  ))}
                </td>
                <td>{advocate.yearsOfExperience}</td>
                <td>{advocate.phoneNumber}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    )
  }