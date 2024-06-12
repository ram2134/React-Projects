import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Profile from "./components/Assignment1/Assignment1";
import BackgroundColor from "./components/Assignment2/Assignment2";
import CustomReact from "./components/Assignment3/Assignment3.jsx";
import ParaGenerator from "./components/Assignment4/Assignment4.jsx";
import GitHubInfo from "./components/Assignment5/Assignment5.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Tabs>
        <TabList>
          <Tab>Profile</Tab>
          <Tab>Background Color</Tab>
          <Tab>Custom React</Tab>
          <Tab>Paragraph Generator</Tab>
          <Tab>GitHubInfo</Tab>
        </TabList>

        <TabPanel>
          <Profile />
        </TabPanel>
        <TabPanel>
          <BackgroundColor />
        </TabPanel>
        <TabPanel>
          <CustomReact />
        </TabPanel>
        <TabPanel>
          <ParaGenerator />
        </TabPanel>
        <TabPanel>
          <GitHubInfo />
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default App;
