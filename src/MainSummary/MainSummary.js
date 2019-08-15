import React from 'react';
import Summary from '../Summary/Summary';
import './MainSummary.css';
export default function MainSummary({ selected, USCurrencyFormat }) {
  const total = Object.keys(selected).reduce(
    (acc, curr) => acc + selected[curr].cost,
    0
  );
  return (
    <section className="main__summary">
      <h2>Your cart</h2>
      {Object.keys(selected).map((feature, idx) => (
        <Summary
          selected={selected}
          feature={feature}
          idx={idx}
          USCurrencyFormat={USCurrencyFormat}
        />
      ))}
      <div className="summary__total">
        <div className="summary__total__label">Total</div>
        <div className="summary__total__value">
          {USCurrencyFormat.format(total)}
        </div>
      </div>
    </section>
  );
}
