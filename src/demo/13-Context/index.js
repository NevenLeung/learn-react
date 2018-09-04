import React from 'react';

function Title() {
  return <h1>Hello world</h1>
}

function Button({theme}) {
  return <button className={theme}>Button</button>;
}

function ThemeButton({props}) {
  return (
    <ThemeContext.Consumer>
      {theme => <Button {...props} theme={theme}/>}
    </ThemeContext.Consumer>
  )
}

function Toolbar(props) {
  return (
    <div>
      <ThemeButton hello="Hi" test="Ok"/>
    </div>
  );
}



const ThemeContext = React.createContext('light');

class App extends React.Component {
  render() {
    return (
      // <ThemeContext.Provider value="dark">
      <Toolbar/>
      // </ThemeContext.Provider>
    );
  }
}

function Demo() {
  return (
    <div>
      <Title/>
      <hr/>

    </div>
  )
}

export default Demo;
