import { Children, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export function Tabs_({tabs}) {
  const [key, setKey] = useState('home');
  return (
   
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
      variant="underline"
      fill
      style={{margin:"1em"}}
    >
{tabs.map((tab) => (
        <Tab key={tab.eventKey} eventKey={tab.eventKey} title={tab.title} disabled={tab.disabled}>
          {tab.content}
        </Tab>
      ))}
    </Tabs>
  );
}
