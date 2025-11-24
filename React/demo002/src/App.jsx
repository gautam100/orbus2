import Props1 from "./Components/props1";
import Props2 from "./Components/props2";
import Props3 from "./Components/Props3";
import Wrapper from "./Components/Wrapper";
import DataBinding from "./Components/DataBinding";
import ControlledComponent from "./Components/ControlledComponent";
import Loops from "./Loops";

function App() {
  let name = "Rohit";
  let age = 37;
  let isIndian = true;
  let hobby = ["Cooking", "Gardening"];
  let qualification = {
    graduation: "BE",
    PG: "MBA",
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Props</h1>
            <p
              style={{
                height: "50px",
                border: "1px solid red",
                fontSize: "20px",
              }}
            >
              <strong>DOM</strong>: Document Object Model
            </p>

            <Props1 name={name} age={age} isIndian={isIndian} />
            <Props2 obj={hobby} />
            <Props3 obj={qualification} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Wrapper>
              <div>This is Wrapper & we will pass jsx into a component</div>
            </Wrapper>
            <Wrapper>
              <div>
                This content will be pass on Wrapper.jsx
              </div>
            </Wrapper>
            <DataBinding />
            <hr />
            <ControlledComponent />
            <Loops />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
