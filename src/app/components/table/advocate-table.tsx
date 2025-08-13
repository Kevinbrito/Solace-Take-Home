import React, { useState } from 'react';
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
              <tr key={index} className={index % 2 === 0 ? "bg-green-900 text-white" : "bg-white"}>
                <td key={`${advocate.id}-firstName-${index}`} className="border">{advocate.firstName}</td>
                <td key={`${advocate.id}-lastName-${index}`} className="border">{advocate.lastName}</td>
                <td key={`${advocate.id}-city-${index}`} className="border">{advocate.city}</td>
                <td key={`${advocate.id}-degree-${index}`} className="border">{advocate.degree}</td>
                <td key={`${advocate.id}-specialties-${index}`} className="border">
                  {advocate.specialties.map((s: string) => (
                    <div key={`${advocate.id}-${s}`}>{s}</div>
                  ))}
                </td>
                <td key={`${advocate.id}-yearsOfExperience-${index}`} className="border">{advocate.yearsOfExperience}</td>
                <td key={`${advocate.id}-phoneNumber-${index}`} className="border">{advocate.phoneNumber}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    )
  }