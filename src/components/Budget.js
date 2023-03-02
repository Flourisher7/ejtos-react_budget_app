import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, totalExpenses, currency } = useContext(AppContext);
    const [updateBudget, setupBudget] = useState(budget);

    const budgetChange = (event) => {
        const newBudget = parseInt(event.target.value);
        if (newBudget > 20000) {
            alert('Budget cannot exceed the amount of' + currency+'20,000')
            setupBudget(budget);
            return;
        } else if (newBudget < totalExpenses) {
            alert('Budget cannot be less than' + currency+totalExpenses);
            setupBudget(budget);
            return;
        } else {
            setupBudget(newBudget)
        }
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}<input required='required' 
                                        id="number" 
                                        step={10}
                                        type="number" 
                                        value={updateBudget}
                                        onChange={budgetChange}></input></span>
        </div>
    );
};
export default Budget;
