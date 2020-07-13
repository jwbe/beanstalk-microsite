import React, { Component } from 'react';
import * as R from 'ramda';
import Select from 'react-select';
import Data from '../data.js';

class Step3 extends Component {
  render() {
    const { providers } = Data;
    const SPLIT_PROVIDERS_AT = 8;

    const isAllowedInUi = R.propEq('showProviderSelector', true);
    const isBeforeSplit = (id) => id < SPLIT_PROVIDERS_AT;
    const isAfterSplit = (id) => id > SPLIT_PROVIDERS_AT;

    const providerTiles = () => {
      return R.map(provider => <div key={provider.id} className={provider.id === this.props.providerSelection ? `active` : null } onClick={() => {this.props.updateProviderSelection(provider.id)}}>{provider.name}</div>, R.filter(provider => isBeforeSplit(provider.id))(providers))
    }

    const providerSelect = () => {
      return R.map(provider => <option key={provider.id} value={provider.id}>{provider.name}</option>, R.filter(R.propEq('showProviderSelector', true))(providers))
    }

    const providerSelectOptions = () => {
      return R.map(provider => ({value: provider.id, label: provider.name}), R.filter(R.propEq('showProviderSelector', true))(providers))
    }

    const { firstSelectionId } = this.props.providerSelection;

    if (this.props.currentStep !== 3) {
      return null
    }
    return(
      <>
        <p>
          Who is your child's CTF with?
        </p>

        <div>
          {providerTiles()}
        </div>

        <select onChange={(event) => {
          console.log(event);
          return this.props.updateProviderSelection(event.target.value)}
        }>
          {providerSelect()}
        </select>

        {this.props.providerSelection}

        <Select
          value={firstSelectionId}
          onChange={(option, event) => {
            console.log({option, event});
            let value='';
            if(event.action!=='clear')
              value = option.value;
            return this.props.updateProviderSelection(value)
          }}
          options={providerSelectOptions()} 
          />

        <button onClick={() => {this.props.goToStep(4)}}>
          Next
        </button>
      </>
    )
  }
}

export default Step3; 