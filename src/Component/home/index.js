import React from "react";

import Featured from "./featured";
import Matches from "./matches";
import MeetPlayer from './meetPlayer';
import Promation from './promation';


const Home = () => {
  return (
    <div className="bck_blue">
      <Featured />
      <Matches />
      <MeetPlayer />
      <Promation />
    </div>
  );
};

export default Home;
