import React from 'react';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"; 

function FormFieldWrapper({ register, ...otherProps }) {
  // Utilisez register pour enregistrer le champ de formulaire
  // dans react-hook-form
  const handleRegister = (ref) => {
    if (register) {
      register(ref);
    }
  };

  return (
    <DatePicker {...otherProps} ref={handleRegister} />
  );
}

export default FormFieldWrapper;