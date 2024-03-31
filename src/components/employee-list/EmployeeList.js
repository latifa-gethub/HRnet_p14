import React from 'react'
import {useSelector } from 'react-redux';
import {TableReact} from 'table-react-sw49go'; 
import {Link} from 'react-router-dom'

const EmployeeList = () => {
  const infoEmployee=useSelector(state=>state.employeeSlice.infoEmployee)
  console.log("infiEmployee au page tableau",infoEmployee)
  //console.log("le premier element de tab info",infoEmployee[0]["first-name"])
  let data=infoEmployee
   
  
  console.log("data infiEmployee",data)
  if(data.length===0){
    data= [
      {
          firstname: "MARWANE",
          lastname: "BELLALI",
          startDate: "02/10/2015",
          departement:"haute savoie",
          dateOFBirth:"01/04/2000",
          street:"zone",
          city: "AMBILLY",
          state: "France",
          zipCode: "74100"           
      }
  ]
  }else{
    data=[
      {
          firstname: infoEmployee[0]["first-name"],
          lastname:  infoEmployee[0]["last-name"],
          startDate:  infoEmployee[0]["start-date"],
          departement:infoEmployee[0].departement,
          dateOFBirth:infoEmployee[0]["date-of-birth"],
          street:"zone",
          city: infoEmployee[0].city,
          state: infoEmployee[0].street,
          zipCode: infoEmployee[0]["zip-code"]           
      }
  ]
  }
   
  const columns = [
    {name:'first Name',sort:'AZ'},
    {name:'Last name',sort:'AZ'}, 
    {name:'Start date',sort:'DATE'},
    {name:'Departement',sort:'AZ'},
    {name:'Date of birth',sort:'DATE'},
    {name:'Street',sort:'AZ'},
    {name:'City',sort:'AZ'},
    {name:'State',sort:'AZ'},
    {name:'Zip Code',sort:'NUM'}
]
// Function to retrieve number of entries selected - REQUIRED
const handleNbEntries=(nbEntries)=>{
  console.log('nbEntries:', nbEntries)
}

// Function to retrieve search generated object - REQUIRED
const handleResultSearch= (result)=>{
  console.log('result:', result)
}

// Function to retrieve the row selected 'to be remove or other' and his index (REQUIRED if 'allowRemoveRow' be 'true')
const handleRemoveRow= (objRemove, index)=>{
  console.log('index:', index)
  console.log('objRemove:', objRemove)
}
  return (
    <div className='contenair-table'> 
    <TableReact dataColumns={columns}
                        dataAllRows={data}
                        handleNbEntries={handleNbEntries}
                        handleResultSearch={handleResultSearch}
                        handleRemoveRow={handleRemoveRow}
                        allowRemoveRow={true}
                        customThead={{backgroundColor:'#1a2e91', color:'#00f2ff'}}
                        backGroundRows={'101, 201, 237'}
                        customContainer={{border:'1px solid black', borderRadius:'1rem', backgroundColor:'blue',padding:'1rem', color:"#fff"}}
                       />

                       <Link to={'/'} >Home Page</Link>
    </div>
    
  )
}

export default EmployeeList