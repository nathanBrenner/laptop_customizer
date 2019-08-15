import React from 'react';
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import Option from '../Option/Options';
import './Feature.css';
export default function Feature({
  feature,
  idx,
  features,
  USCurrencyFormat,
  updateFeature,
  selected,
}) {
  const featureHash = feature + '-' + idx;
  return (
    <fieldset className="feature" key={featureHash}>
      <legend className="feature__name">
        <h3>{feature}</h3>
      </legend>
      {features[feature].map(item => (
        <Option
          item={item}
          feature={feature}
          selected={selected}
          USCurrencyFormat={USCurrencyFormat}
          updateFeature={updateFeature}
        />
      ))}
    </fieldset>
  );
}
