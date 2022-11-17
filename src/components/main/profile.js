import './profile.css';
import Transactions from './transactions';
import Widgets from './widgets';
import {faMobileButton, faWallet, faArrowsRotate} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Profile = () => {
    return(
      <div className="main-part p-4 row d-flex flex-lg-row flex-column justify-content-around">
        <div className="col-lg-7 col-12">
          <div className="profile-info row border-bottom p-2">
            <h5>საერთო ბალანსი</h5>
            <h1>1437.45</h1>
            <div className="d-flex justify-content-between col-3">
              <p>512.825</p>
              <p>3166.13</p>
              <p>504.06</p>
            </div>

            <div className="py-2 border-bottom border-top d-flex row col-12">
              <div className="p-2 rounded d-flex align-items-center col-1 justify-content-center wallet__image">
                <FontAwesomeIcon icon={faWallet}></FontAwesomeIcon>
              </div>
              <div className="p-2 col-9">
                <p className="m-0">ანგარიშის ნომერი</p>
                <p className="m-0">00000001256478</p>
              </div>

            </div>
            
            <div className="row justify-content-center text-center py-2">
              <div className="col-7 col-md-4 p-2"><div className="mobile-part p-2 d-flex row align-items-center">
                <div className="p-2 bg-white col-3 rounded">
                  <FontAwesomeIcon icon={faMobileButton}></FontAwesomeIcon>
                </div>
                <p className="m-0 col-9 text-start px-2">მობ. შევსება</p>
              </div>
            </div>
              <div className="col-7 col-md-4 p-2"><div className="payment-part p-2 row align-items-center">
                <div className="p-2 bg-white col-3 rounded">
                  <FontAwesomeIcon icon={faWallet}></FontAwesomeIcon>
                </div>
                <p className="m-0 col-9 text-start px-2">გადახდები</p>
              </div>
            </div>
              <div className="col-7 col-md-4 p-2"><div className="transaction-part p-2 row align-items-center">
                <div className="p-2 bg-white col-3 rounded">
                  <FontAwesomeIcon icon={faArrowsRotate}></FontAwesomeIcon>
                </div>
                <p className="m-0 col-9 text-start px-2">გადარიცხვა</p>
              </div>
            </div>
            </div>

          </div>
          <Widgets />
        </div>


        <Transactions />
      </div>
    )
}

export default Profile