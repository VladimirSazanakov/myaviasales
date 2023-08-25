import React from 'react';

import classes from './CompanyLogo.module.scss';
import * as logos from './ImportsLogo';
import logo from '../../img/companyLogo/AK.jpg';

interface logoProps {
  companyCode: string,
}

export default function CompanyLogo(props: logoProps) {
  const name = props.companyCode;
  const src = logos[name];
  return (
    <div className={classes.CompanyLogo}>
      <img className={classes.logoImg} src={src} alt={name} />
    </div>
  );
}
