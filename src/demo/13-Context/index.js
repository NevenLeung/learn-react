import React from 'react';

import {ThemeContext, themes} from "./theme-context";
import ThemedButton from './themed-button';
import ThemeTogglerButton from './theme-toggler-button';

function Title() {
  return <h1>Context</h1>
}

// Example No.1
// 利用props传入的函数动态地改变的context的值
function Toolbar(props) {
  return (
    <div>
      <ThemedButton onClick={props.changeTheme}>
        Change Theme
      </ThemedButton>
    </div>
  );
}

class ToolbarWithThemedButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme
    };
  }

  toggleTheme = () => {
    this.setState(state => ({
      theme: state.theme === themes.dark? themes.light: themes.dark
    }));
  };

  // Context的Provider的值为this.state.theme，
  // 通过props传入一个回调this.toggleTheme，用于改变state的值
  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={this.toggleTheme}/>
        </ThemeContext.Provider>
      </div>
    );
  }
}

// Example No.2
// 利用context传递函数
function Content() {
  return (
    <div>
      <ThemeTogglerButton/>
    </div>
  )
}

class ContentWithThemedButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme
    };
  }

  toggleTheme = () => {
    this.setState(state => ({
      theme: state.theme === themes.dark? themes.light: themes.dark
    }));
  };

  // 与前面一个例子差不多，但这里是把toggleTheme方法作为context的一部分传递下去
  // 在通过调用toggleTheme来改变父组件中的的state
  // 这里更像是展现了context中可以传递函数的一面
  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state}>
          <Content/>
        </ThemeContext.Provider>
      </div>
    );
  }
}


// Example No.3
// 需要多个Context

// Theme context
const ThemeContext2 = React.createContext('light');

// Signed-in user context
const UserContext = React.createContext({
  name: 'Guest'
});

// A component consumes two contexts
function Content2() {
  return (
    <ThemeContext2.Consumer>
      {theme => (
        <UserContext.Consumer>
          {user => (
            <ProfilePage user={user} theme={theme}/>
          )}
        </UserContext.Consumer>
      )}
    </ThemeContext2.Consumer>
  )
}

class ConsumeMutilpleContextsExample extends React.Component {
  render() {
    const {signedInUser, theme} = this.props;

    // It provides initial context values here.
    return (
      <div>
        <ThemeContext2.Provider value={theme}>
          <UserContext.Provider value={signedInUser}>
            <Content2/>
          </UserContext.Provider>
        </ThemeContext2.Provider>
      </div>
    );
  }
}


// Example No.4
// 不是将上下文添加到每个生命周期方法中，只需要将它作为一个 props 传递，
// 然后像通常使用 props 一样去使用它

class Button extends React.Component {
  componentDidMount() {
    // ThemeContext value is this.props.theme
  }

  componentDidUpdate(prevProps, prevState) {
    // Previous ThemeContext value is prevProps.theme
    // New ThemeContext value is this.props.theme
  }

  render() {
    const {theme, children} = this.props;
    return (
      <button className={theme? 'dark': 'light'}>
        {children}
      </button>
    )
  }
}


// Example No.5
//



function Demo() {
  return (
    <div>
      <Title/>
      <hr/>
      <ToolbarWithThemedButton/>
      <br/>
      <ContentWithThemedButton/>
    </div>
  )
}

export default Demo;
