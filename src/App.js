import React from 'react';
import './App.scss';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Users from 'components/Users';

const users =['Hans Zimbber', 'Bruce Wayne']

function App() {
  return (
    <div className="App">
      <Tabs defaultActiveKey="users" variant="tabs">
        <Tab eventKey='users' title='Users'>
          <Users />
        </Tab>
        <Tab eventKey="todos" title='Todos'>
          Todos
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;
