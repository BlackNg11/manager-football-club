import React from "react";

import Featured from "./featured";
import Matches from "./matches";
import MeetPlayer from './meetPlayer';


const Home = () => {
  return (
    <div className="bck_blue">
      <Featured />
      <Matches />
      <MeetPlayer /> 
    </div>
  );
};

export default Home;
