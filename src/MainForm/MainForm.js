import React from 'react';
import Feature from '../Feature/Feature';
import './MainForm.css';

export default function MainForm(props) {
  return (
    <form className="main__form">
      <h2>Customize your laptop</h2>
      {Object.keys(props.features).map((feature, idx) => (
        <Feature
          feature={feature}
          idx={idx}
          features={props.features}
          USCurrencyFormat={props.USCurrencyFormat}
          updateFeature={props.updateFeature}
          selected={props.selected}
        />
      ))}
    </form>
  );
}
