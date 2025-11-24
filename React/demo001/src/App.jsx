import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";
import StateComponent from "./StateComponent";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let topic = "React";
  let version = 19.2;

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h1>{topic}</h1>
            <h2>{version}</h2>
            <InternalFunc1 />
            <FirstComponent />
            <SecondComponent />
            <hr />
            <StateComponent />
          </div>
        </div>
      </div>
    </>
  );
}
function InternalFunc1() {
  let city = "Mumbai";
  return (
    <>
      <div>I'm in {city}</div>
    </>
  );
}
export default App;

/*
function name App is starting with caps & it is called component
in return there is a bracket
inside return there is html tags which is wrapped in <> </>

*/
