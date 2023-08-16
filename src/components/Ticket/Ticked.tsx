import React from "react";

import './Ticked.css';

export default function Ticked(props: any) {
  return (
    <div className="Ticked">
      <div className="Ticked__content">
        <div className="Ticked__header-container">
          <span>12400</span>
          <span>S7 Airlines</span>

        </div>
        <div className="Ticked__content-container">
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



        </div>
        <div className="Ticked__content-container">
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



        </div>
      </div>
    </div>
  )
}