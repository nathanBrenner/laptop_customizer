import React from 'react';
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';
import './Option.css';

export default function Option({
  item,
  feature,
  selected,
  USCurrencyFormat,
  updateFeature,
}) {
  const itemHash = slugify(JSON.stringify(item));
  return (
    <div key={itemHash} className="feature__item">
      <input
        type="radio"
        id={itemHash}
        className="feature__option"
        name={slugify(feature)}
        checked={item.name === selected[feature].name}
        onChange={e => updateFeature(feature, item)}
      />
      <label htmlFor={itemHash} className="feature__label">
        {item.name} ({USCurrencyFormat.format(item.cost)})
      </label>
    </div>
  );
}
