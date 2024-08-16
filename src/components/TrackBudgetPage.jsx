import React from 'react';
import '../styles/TrackBudget.css';

function BudgetPage() {
  return (
    <div className="budget-container">
      <div className="budget-box">
        <h3>Budget Tracking</h3>
        <div className="budget-summary">
          <div className="budget-total">
            <label htmlFor="totalBudget">Total Budget:</label>
            <input type="text" id="totalBudget" name="totalBudget" />
          </div>
          <div className="expenses-total">
            <label htmlFor="totalExpenses">Total Expenses:</label>
            <input type="text" id="totalExpenses" name="totalExpenses" />
          </div>
          <div className="remaining-budget">
            <label htmlFor="remainingBudget">Remaining budget:</label>
            <input type="text" id="remainingBudget" name="remainingBudget" />
          </div>
        </div>
        <div className="expenses">
          <h4>Categorized expenses for trip:</h4>
          <div className="expense-category">
            <label htmlFor="accommodation">Accommodation:</label>
            <input type="text" id="accommodation" name="accommodation" />
          </div>
          <div className="expense-category">
            <label htmlFor="food">Food:</label>
            <input type="text" id="food" name="food" />
          </div>
          <div className="expense-category">
            <label htmlFor="transport">Transport:</label>
            <input type="text" id="transport" name="transport" />
          </div>
          <div className="expense-category">
            <label htmlFor="activities">Activities:</label>
            <input type="text" id="activities" name="activities" />
          </div>
          <div className="expense-category">
            <label htmlFor="misc">Misc:</label>
            <input type="text" id="misc" name="misc" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BudgetPage;
