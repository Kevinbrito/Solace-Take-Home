"use client";

import { useEffect, useState } from "react";
import RadioButtons from "./components/radio-buttons/radio-buttons";
import ReusableButton from "./components/CTAs/reusable-button";
import { Advocate } from "./type";
import AdvocateTable from "./components/table/advocate-table";



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
    <main>
      <div className="max-width h-16 flex justify-center text-white items-center" style={{fontFamily: "Mollie Glaston, sans-serif", background: "#265B4E"}}>
      <span>Don't navigate your health alone. Our advocates are here to help!</span>

      </div>
      <div style={{ width: "50%", marginLeft: "auto", marginRight: "auto" }} className="p-5">
        <h5>Solace Advocates</h5>

        <div className="flex flex-row gap-2 items-center justify-between py-1.5">
          <div className="flex flex-row">
          <p> Search for our advocates: <span className="pl-1"></span></p>
           
          <input id="search-term" className="border" onChange={onChange} />
          
          </div>
          <div> <ReusableButton onClick={onClick} copy="Reset Search" /></div>
        </div>
        <span>{filteredAdvocates.length === 0  && searchTerm !== "" ? (<div className="text-red-500">No matches found, please edit your search and try again.</div>) : null}</span>
        <span className="flex gap-1">Filter by: <RadioButtons handleChange={handleRadioButtonChange} selectedValue={selectedValue} /></span>

        <AdvocateTable filteredAdvocates={filteredAdvocates.length > 0 ? filteredAdvocates : advocates}/>
        <br />
      </div>
    </main>
  );
}
