import React from 'react';

function Picture(props) {
  const {
    image,
  } = props;

  if (image) {
    if (image.desktop || image.tablet || image.mobile) {
      return (
        <>
          <picture>
            {(image.mobile && image.mobile.href) && <source srcSet={image.mobile.href} media="(max-width: 578px)"/>}
            {(image.tablet && image.tablet.href) && <source srcSet={image.tablet.href} media="(max-width: 1200px)"/>}
            {(image.desktop && image.desktop.href) && <img src={image.desktop.href} alt={image.alt} />}
          </picture>
        </>
      )
    }
    return <img src={image.href} alt={image.alt} />
  }
  return null;
}

export default Picture;