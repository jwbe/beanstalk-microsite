import React from 'react';
import { ReactTypeformEmbed } from 'react-typeform-embed';

const TypeformWidget = () => {
  const style = {
    height: '500px'
  }
  return (
    <div style={style}>
      <ReactTypeformEmbed url="https://kidstartuk.typeform.com/to/kND1YS"/>;
    </div>
  );
} 

export default TypeformWidget;