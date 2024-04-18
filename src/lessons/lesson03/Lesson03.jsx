import "./styles.css";
import Button from "../../components/Button/Button";
import AnimalCard from "../../components/AnimalCard/AnimalCard";
import { lionData, zebraData, normalizeName } from "./data";

function Lesson03() {
  const isPrimary = false;

  return (
    <div className="buttons-container">
      <AnimalCard
        animalData={lionData}
        animalName={normalizeName(lionData.name)}
      >
        <p>Main Character</p>
      </AnimalCard>
      <AnimalCard
        animalData={zebraData}
        animalName={normalizeName(zebraData.name)}
      >
        <p>Main Character</p>
      </AnimalCard>
      {/* <Button isPrimaryButton/>
            <Button buttonName="Send data" isPrimaryButton = {isPrimary}/> */}
    </div>
  );
}

export default Lesson03;
