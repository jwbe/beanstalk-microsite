import React, { Component } from 'react';
import * as R from 'ramda';
import Select from 'react-select';
import Data from '../data.js';

import Question from '../shared-components/question/question';
import SmallButton from '../shared-components/small-button/small-button';

import ProviderTilesTheme from './provider-tiles/provider-tiles.module.scss';
import ProviderSelectTheme from './provider-select/provider-select.module.scss';

import StepTheme from './step-3.module.scss';

import ScottishFriendlyLogo from '../images/logos/scottish-friendly-logo.png'
import RoyalBankOfScotlandLogo from '../images/logos/royal-bank-of-scotland-logo.png'
import NatWestLogo from '../images/logos/natwest-logo.png'
import LegalAndGeneralLogo from '../images/logos/legal-and-general-logo.png'
import HsbcLogo from '../images/logos/hsbc-logo.png'
import ForestersFinancialLogo from '../images/logos/foresters-financial-logo.png'
import FandCLogo from '../images/logos/FAndC-logo.png'
import BarclaysLogo from '../images/logos/barclays-logo.png'

const _removeSpacesFromString = (string) => {
  return string.replace(/\s/g, '');
}

class Step3 extends Component {
  render() {
    if (this.props.currentStep !== 3) {
      return null
    }
    const { providers } = Data;
    const SPLIT_PROVIDERS_AT = 9;

    const isAllowedInUi = R.propEq('showProviderSelector', true);
    const isBeforeSplit = (id) => id < SPLIT_PROVIDERS_AT;
    const isAfterSplit = (id) => id >= SPLIT_PROVIDERS_AT;

    const providerTiles = () => {
      return R.map(provider => <div key={provider.id} className={`${ProviderTilesTheme.ProviderTiles_Tile} ${provider.id === this.props.providerSelection ? `${ProviderTilesTheme.ProviderTiles_Tile___Active}` : null}` } onClick={() => {this.props.updateProviderSelection(provider.id)}}><div className={ProviderTilesTheme.ProviderTiles_Tile_Inner}><img className={ProviderTilesTheme.ProviderTiles_Tile_Logo} src={`${_removeSpacesFromString(provider.name)}Logo`}/></div></div>, R.compose(R.filter(isAllowedInUi), R.filter(provider => isBeforeSplit(provider.id)))(providers))
    }

    const providerSelect = () => {
      return R.map(provider => <option key={provider.id} value={provider.id}>{provider.name}</option>, R.compose(R.filter(isAllowedInUi), R.filter(provider => isAfterSplit(provider.id)))(providers))
    }

    const providerSelectOptions = () => {
      return R.map(provider => ({value: provider.id, label: provider.name}), R.compose(R.filter(isAllowedInUi), R.filter(provider => isAfterSplit(provider.id)))(providers))
    }

    const { firstSelectionId } = this.props.providerSelection;

    const selectStyles = {
      control: (styles, { isDisabled, isFocused, isSelected }) => ({
        ...styles,
        paddingRight: '0.875rem',
        paddingLeft: '1rem',
        height: '3rem',
        border: isDisabled
          ? 'none'
          : isSelected
          ? '#ff0000'
          : '#00ff00'
      }),
      indicatorSeparator: () => null,
      dropdownIndicator: (styles) => ({
        ...styles,
        padding: '0'
      }),
      placeholder: (styles) => ({
        ...styles,
        color: '#8e8e95',
        fontSize: '0.875rem',
        lineHeight: '1.25rem'
      }),
      option: (styles, { data, isDisabled, isFocused, isSelected }) => ({
        ...styles,
        color: isDisabled
          ? '#32b67a'
          : isSelected
          ? '#00ff00'
          : '#8e8e95'
      }),
      input: (styles) => ({
        ...styles,
        color: '#8e8e95'
      }),
      valueContainer: (styles) => ({
        ...styles,
        padding: '0'
      })
    }

    return (
      <>
        <Question number={'2'}>
          Who is your child's CTF / JISA with?
        </Question>

        <div className={ProviderTilesTheme.ProviderTiles}>
          <div className={ProviderTilesTheme.ProviderTiles_Wrapper}>
            {providerTiles()}
          </div>
        </div>

        <div className={StepTheme.BottomContainer}>
          <h3 className={ProviderSelectTheme.ProviderSelect_Heading}>
            More Providers
          </h3>

          <Select
            className={ProviderSelectTheme.ProviderSelect}
            styles={selectStyles}
            value={firstSelectionId}
            onChange={(option, event) => {
              let value='';
              if(event.action!=='clear')
                value = option.value;
              return this.props.updateProviderSelection(value)
            }}
            options={providerSelectOptions()}
            />

          <SmallButton 
            align={'centred'}
            handler={() => {this.props.goToStep(4)}}>
            Next
          </SmallButton>
        </div>
      </>
    )
  }
}

export default Step3; 