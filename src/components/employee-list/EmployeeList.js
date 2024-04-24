import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { TableReact } from 'table-react-sw49go';
import { Modal } from 'simple-react-modal-lw';
import { Link } from 'react-router-dom';
import initialData from '../../initialDataTable';

const EmployeeList = () => {
  const infoEmployee = useSelector(state => state.employeeSlice.infoEmployee);
   
  const [isOpenModal, setIsOpenModal] = useState(false);
  
  const [data, setData] = useState(infoEmployee);
  console.log('data reçu', data);
  if (data.length === 0) {
    setData(initialData);
  }
  const entries = ['4','2','6','10','50','100']
  const columns = [
    { name: 'first Name', sort: 'AZ' },
    { name: 'Last name', sort: 'AZ' },
    { name: 'Start date', sort: 'DATE' },
    { name: 'Departement', sort: 'AZ' },
    { name: 'Date of birth', sort: 'DATE' },
    { name: 'Street', sort: 'AZ' },
    { name: 'City', sort: 'AZ' },
    { name: 'State', sort: 'AZ' },
    { name: 'Zip Code', sort: 'NUM' }
  ];
  // Function to retrieve number of entries selected - REQUIRED
  const handleNbEntries = nbEntries => {
    console.log('nbEntries:', nbEntries);
  };

  // Function to retrieve search generated object - REQUIRED
  const handleResultSearch = result => {
    console.log('result:', result.length);

    if (result.length === 0) {
      setIsOpenModal(true);
    }
  };

  // Function to retrieve the row selected 'to be remove or other' and his index (REQUIRED if 'allowRemoveRow' be 'true')
  const handleRemoveRow = (objRemove, index) => {
    console.log('index:', index);
    console.log('objRemove:', objRemove);    
   const newData = data.filter((element, i) => i !== index)    
    setData(newData)
  };
  return (
    <div className="contenair-table">
      <h1>
        Current<span> Employees</span>
      </h1>
      <TableReact
        dataColumns={columns}
        dataAllRows={data}
        handleNbEntries={handleNbEntries}
        dataEntries ={entries}
        handleResultSearch={handleResultSearch}
        /* handleRemoveRow={handleRemoveRow}
        allowRemoveRow={true} */
        customThead={{ backgroundColor: '#6e8611', color: '#000' }}
        backGroundRows={'#f0f2e8'}
        customContainer={{
          border: '1px solid black',
          borderRadius: '1rem',
          backgroundColor: '#6e861169',
          padding: '1rem',
          color: '#000'
        }}
        parentContainerTable={{ width: '90%', margin: '4rem' }}
      />
      <Modal
        isOpen={isOpenModal}
        onClose={function() {
          setIsOpenModal(false);
        }}
        contentModal={'Employee does not exist!'}
        styleTitleModal={{ color: '#000000' }}
        headerModal={{backgroundColor:'#607510'}}
        titlHeaderModal={'HRnet'}
        styleModal={{
          backgroundColor: '#f3f4ee',
          height: '200px',
          borderRadius: '5px',
          boxShadow: '5px 5px 5px #9a9595'
        }}
      />
      <Link to={'/'}>Home Page</Link>
    </div>
  );
};

export default EmployeeList;
