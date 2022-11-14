import './profile.css';
import Transactions from './transactions';
import Widgets from './widgets';

const Profile = () => {
    return(
      <div className="main-part p-4 row d-flex justify-content-around">
        <div className="col-7">
          <div className="profile-info row border-bottom">
            <h5>საერთო ბალანსი</h5>
            <h1>1437.45</h1>
            <div className="d-flex justify-content-between col-3">
              <p>512.825</p>
              <p>3166.13</p>
              <p>504.06</p>
            </div>

            <div className="py-2 border-bottom">
              <p className="m-0 border-top">ანგარიშის ნომერი</p>
              <p className="m-0">00000001256478</p>
            </div>
            
            <div className="row justify-content-center text-center py-2">
              <div className="col-4 p-2"><div className="mobile-part p-2"><p className="m-0">მობ. შევსება</p></div></div>
              <div className="col-4 p-2"><div className="payment-part p-2"><p className="m-0">გადახდები</p></div></div>
              <div className="col-4 p-2"><div className="transaction-part p-2"><p className="m-0">გადარიცხვა</p></div></div>
            </div>

          </div>
          <Widgets />
        </div>


        <Transactions />
      </div>
    )
}

export default Profile