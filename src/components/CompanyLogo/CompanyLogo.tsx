import React from 'react';

import classes from './CompanyLogo.module.scss';

interface logoProps {
  srcImage: string,
  alt: string,
}

export default function CompanyLogo(props: logoProps) {
  const src = props.srcImage;
  const alt = props.alt;
  return (
    <div className={classes.CompanyLogo}>
      <img className={classes.logoImg} src={src} alt={alt} />
    </div>
  );
}
