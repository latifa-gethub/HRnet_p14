import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { saveEmployee } from '../Redux/store';
import { useState } from 'react';
import { Modal } from 'simple-react-modal-lw';
import { DatePickerReact } from 'datepicker-react-sw49go';
import DropdownMenu from './DropDownMenu';
import states from '../datas/dataStates';
import { departments } from '../datas/departments';
 
const CreateEployee = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState();
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  //state for Modal 
  const [isOpen, setIsOpen] = useState(false);
  //state for State option
  const [selectedOption, setSelectedOption] = useState('Sales');
  //state for departement
  const [selectedOptionState, setSelectedOptionState] = useState('AL');  
  
 
  const handleSelect = option => {
    setSelectedOption(option);
  };
  const handleSelectState = option => {
    setSelectedOptionState(option);
  };

  function handleSeletedDate(data) {
    setStartDate(data);
  }
  function handleDataOfbirth(data) {
    setDateOfBirth(data);
  }
  /**
     * Function to save employee in store
     * @param {object} data 
     */
  function handleDataFurm(data) {    
   
    const objetInfoEmployee = {
      firstname: data['first-name'],
      lastname: data['last-name'],
      startDate: startDate,
      department: selectedOption,
      dateOFBirth: dateOfBirth,
      street: data.street,
      city: data.city,
      state: selectedOptionState,
      zipCode: data['zip-code']
    };
 

    //save Employee in store
    dispatch(saveEmployee(objetInfoEmployee));
    reset();
    setIsOpen(true);
  }
   
  return (
    <div className="createEmployee">
      <main className="main-wrapper">
        <h1>
          Create<span> Employee</span>
        </h1>
        <form id="form-create-employee" onSubmit={handleSubmit(handleDataFurm)}>
          <div className="input-wrapper">
            <label htmlFor="first-name">First Name</label>
            <input
              {...register('first-name')}
              name="first-name"
              type="text"
              id="first-name"
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="last-name">Last Name</label>
            <input
              {...register('last-name')}
              name="last-name"
              type="text"
              id="last-name"
              required
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="dateStart">Start date</label>
            <DatePickerReact
              onSelect={handleSeletedDate}
              styleLabel={{ fontSize: '1.5rem' }}
              styleInput={{ width: '12.5rem' }}
              iconInputColor={'#607510'}
              positionDPR={'top'}
              bckColor={'#607510'}
              dateColor={'#6e8611'}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="date-of-birth">Date of Birth</label>
            <DatePickerReact
              onSelect={handleDataOfbirth}
              language={'fr'}
              idInput="dateStart"
              styleLabel={{ fontSize: '1.5rem' }}
              styleInput={{ width: '12.5rem' }}
              iconInputColor={'#607510'}
              positionDPR={'top'}
              bckColor={'#607510'}
              dateColor={'#6e8611'}
            />
          </div>

          <fieldset className="address">
            <legend>Address</legend>
            <div className="input-wrapper">
              <label htmlFor="street">Street</label>
              <input
                {...register('street')}
                name="street"
                id="street"
                type="text"
                required
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="city">City</label>
              <input
                required
                {...register('city')}
                name="city"
                id="city"
                type="text"
              />
            </div>
            <div className="input-wrapper">
              <label className="state">State</label>
              <DropdownMenu options={states} onSelect={handleSelectState} />               
            </div>
            <div className="input-wrapper">
              <label htmlFor="zip-code">Zip Code</label>
              <input
                required
                {...register('zip-code')}
                name="zip-code"
                id="zip-code"
                type="number"
              />
            </div>
          </fieldset>
          <div className="dropDownMenu-wrapper">
            <label className="department">Department</label>
            <DropdownMenu options={departments} onSelect={handleSelect} />
          </div>

          <button type="submit" className="btn-save-employee">
            Save
          </button>
          <Modal
            isOpen={isOpen}
            onClose={function() {
              setIsOpen(false);
            }}
            contentModal={'Employee successfully created!'}
            styleTitleModal={{ color: '#000000' }}
            headerModal={{ backgroundColor: '#607510' }}
            titlHeaderModal={'HRnet'}
            styleModal={{
              backgroundColor: '#eef1e0',
              height: '200px',
              borderRadius: '5px',
              boxShadow: '5px 5px 5px #9a9595'
            }}
          />
        </form>
      </main>
    </div>
  );
};

export default CreateEployee;
