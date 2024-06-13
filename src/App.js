import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Profile from "./components/Assignment1/Assignment1";
import BackgroundColor from "./components/Assignment2/Assignment2";
import CustomReact from "./components/Assignment3/Assignment3.jsx";
import ParaGenerator from "./components/Assignment4/Assignment4.jsx";
import GitHubInfo from "./components/Assignment5/Assignment5.jsx";
import OTPLogin from "./components/Assignment6/Assignment6.jsx";
import "./App.css";
import SearchComponent from "./components/SearchComponent/SearchComponent.jsx";
import { useState } from "react";
import Trie from "./components/Trie/SearchComponent.jsx";
function App() {
  const [items] = useState([
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grape",
    "Honeydew",
  ]);
  return (
    <div className="App">
      <Tabs>
        <TabList>
          <Tab>OTP Login</Tab>
          <Tab>Profile</Tab>
          <Tab>Background Color</Tab>
          <Tab>Custom React</Tab>
          <Tab>Paragraph Generator</Tab>
          <Tab>GitHubInfo</Tab>
          <Tab>Searching</Tab>
          <Tab>Trie Searching</Tab>
        </TabList>
        <TabPanel>
          <OTPLogin />
        </TabPanel>
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
        <TabPanel>
          <SearchComponent items={items} />
        </TabPanel>
        <TabPanel>
          <Trie items={items} />
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default App;
