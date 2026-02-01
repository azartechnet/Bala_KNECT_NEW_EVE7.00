
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import c1 from './images/b1.jpeg';
import c2 from './images/b2.jpeg';
import c3 from './images/b3.jpeg';
const Product = () => {
  return (
    <>
      <div className="container mt-4">
        
        {/* Row 1 */}
        <div className="row mb-4">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <img src={c1}  width="90%" height="90%"/>
                <h5 className="card-title">Card 1</h5>
                <p className="card-text">Row 1 - Card 1</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                     <img src={c2} width="90%" height="90%"/>
                <h5 className="card-title">Card 2</h5>
                <p className="card-text">Row 1 - Card 2</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                     <img src={c3} width="90%" height="90%"/>
                <h5 className="card-title">Card 3</h5>
                <p className="card-text">Row 1 - Card 3</p>
              </div>
            </div>
          </div>
        </div>

               {/* Row 1 */}
        <div className="row mb-4">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <img src={c1}  width="90%" height="90%"/>
                <h5 className="card-title">Card 1</h5>
                <p className="card-text">Row 1 - Card 1</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                     <img src={c2} width="90%" height="90%"/>
                <h5 className="card-title">Card 2</h5>
                <p className="card-text">Row 1 - Card 2</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                     <img src={c3} width="90%" height="90%"/>
                <h5 className="card-title">Card 3</h5>
                <p className="card-text">Row 1 - Card 3</p>
              </div>
            </div>
          </div>
        </div> 

      </div>
    </>
  );
};

export default Product;