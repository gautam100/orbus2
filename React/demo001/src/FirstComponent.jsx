import angular from "./assets/angular.jpg";

const FirstComponent = () => {
  const skills = ["JS", "PHP", "Node", "Mysql", "Python", "AWS"];
  const specializations = {
    first: "Developer",
    second: "PM",
    third: "Trainer",
  };
  return (
    <>
      <h2>This is FirstComponent!!!</h2>
      <img src={angular} />
      <ul>
        <li>{skills[0]}</li>
        <li>{skills[1]}</li>
        <li>{skills[2]}</li>
        <li>{skills[3]}</li>
        <li>{skills[4]}</li>
      </ul>
      <div>
        <strong>
          <mark>{specializations.first} </mark> |
          <mark>{specializations.second} </mark> |
          <mark>{specializations.third} </mark>
        </strong>
      </div>
    </>
  );
};

export default FirstComponent;
