import React, { useEffect, useState } from 'react';

import './Portal.css';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

interface WalletData {
  FLAGGED_WALLET: string;
  REPORTER: string;
  TIMESTAMP: number;
  TYPE: string;
  VOTES: number | null;

  STATUS: number;
}


function Portal() {

  
  function formatUnixTimestamp(timestamp: any) {
    const date = new Date(timestamp * 1000); // Convert to milliseconds
  
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
  
    return `${day}/${month}/${year}`;
  }

  const [wallets, setWallets] = useState<WalletData[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Fetch the most viewed wallets when the component mounts
    fetch('https://binaramics.com:5173/trending')
    .then((response) => response.json())
    .then((data: { FLAGGED_WALLET: string, REPORTER: string, TIMESTAMP: number, TYPE: string, VOTES: number, STATUS: number }[]) => {
      setWallets(data); // Set the retrieved data in the 'wallets' state
      setLoading(false);
    })
      
    
    .finally(() => {
      setLoading(false);
    });
}, []);

const [inputValue, setInputValue] = useState('');
  const history = useHistory();

  const handleKeyPress = (event: any) => {
    if (event.key === 'Enter') {
      history.push(`/wallet/${inputValue}`);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

return (
  <section>

    
  <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700" rel="stylesheet"/>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>


  <style type="text/css">
  @import url(https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css);
  </style>
 
  
  
    <div data-reactroot="" className="container" id="orders-list">

    <div className="live-feed">
      <div className="pulsating-circle"></div>
   
    </div>
    <form className="row search-bar">
    <span className="warden-header">WARDEN DATABASE</span>
       
       
   
    <input
        type="text"
        className="form-control"
        placeholder="Search for a wallet..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress} 
      />
      </form>

      
      <div className="row list">
        <div className="col-md-12">
     
     
          <table className="table table-hover">
        
      <thead>
       
        <tr>
       
          <th>Reporter Wallet</th>
          <th>Flagged Wallet</th>
          <th>Report Date</th>
          <th>Report Type</th>
          <th>Votes</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
      {wallets.map((wallet) => (
        
        
          <tr key={wallet.FLAGGED_WALLET} className="">
            <td>{wallet.REPORTER}</td>
            <td>
              <a href={`/wallet/${wallet.FLAGGED_WALLET}`}>{wallet.FLAGGED_WALLET}</a>
            </td>
        
            <td>{formatUnixTimestamp(wallet.TIMESTAMP)}</td>
            <td>
              <span className="">{wallet.TYPE.toUpperCase()}</span>
            </td>
            <td>{wallet.VOTES}</td>
            <td>
            <span className={`badge ${wallet.STATUS === 1 ? 'approved' : wallet.STATUS === 0 ? 'pending' : wallet.STATUS === 2 ? 'declined' : ''}`}>
            {wallet.STATUS === 1 ? 'Approved' : wallet.STATUS === 0 ? 'Pending' : wallet.STATUS === 2 ? 'Declined' : ''}
          </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
          
        </div>
        
      </div>

      
    </div>


  </section>
);
  }

export default Portal;