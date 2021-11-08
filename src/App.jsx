import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/Card/Card';

function App() {
  return (
    <>
      <div className="container-fluid p-4 mb-5">
          <div className="row m-0">
            <div className="col-12 col-md-6 col-lg-4 mt-5">
              <Card headerColor="white" expand={true} height="200px"/>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mt-5" >
              <Card headerColor="success" expand={false} height="200px"/>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mt-5">
              <Card headerColor="purple" expand={true} height="200px"/>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mt-5">
              <Card headerColor="danger" expand={true} height="200px"/>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mt-5">
              <Card headerColor="warning" expand={true} height="200px"/>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mt-5">
              <Card headerColor="alert" expand={true} height="200px"/>
            </div>
          </div>
      </div>
    </>
  );
}

export default App;
