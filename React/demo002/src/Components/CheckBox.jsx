import React,{useState} from "react";

const CheckBox = () => {
  const [skills, setSkills] = useState([]);
  const handleSkills = (event)=>{
    console.log(event.target.value, event.target.checked)
    if(event.target.checked){
        setSkills([...skills,event.target.value])
    }else{
        setSkills([...skills.filter((item)=>item!=event.target.value)])
    }
  }
  return (
    <div>
      <h2>Select your skills</h2>

      <input type="checkbox" id="php" value="php" onChange={handleSkills} />
      <label htmlFor="php">PHP</label>
      <br />
      <br />

      <input type="checkbox" id="node" value="node" onChange={handleSkills} />
      <label htmlFor="node">Node</label>
      <br />
      <br />

      <input type="checkbox" id="python" value="python" onChange={handleSkills} />
      <label htmlFor="python">Python</label>
      <br />
      <br />

        <div>
            {skills}
        </div>
    </div>
  );
};

export default CheckBox;
