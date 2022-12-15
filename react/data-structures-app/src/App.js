import "react-tabs/style/react-tabs.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import MapExample from "./MapExample";
import MapExample2 from "./MapExample2";
import SetExample from "./SetExample";
import StackExample from "./StackExample";

function App() {
  return (
    <div className="App">
      <Tabs>
        <TabList>
          <Tab>Map</Tab>
          <Tab>Map2</Tab>
          <Tab>Set</Tab>
          <Tab>Stack</Tab>
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
      </Tabs>
    </div>
  );
}

export default App;
