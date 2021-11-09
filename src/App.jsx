import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AniCard from './components/AniCard/AniCard';

function App() {
  return (
    <>
      <div className="container-fluid p-4 mb-5">
          <div className="row m-0">
            <div className="col-12 col-md-6 col-lg-4 mt-5">
              <AniCard allTools={true} headerColor="white" expand={true} expandIcon='expand_more' collapseIcon="expand_less" height="200px"/>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 mt-5" >
              <AniCard allTools={true} headerColor="success" expand={false} height="200px"/>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 mt-5">
              <AniCard expandBtn={true} transparent='ani-bg-transparent-txt-black' expand={true} height="200px"/>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 mt-5">
              <AniCard maximizeBtn={true} headerColor="danger" expand={true} height="200px"/>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 mt-5">
              <AniCard closeBtn={true} headerColor="warning" expand={true} height="200px"/>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 mt-5">
              <AniCard maximizeBtn={true} expandBtn={true} closeBtn={true} headerColor="alert" expand={true} height="200px"/>
            </div>
          </div>
      </div>
    </>
  );
}

export default App;
