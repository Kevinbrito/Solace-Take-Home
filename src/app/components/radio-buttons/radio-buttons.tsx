import React from 'react';

interface RadioButtonsProps {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    selectedValue: string;
}



export default function RadioButtons({ handleChange, selectedValue }: RadioButtonsProps) {

    return (
     <div className="flex flex-row gap-2">
      <input
        type="radio"
        name="firstName"
        value="firstName"
        checked={selectedValue === 'firstName'}
        onChange={handleChange}
        aria-label='firstNameRadioButton'
      />
      <label htmlFor="firstName">First Name</label>

      <input
        type="radio"
        name="lastName"
        value="lastName"
        checked={selectedValue === 'lastName'}
        onChange={handleChange}
        aria-label='lastNameRadioButton'
      />
      <label htmlFor="lastName">Last Name</label>

      <input
        type="radio"
        name="city"
        value="city"
        checked={selectedValue === 'city'}
        onChange={handleChange}
        aria-label='cityRadioButton'
      />
      <label htmlFor="city">City</label>

      <input
        type="radio"
        name="degree"
        value="degree"
        checked={selectedValue === 'degree'}
        onChange={handleChange}
        aria-label='degreeRadioButton'
      />
      <label htmlFor="degree">Degree</label>

      <input
        type="radio"
        name="specialties"
        value="specialties"
        checked={selectedValue === 'specialties'}
        onChange={handleChange}
        aria-label='specialtiesRadioButton'
      />
      <label htmlFor="specialties">Specialties</label>

      <input
        type="radio"
        name="yearsOfExperience"
        value="yearsOfExperience"
        checked={selectedValue === 'yearsOfExperience'}
        onChange={handleChange}
        aria-label='experienceRadioButton'
      />
      <label htmlFor="yearsOfExperience">Years of Experience</label>

      <input
        type="radio"
        name="phoneNumber"
        value="phoneNumber"
        checked={selectedValue === 'phoneNumber'}
        onChange={handleChange}
        aria-label='phoneRadioButton'
      />
      <label htmlFor="phoneNumber">Phone Number</label>
    </div>
    )
  }