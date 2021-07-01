import React from 'react'
import Theme from './media.module.scss'

const Media = props => {
  const { src, type } = props;
  return (
    <>
      { 
        type === 'video'
        ? 
        <iframe className={Theme.Media} src={src} width="320" height="460" frameborder="0"></iframe>
        : 
        <img className={Theme.Media} src={src}/>
      }
    </>
  )
}

export default Media;