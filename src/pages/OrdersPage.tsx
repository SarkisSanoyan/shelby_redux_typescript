import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../hooks/redux';
import { fetchOrder } from "../store/actions/ActionsCreator";
import { useNavigate } from 'react-router-dom';

import '../scss/OrdersPage.scss';


export function OrdersPage() {

  const dispatch = useAppDispatch();
  const order = useAppSelector(state => state.order.order);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchOrder());
  }, []);

  return (
    <div className='OrdersPage'>
      <table>
        <thead className="tour-info">
          <tr>
            <th>ID</th>
            <th>Tour</th>
            <th>City</th>
            <th>Departure</th>
            <th>Arrival</th>
            <th>City</th>
            <th>Check-in</th>
            <th>Check-out</th>
            <th>Rooms</th>
            <th>Adults</th>
            <th>Children</th>
            <th>Children ages</th>
            <th>Phone</th>
            <th>E-mail</th>
          </tr>
        </thead>
        <br />

        <tbody className="query-info">
          {
            order.map(el =>
              <tr key={el.id}>
                <td>{el.id}</td>
                <td>{el.name}</td>
                <td>{el.country}</td>
                <td>{el.transport_depart}</td>
                <td>{el.transport_arrive}</td>
                <td>{el.selectedCountry}</td>
                <td>{el.checkin}</td>
                <td>{el.checkout}</td>
                <td>{el.rooms}</td>
                <td>{el.adults}</td>
                <td>{el.children}</td>
                <td>{el.childAgeArr}</td>
                <td>{el.phone}</td>
                <td>{el.email}</td>
              </tr>
            )
          }
        </tbody>
      </table>

      <button className='btn' onClick={() => navigate('/booking')}>Book more</button>
    </div>
  )
}

