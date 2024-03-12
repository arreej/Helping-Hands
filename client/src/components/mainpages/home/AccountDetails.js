import React from 'react';
import './AccountDetails.css'

function AccountDetails() {
  return (
    <div class="credit-card" id="creditCard">
    <div class="card-front">
      <div class="card-logo">
      </div>
      <div class="card-number">
        <span>1234 5678 9101 1121</span>
      </div>
      <div class="card-info">
        <div class="card-holder">
          <label>Card Holder</label>
          <span>John Doe</span>
        </div>
        <div class="card-expiry">
          <label>Expires</label>
          <span>12/23</span>
        </div>
      </div>
    </div>
    <div class="card-back">
      <div class="card-cvv">
        <label>CVV</label>
        <span>123</span>
      </div>
    </div>
  </div>
  );
}

export default AccountDetails;