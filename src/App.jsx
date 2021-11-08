import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AniCard from './components/AniCard/AniCard';

function App() {
  return (
    <>
      <div className="container-fluid p-4 mb-5">
          <div className="row m-0">
            <div className="col-12 col-md-6 col-lg-4 mt-5">
              <AniCard headerColor="white" expand={true} height="200px"/>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mt-5" >
              <AniCard headerColor="success" expand={false} height="200px"/>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mt-5">
              <AniCard headerColor="purple" expand={true} height="200px"/>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mt-5">
              <AniCard headerColor="danger" expand={true} height="200px"/>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mt-5">
              <AniCard headerColor="warning" expand={true} height="200px"/>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mt-5">
              <AniCard headerColor="alert" expand={true} height="200px"/>
            </div>
          </div>
      </div>
    </>
  );
}

export default App;
