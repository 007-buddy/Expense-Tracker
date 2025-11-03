// import React, { useState } from 'react'
// import Input from '../../inputs/input';
// import EmojipickerPopup from '../../EmojipickerPopup';

// const AddIncomeForm = ({onAddIncome}) =>{ 
//     const [income,setIncome]=useState({
//     source:"",
//     amount:"",
//     date:"",
//     icon:"",
// });
    
//  const handleChange = (key,value)=>setIncome({...income,[key]:value})
// return (
// <div>

//  <EmojipickerPopup
//  icon={income.icon}
//  onSelect={(selectedIcon)=>handleChange("icon",selectedIcon)}
//  />

//     <Input


//     value={income.source}
//     onChange={({target})=>handleChange("source",target.value)}
//     label="Income Source"
//     placeholder="FreeLance,Salary,etc"
//     type="text"
//     />
//     <Input
//     value={income.amount}
//     onChange={({target})=>handleChange("amount",target.value)}
//     label="Amount"
//     placeholder=""
//     type="number"
//     />
//     <Input
//   value={income.date}
//   onChange={({target})=>handleChange("date",target.value)}
//   label="Date"
//   placeholder=""
//   type="date"
//   />

//   <div className="flex justify-end mt-6 ">
//     <button
//     type="button"
//     className="add-btn add-btn-fill"
//     onClick={()=>AddIncomeForm(income)}
//     >
//         Add Income
//         </button>
//   </div>
// </div>
// ) 
  
// }

// export default AddIncomeForm;

import React, { useState } from 'react';
import Input from '../../inputs/input';
import EmojipickerPopup from '../../EmojipickerPopup';

const AddIncomeForm = ({ onAddIncome }) => {
  const [income, setIncome] = useState({
    source: "",
    amount: "",
    date: "",
    icon: "",
  });

  const handleChange = (key, value) => setIncome({ ...income, [key]: value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onAddIncome) onAddIncome(income);
    setIncome({ source: "", amount: "", date: "", icon: "" }); // Optional: reset form
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <EmojipickerPopup
          icon={income.icon}
          onSelect={(selectedIcon) => handleChange("icon", selectedIcon)}
        />
        <span>{income.icon ? 'Change Icon' : 'Pick Icon'}</span>
      </div>
      <Input
        value={income.source}
        onChange={(e) => handleChange("source", e.target.value)}
        label="Income Source"
        placeholder="FreeLance,Salary,etc"
        type="text"
      />
      <Input
        value={income.amount}
        onChange={(e) => handleChange("amount", e.target.value)}
        label="Amount"
        placeholder=""
        type="number"
      />
      <Input
        value={income.date}
        onChange={(e) => handleChange("date", e.target.value)}
        label="Date"
        placeholder=""
        type="date"
      />
      <div className="flex justify-end mt-6">
        <button
          type="submit"
          className="add-btn add-btn-fill"
        >
          Add Income
        </button>
      </div>
    </form>
  );
};

export default AddIncomeForm;
