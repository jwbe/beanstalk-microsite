import React, { Component } from 'react';
import * as R from 'ramda';
import Select from 'react-select';
import Data from '../data.js';

import Question from '../shared-components/question/question';
import SmallButton from '../shared-components/small-button/small-button';

import ProviderTilesTheme from './provider-tiles/provider-tiles.module.scss';
import ProviderSelectTheme from './provider-select/provider-select.module.scss';

class Step3 extends Component {
  render() {
    const { providers } = Data;
    const SPLIT_PROVIDERS_AT = 9;

    const isAllowedInUi = R.propEq('showProviderSelector', true);
    const isBeforeSplit = (id) => id < SPLIT_PROVIDERS_AT;
    const isAfterSplit = (id) => id >= SPLIT_PROVIDERS_AT;

    const providerTiles = () => {
      return R.map(provider => <div key={provider.id} className={`${ProviderTilesTheme.ProviderTiles_Tile} ${provider.id === this.props.providerSelection ? `active` : null}` } onClick={() => {this.props.updateProviderSelection(provider.id)}}>{provider.name}</div>, R.compose(R.filter(isAllowedInUi), R.filter(provider => isBeforeSplit(provider.id)))(providers))
    }

    const providerSelect = () => {
      return R.map(provider => <option key={provider.id} value={provider.id}>{provider.name}</option>, R.compose(R.filter(isAllowedInUi), R.filter(provider => isAfterSplit(provider.id)))(providers))
    }

    const providerSelectOptions = () => {
      return R.map(provider => ({value: provider.id, label: provider.name}), R.compose(R.filter(isAllowedInUi), R.filter(provider => isAfterSplit(provider.id)))(providers))
    }

    const { firstSelectionId } = this.props.providerSelection;

    if (this.props.currentStep !== 3) {
      return null
    }
    return(
      <>
        <Question number={'2'}>
          Who is your child's CTF with?
        </Question>

        <div className={ProviderTilesTheme.ProviderTiles}>
          {providerTiles()}
        </div>

        <h3 className={ProviderSelectTheme.ProviderSelect_Heading}>
          More Providers
        </h3>

        <Select
          value={firstSelectionId}
          onChange={(option, event) => {
            let value='';
            if(event.action!=='clear')
              value = option.value;
            return this.props.updateProviderSelection(value)
          }}
          options={providerSelectOptions()} 
          />

        <SmallButton handler={() => {this.props.goToStep(4)}}>
          Next
        </SmallButton>
      </>
    )
  }
}

export default Step3; 