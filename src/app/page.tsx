"use client";

import { useEffect, useState } from "react";
import { Advocate } from "./type";
import RadioButtons from "./components/radio-buttons/radio-buttons";

export default function Home() {
  const [advocates, setAdvocates] = useState<Advocate[]>([]);
  const [filteredAdvocates, setFilteredAdvocates] = useState<Advocate[]>([]);
  const [selectedValue, setSelectedValue] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSelected, setFilterSelected] = useState<boolean>(false)

  useEffect(() => {
    fetch(`/api/advocates`).then((response) => {
      response.json().then((jsonResponse) => {
        setAdvocates(jsonResponse.data)
      }).catch(error => {
        console.error("Error calling the filter endpoint: ", error)
      });
    });
  }, []);

  useEffect(() => {
    if (filterSelected) {
    fetch(`/api/filter?filter=${selectedValue}&searchTerm=${searchTerm}`).then((response) => {
      response.json().then((jsonResponse) => {
        setFilteredAdvocates(jsonResponse.data);
        }).catch(error => {
          console.error("Error calling the filter endpoint: ", error)
        });
      });
    }
  }, [selectedValue, searchTerm]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);


    const filteredAdvocates = advocates.filter((advocate: Advocate) => {
      return (
        advocate.firstName.toLowerCase().includes(searchTerm) ||
        advocate.lastName.toLowerCase().includes(searchTerm) ||
        advocate.city.toLowerCase().includes(searchTerm) ||
        advocate.degree.toLowerCase().includes(searchTerm) ||
        advocate.yearsOfExperience >= Number(searchTerm) ||
        advocate.phoneNumber.includes(searchTerm)
      );
    });

    setFilteredAdvocates(filteredAdvocates);
  };

  const onClick = () => {
    setFilteredAdvocates(advocates);
    setSelectedValue('');
    setFilterSelected(false)
    setSearchTerm('')
    document.getElementById('search-term').value = ''
  };

  const handleRadioButtonChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(e.target.value);
    setFilterSelected(true)
  }

  return (
    <main style={{ margin: "24px" }}>
      <h1>Solace Advocates</h1>
      <br />
      <br />
      <div>
        <p>Search</p>
        <p>
          Searching for: <span id="search-term"></span>
        </p>
        <input style={{ border: "1px solid black" }} onChange={onChange} />
        
        <button onClick={onClick}>Reset Search</button>
        <span className="flex gap-1">Filter by: <RadioButtons handleChange={handleRadioButtonChange} selectedValue={selectedValue} /></span>
      </div>
      <br />
      <br />
      <table>
        <thead>
          <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>City</th>
          <th>Degree</th>
          <th>Specialties</th>
          <th>Years of Experience</th>
          <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {advocates.map((advocate) => {
            return (
              <tr>
                <td>{advocate.firstName}</td>
                <td>{advocate.lastName}</td>
                <td>{advocate.city}</td>
                <td>{advocate.degree}</td>
                <td>
                  {advocate.specialties.map((s) => (
                    <div>{s}</div>
                  ))}
                </td>
                <td>{advocate.yearsOfExperience}</td>
                <td>{advocate.phoneNumber}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
}
