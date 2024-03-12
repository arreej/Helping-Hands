import React, {useContext, useState,useEffect} from 'react'
import {GlobalState} from '../../../GlobalState'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Stripe from 'stripe'

function OrderHistory() {
    const state = useContext(GlobalState)
    const [loading  , setloading] = useState(false);
    const [isAdmin] = state.userAPI.isAdmin
    const [stripeData, setStripeData] = useState({
        totalTransactions: 0,
        transactions: [],
      });
      useEffect(() => {
        fetchStripeData();
        setloading(true);
    }, []);
    
      async function fetchStripeData() {
        try {
          const response = await axios.get('http://localhost:3000/stripe-data');
          const fetchedData = response.data;
          setStripeData(fetchedData);
          
        } catch (error) {
          console.error('Error fetching Stripe data:', error);
        }
      }
    
    return (
        <div className="dashboard-page">
            <h2>Dashboard</h2>

            <h4>You have {stripeData.totalTransactions} total donations</h4>

            <table>
                <thead>
                    <tr>
                        <th>Payment ID</th>
                        <th>Amount</th>
                        <th>Currency</th>
                        <th>Status</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    { loading && isAdmin ? 
                       stripeData.transactions.map(charge => (
                        <tr key={charge.id}>
                            <td>{charge.id}</td>
                            <td>{charge.amount}</td>
                            <td>{charge.currency}</td>
                            <td>{charge.status}</td>
                            <td>{charge.date}</td>    
                        </tr>)) 
                    :
                    console.log('......')    
                }
                </tbody>
            </table>
        </div>
    )
}

export default OrderHistory
