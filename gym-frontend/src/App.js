import React from "react";
import Members from "./components/Members";
import Trainers from "./components/Trainers";
import PersonalTrainerForm from "./components/personalTrainer";
import TrainerList from "./components/TrainerList";
import GeneralTrainerForm from "./components/GeneralTrainerForm";
import DeleteMember from "./components/deleteMember";
import GeneralTrainerDelete from "./components/deleteGeneralTrainer";
import PersonalTrainerDelete from "./components/deletePersonalTrainer";

const App = () => {
  return (
    <div>
      <h1>Gym Dashboard</h1>

      <Members />
      <DeleteMember/>

      <TrainerList type="personal" />
      <PersonalTrainerForm />

      <TrainerList type="general" />
      
      <GeneralTrainerForm/>

      
      <GeneralTrainerDelete/>


      <PersonalTrainerDelete/>
      

    </div>
  );
};

export default App;
