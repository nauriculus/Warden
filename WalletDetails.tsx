import React, { useState } from 'react';

import { RouteComponentProps } from 'react-router-dom';

interface MatchParams {
    walletId: string; 
  }
  
  const WalletDetail: React.FC<RouteComponentProps<MatchParams>> = ({ match }) => {
  
    const walletId = match.params.walletId;
    return (
      <div>
          <style type="text/css">
  @import url(https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css);
  </style>
  
        {/* Display wallet details here */}
        <h2>Wallet Details for {walletId}</h2>
        {/* Display wallet-specific data */}
      </div>
    );
  };
export default WalletDetail;