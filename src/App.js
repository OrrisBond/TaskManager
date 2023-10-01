import Nav from "./component/Nav";
import Navsub from "./component/Navsub";
import Status from "./component/Status";
import Tab from "./component/Tab";
import Table from "./component/Table";
import { AiFillSetting } from "react-icons/ai";
import { BsWindowSidebar, BsFolderFill } from "react-icons/bs";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Nav />
      <Navsub />
      <Tab />
      <hr className="top"></hr>
      <Status />
      <div className="row">
        <AiFillSetting className="icons" />
        <Table text="smphost" figure={[0, 1.9, 0, 0]} />
      </div>
      <div className="row">
        <BsWindowSidebar className="icons" />
        <Table text="System" figure={[0.8, 51.2, 2.0, 0]} />
      </div>
      <div className="row">
        <BsWindowSidebar className="icons" />
        <Table text="System interrupts" figure={[0, 0, 0, 0]} />
      </div>
      <div className="row">
        <AiFillSetting className="icons" />
        <Table text="utcsvc" figure={[0, 2.4, 0, 0]} />
      </div>
      <div className="row">
        <BsFolderFill className="icons" />
        <Table text="Windows Explorer" figure={[0.6, 13.7, 0, 0]} />
      </div>
      <div className="row">
        <BsWindowSidebar className="icons" />
        <Table text="Windows Logon Application" figure={[0, 0.5, 0, 0]} />
      </div>
      <div className="row">
        <BsWindowSidebar className="icons" />
        <Table text="Windows Session Manager" figure={[0, 0.1, 0, 0]} />
      </div>

      <Footer />
    </>
  );
}

export default App;
