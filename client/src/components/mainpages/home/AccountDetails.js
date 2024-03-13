import React from 'react';
import './AccountDetails.css'

function AccountDetails() {
  return (
    <div class="credit-card" id="creditCard">
    <div class="card-front">
      <div class="card-logo">
      </div>
      
      <div class="card-info">
        <div class="card-holder">
          <span>Account Title : Transparent Hands Trust</span>
        </div>
        <div class="card-expiry">
          <span>Account Number: 220951896</span>
        </div>
      </div>
      <div class="card-number">
        <span>IBAN Number: PK46 UNIL 0109 0002 2095 1896</span>
      </div>
    </div>
    <div class="card-back">
      <div class="card-cvv">
        <label>For any query email us at :</label><br/>
        <span> helpinghands471@gmail.com</span>
      </div>
    </div>
  </div>
  );
}

export default AccountDetails;