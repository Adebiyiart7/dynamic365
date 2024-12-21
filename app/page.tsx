import React from "react";
import TopMenu from "./components/TopMenu";
import LeadsBoard from "./components/LeadsBoard";
import Table from "./components/Table";

const Home = () => {
  return (
    <div className="space-y-4 h-full w-full">
      <TopMenu />
      <LeadsBoard />
      {/* <div className="mb-4"> */}
      <Table />
      {/* </div> */}
    </div>
  );
};

export default Home;
