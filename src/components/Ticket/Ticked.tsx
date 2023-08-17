import React from "react";

import './Ticked.css';
import Price from "../Price";
import CompanyLogo from "../CompanyLogo";

import imageLogo from '../../img/S7 Logo.svg';
import TicketCell from "./TicketCell/TicketCell";
import TicketRow from "./TicketRow";

export default function Ticked(props: any) {
  return (
    <div className="Ticked">
      <div className="Ticked__content">
        <div className="Ticked__header-container">
          <Price value={12500} />
          <CompanyLogo srcImage={imageLogo} alt="S7 Airlines" />

        </div>
        <TicketRow />
        <TicketRow />

        {/* <div className="Ticked__content-container">
          <div className="Ticked__Route">
            <TicketCell name={"mow-hkt"} value={"10:45-08:00"} />

          </div>
          <div className="Ticked__Lenght">
            <TicketCell name={"в пути"} value={"21ч 15 м"} />

          </div>
          <div className="Ticked__Stops">
            <span>2 пересадки</span>
            <span>hkg, jnb</span>
          </div>



        </div> */}
        {/* <div className="Ticked__content-container">
          <div className="Ticked__Route">
            <span>mow-hkt</span>
            <span>10:45-08:00</span>

          </div>
          <div className="Ticked__Lenght">
            <span>в пути</span>
            <span>21ч 15м</span>

          </div>
          <div className="Ticked__Stops">
            <span>2 пересадки</span>
            <span>hkg, jnb</span>
          </div>



        </div> */}
      </div>
    </div>
  )
}