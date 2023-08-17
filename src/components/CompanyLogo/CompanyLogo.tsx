import React from "react";

import './CompanyLogo.css';

export default function CompanyLogo(props: any) {
  const src = props.srcImage;
  const alt = props.alt
  return (
    <div className="CompanyLogo">
      <img className="logoImg" src={src} alt={alt} />
    </div>

  )
}