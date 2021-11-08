import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/Card/Card';

function App() {
  return (
    <>
      <div className="container-fluid p-4" style={{height: '300px'}}>
          <div className="row m-0" >
            <div className="col-4">
              <h6>this is card</h6>
            </div>
            <div className="col-4 d-inline-block" >
              <Card headerColor="success" expand={true} height="500px"/>
            </div>
            <div className="col-4">
              <h6>this is card</h6>
            </div>
          </div>
      </div>
    </>
  );
}

export default App;
