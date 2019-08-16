import React from 'react';
import Feature from '../Feature/Feature';
import './MainForm.css';

export default class MainForm extends React.Component {
  static defaultProps = {
    features: {},
  };
  render() {
    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        {Object.keys(this.props.features).map((feature, idx) => (
          <Feature
            key={idx}
            feature={feature}
            idx={idx}
            features={this.props.features}
            USCurrencyFormat={this.props.USCurrencyFormat}
            updateFeature={this.props.updateFeature}
            selected={this.props.selected}
          />
        ))}
      </form>
    );
  }
}
