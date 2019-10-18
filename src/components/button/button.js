import React from 'react';
import classnames from 'classnames';
import { Link } from 'gatsby';
import styles from './button.module.scss';

export const MOBILE_BACKGROUNDS = {
  TRANSPARENT: 'mobile___transparentBackground',
  PRIMARY: 'mobile___PrimaryBackground',
  SECONDARY: 'mobile___SecondaryBackground',
  WHITE: 'mobile___WhiteBackground'
};

export const TABLET_BACKGROUNDS = {
  TRANSPARENT: 'tablet___transparentBackground',
  PRIMARY: 'tablet___PrimaryBackground',
  SECONDARY: 'tablet___SecondaryBackground',
  WHITE: 'tablet___WhiteBackground'
};

export const DESKTOP_BACKGROUNDS = {
  TRANSPARENT: 'desktop___transparentBackground',
  PRIMARY: 'desktop___PrimaryBackground',
  SECONDARY: 'desktop___SecondaryBackground',
  WHITE: 'desktop___WhiteBackground'
};

export const MOBILE_BORDERS = {
  PRIMARY: 'mobile___PrimaryBorder',
  SECONDARY: 'mobile___SecondaryBorder',
  WHITE: 'mobile___WhiteBorder'
};

export const TABLET_BORDERS = {
  PRIMARY: 'tablet___PrimaryBorder',
  SECONDARY: 'tablet___SecondaryBorder',
  WHITE: 'tablet___WhiteBorder'
};

export const DESKTOP_BORDERS = {
  PRIMARY: 'desktop___PrimaryBorder',
  SECONDARY: 'desktop___SecondaryBorder',
  WHITE: 'desktop___WhiteBorder'
};

export const MOBILE_COLOURS = {
  PRIMARY: 'mobile___PrimaryColour',
  SECONDARY: 'mobile___SecondaryColour',
  WHITE: 'mobile___WhiteColour'
};

export const TABLET_COLOURS = {
  PRIMARY: 'tablet___PrimaryColour',
  SECONDARY: 'tablet___SecondaryColour',
  WHITE: 'tablet___WhiteColour'
};

export const DESKTOP_COLOURS = {
  PRIMARY: 'desktop___PrimaryColour',
  SECONDARY: 'desktop___SecondaryColour',
  WHITE: 'desktop___WhiteColour'
};

export const MOBILE_SIZES = {
  SMALL: 'mobile___Small',
  MEDIUM: 'mobile___Medium',
  LARGE: 'mobile___Large'
};

export const TABLET_SIZES = {
  SMALL: 'tablet___Small',
  MEDIUM: 'tablet___Medium',
  LARGE: 'tablet___Large'
};

export const DESKTOP_SIZES = {
  SMALL: 'desktop___Small',
  MEDIUM: 'desktop___Medium',
  LARGE: 'desktop___Large'
};

export const Button = ({
  submit,
  clickHandle,
  children,
  className,
  link,
  mobileBackground,
  mobileBorder,
  mobileColour,
  mobileSize,
  tabletBackground,
  tabletBorder,
  tabletColour,
  tabletSize,
  desktopBackground,
  desktopBorder,
  desktopColour,
  desktopSize
}) => {

  const buttonClasses = classnames(
    styles.Button,
    styles[ mobileBackground ],
    styles[ mobileBorder ],
    styles[ mobileColour ],
    styles[ mobileSize || MOBILE_SIZES.SMALL ],
    styles[ tabletBackground ],
    styles[ tabletBorder ],
    styles[ tabletColour ],
    styles[ tabletSize ],
    styles[ desktopBackground ],
    styles[ desktopBorder ],
    styles[ desktopColour ],
    styles[ desktopSize || DESKTOP_SIZES.MEDIUM ]
  );
  
  return (
    clickHandle 
    ?
    <div className={`${className} ${buttonClasses}`} onClick={clickHandle}>
      {children}
    </div>
    :
    submit
    ?
    <button className={`${className} ${buttonClasses}`}>
      {children}
    </button>
    :
    <Link className={`${className} ${buttonClasses}`} to={link}>
      {children}
    </Link>
  );
};