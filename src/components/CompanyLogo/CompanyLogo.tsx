import React from 'react';

import classes from './CompanyLogo.module.scss';
//import * as logos from './ImportsLogo';
import { LogoObj } from './ImportsLogo';

interface logoProps {
  companyCode: string;
}

export default function CompanyLogo(props: logoProps) {
  const name: string = props.companyCode.toString();
  const src = LogoObj[name];
  return (
    <div className={classes.CompanyLogo}>
      <img className={classes.logoImg} src={src} alt={name} />
    </div>
  );
}
