import { Children, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function Tabs_({tabs}) {
  const [key, setKey] = useState('home');
  return (
   
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
{tabs.map((tab) => (
        <Tab key={tab.eventKey} eventKey={tab.eventKey} title={tab.title} disabled={tab.disabled}>
          {tab.content}
        </Tab>
      ))}
    </Tabs>
  );
}

export default Tabs_;