import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { saveEmployee } from '../Redux/store';
import { useState } from 'react';   
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";  
import FormFieldWrapper from './FormFieldWrapper';
const CreateEployee = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
 /*  const [isOpen,setIsOpen]=useState(false)
  const [value, onChange] = useState(new Date()); */
  const [startDate, setStartDate] = useState(new Date());  
 
  function onsubmit(infoEmployee) {
    console.log('info employee', infoEmployee);
  //stocker infoEmployee dans le store  
    dispatch(saveEmployee(infoEmployee));
  }
  return (
    <div className="createEmployee">
      <main className="main">
        <h2>
          Create<span> Employee</span>{' '}
        </h2>
       
        <form id="create-employee" onSubmit={handleSubmit(onsubmit)}>
          <div>
            <label htmlFor="first-name">First Name</label>
            <input
              {...register('first-name')}
              name="first-name"
              type="text"
              id="first-name"
            />
          </div>
          <div>
            <label htmlFor="last-name">Last Name</label>
            <input
              {...register('last-name')}
              name="last-name"
              type="text"
              id="last-name"
            />
          </div>

          <div>
            <label htmlFor="start-date">Start Date</label>
            <DatePicker {...register('start-date')} name='start-date' selected={startDate} onChange={(date) => setStartDate(date)} /> 
          </div>

          <div>
            <label htmlFor="date-of-birth">Date of Birth</label>           
           <DatePicker {...register('date-of-birth')} name='date-of-birth' selected={startDate} onChange={(date) => setStartDate(date)} />  
          </div>
 
          <fieldset className="address">
            <legend>Address</legend>
            <div>
              <label htmlFor="street">Street</label>
              <input
                {...register('street')}
                name="street"
                id="street"
                type="text"
              />
            </div>
            <div>
              <label htmlFor="city">City</label>
              <input {...register('city')} name="city" id="city" type="text" />
            </div>
            <div>
              <label htmlFor="state">State</label>
              <select {...register('state')} name="state" id="state" />
            </div>
            <div>
              <label htmlFor="zip-code">Zip Code</label>
              <input
                {...register('zip-code')}
                name="zip-code"
                id="zip-code"
                type="number"
              />
            </div>
          </fieldset>

          <label htmlFor="department">Department</label>
          <select {...register('department')} name="department" id="department">
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </select>
          <button className="save-employee"  >Save</button>
        </form>
         
      </main>
    </div>
  );
};

export default CreateEployee;
