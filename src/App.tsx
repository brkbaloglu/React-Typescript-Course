import React from 'react';
import { RandomNumbers } from './components/restriction/RandomNumbers';
import { Toast } from './components/templateliterals/Toast';
import { CustomButton } from './components/html/Button';
import { CustomComponents } from './components/html/CustomComponents';
// import { ThemeContextProvider } from './components/context/ThemeContext';
// import { Box } from './components/context/Box';
// import { UserContextProvider } from './components/context/UserContext';
// import { User } from './components/state/User';
// import { DomRef } from './components/ref/DomRef';
// import { MutableRef } from './components/ref/MutableRef';
// import { Counter } from './components/class/Counter';
// import { Private } from './components/auth/Private';
// import { Profile } from './components/auth/Profile';
// import { List } from './components/generics/List';
// import { Counter } from './components/state/Counter';
// import { LoggedIn } from './components/state/LoggedIn';
// import { Greet } from './components/Greet';
// import { Person } from './components/Person';
// import { PersonList } from './components/PersonList';
// import { Status } from './components/Status';
// import { Heading } from './components/Heading';
// import { Oscar } from './components/Oscar';
// import { Button } from './components/Button';
// import { Input } from './components/Input';
// import { Container } from './components/Container';

function App() {

  // const personName = {
  //   first: "Bruce",
  //   last: "Wayne"
  // }

  // const nameList = [{
  //     first: "Bruce",
  //     last: "Wayne"
  //   },{
  //     first: "Clark",
  //     last: "Kent"
  //   }]
    

  return (
    <div className="App">
      {/* <Greet name="Vishwas" messageCount={20} isLoggedIn={false}></Greet> */}
      {/* <Person name={personName}></Person> */}
      {/* <PersonList names = {nameList}></PersonList> */}

      {/* <Status status="error"></Status>
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Di Caprio</Heading>
      </Oscar> */}
      {/* <Greet name='Vishwas'  isLoggedIn={false}></Greet> */}
      {/* <Button handleClick={(event, id) => {
        console.log("Button clicked", event, id);
        
      }} ></Button>

      <Input value="" handleChange={event => console.log(event)
      }></Input> */}

      {/* <Container styles={{border: "1px solid black", padding: "1rem", color: "red"}}></Container> */}
      {/* <LoggedIn></LoggedIn> */}
      {/* <Counter></Counter> */}

        {/* <ThemeContextProvider>
          <Box></Box>
        </ThemeContextProvider> */}

        {/* <UserContextProvider>
          <User></User>
        </UserContextProvider> */}
        {/* <DomRef></DomRef>
        <MutableRef></MutableRef> */}

        {/* <Counter message='The count value is'></Counter> */}
        {/* <Private isLoggedIn={true} component={Profile}></Private> */}
        {/* <h2>List of Items</h2>
        <List items={["Batman", "Superman"]} onClick={(item) => console.log(item)}></List>
        <hr /><hr />
        <List items={[1,2,3,4]} onClick={(item) => console.log(item)}></List> */}

        {/* <RandomNumbers value={10} isPositive></RandomNumbers> */}

        {/* <Toast position='left-center'></Toast> */}

        {/* <CustomButton variant='primary' onClick={() => console.log("clicked")
        }>
            Primary Button
        </CustomButton> */}
        {/* <CustomComponents name='Burak' isLoggedIn={true} messageCount={10}></CustomComponents> */}

    </div>
    
  );
}

export default App;
