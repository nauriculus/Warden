import React, { useState } from 'react';
import './Portal.css';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


function Portal() {

const walletId = '9WArrPQyZ4HovjoUjYbvtJtbrfJNzQWCBk5k75w6NpEb'; 

const [inputValue, setInputValue] = useState('');
  const history = useHistory();

  const handleKeyPress = (event: any) => {
    if (event.key === 'Enter') {
      history.push(`/wallet/${inputValue}`);
    }
  };


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
            <tbody>
        
              <tr>

                
                <th></th>
                <th>Wallet Address</th>
                <th>Reporter</th>
                <th>Date</th>
                <th>Type</th>
                <th>Votes</th>
                <th>Status</th>
              
              </tr>
              

              
              
            
             
             
            <tr className="">
              <td></td>
              <td>
                <Link to={`/wallet/${walletId}`}>{walletId}</Link>
              </td>
              <td>85Xnyyt2VEse2CZkwGkPsLdKBaCJh1JQjBvBRh1YHVNH</td>
              <td>3.10.2023</td>
              <td>
                <span className="">Exploit</span>
              </td>
              <td>5</td>
              <td>
                <span className="badge">approved</span>
              </td>
            </tr>

              <tr className="">
                <td></td>
                <td>EAUwikTgqeHKJMaqDj17Cwb6TH3XzcXbxHSN7etGzMFt</td>
                <td>85Xnyyt2VEse2CZkwGkPsLdKBaCJh1JQjBvBRh1YHVNH</td>
                <td>3.10.2023</td>
                <td><span className="">Pishing</span></td>
                <td>5</td>
                <td><span className="badge rounded-pill bg-warning text-dark">approved</span></td>
                
              
             
              </tr>

              <tr className="">
                <td></td>
                <td>yUJw9a2PyoqKkH47i4yEGf4WXomSHMiK7Lp29Xs2NqM</td>
                <td>85Xnyyt2VEse2CZkwGkPsLdKBaCJh1JQjBvBRh1YHVNH</td>
                <td>3.10.2023</td>
                <td><span className="">Drainer</span></td>
                <td>5</td>
                <td><span className="badge">approved</span></td>
                
              
             
              </tr>

              <tr className="">
                <td></td>
                <td>5B62qV4fmUqynvxJVQYuZHr6nTP8c3umFmzLjiJg5aa1</td>
                <td>85Xnyyt2VEse2CZkwGkPsLdKBaCJh1JQjBvBRh1YHVNH</td>
                <td>3.10.2023</td>
                <td><span className="">Scam</span></td>
                <td>5</td>
                <td><span className="badge">approved</span></td>
                
              
             
              </tr>

              <tr className="">
                <td></td>
                <td>Ew12E9WjFTv7HPoJnzJzFQJJzAEtQkStYsQrbXkPRkgu</td>
                <td>85Xnyyt2VEse2CZkwGkPsLdKBaCJh1JQjBvBRh1YHVNH</td>
                <td>3.10.2023</td>
                <td><span className="">Exploit</span></td>
                <td>5</td>
                <td><span className="badge">approved</span></td>
                
              
             
              </tr>

              <tr className="">
                <td></td>
                <td>Htp9MGP8Tig923ZFY7Qf2zzbMUmYneFRAhSp7vSg4wxV</td>
                <td>85Xnyyt2VEse2CZkwGkPsLdKBaCJh1JQjBvBRh1YHVNH</td>
                <td>3.10.2023</td>
                <td><span className="">Exploit</span></td>
                <td>5</td>
                <td><span className="badge">approved</span></td>
                
              
             
              </tr>
             
              
            </tbody>
          </table>
          
        </div>
        
      </div>

      
    </div>


  </section>
);
  }

export default Portal;