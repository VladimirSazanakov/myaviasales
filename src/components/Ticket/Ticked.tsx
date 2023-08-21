import React, { useEffect } from 'react';

import Price from '../Price';
import CompanyLogo from '../CompanyLogo';
import imageLogo from '../../img/S7 Logo.svg';

import classes from './Ticked.module.scss';
import TicketRow from './TicketRow';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../store/actionCreator/user';


// const UserList: React.FC = () => {
//   const { users, error, loading } = useSelector(state => state);
//   const dispatch = useDispatch;
//   useEffect(() => {
//     fetchUsers();
//   }, [])
//   return
// }

export default function Ticked(props: any) {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  console.log(state);

  useEffect(() => {
    fetchUsers();
  }, [])




  return (
    <div className={classes.Ticked}>
      <div className={classes['Ticked__content']}>
        <div className={classes['Ticked__header-container']}>
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
  );
}
