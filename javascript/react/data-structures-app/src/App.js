import "react-tabs/style/react-tabs.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import MapExample from "./MapExample";
import MapExample2 from "./MapExample2";
import SetExample from "./SetExample";
import StackExample from "./StackExample";
import QueueExample from "./QueueExample";
import TreeExample from "./TreeExample";
import TreeExample2 from "./TreeExample2";

function App() {
  return (
    <div className="App">
      <Tabs>
        <TabList>
          <Tab>Map</Tab>
          <Tab>Map2</Tab>
          <Tab>Set</Tab>
          <Tab>Stack</Tab>
          <Tab>Queue</Tab>
          <Tab>Tree</Tab>
          <Tab>Tree2</Tab>
        </TabList>
        
        <TabPanel className="map">
          <MapExample />
        </TabPanel>
        <TabPanel className="map">
          <MapExample2 />
        </TabPanel>
        <TabPanel>
          <SetExample />
        </TabPanel>
        <TabPanel className="stack">
          <StackExample />
        </TabPanel>
        <TabPanel className="queue">
          <QueueExample />
        </TabPanel>
        <TabPanel>
          <TreeExample />
        </TabPanel>
        <TabPanel>
          <TreeExample2 />
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default App;
