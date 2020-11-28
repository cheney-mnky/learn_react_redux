import React, {Component} from 'react';
import Header from './routes/header';
import Side from './routes/side';
import Counter from './routes/hooks_demo/hooks.js';
class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header/>
        <Side/>
        <Counter/>
      </div>
    )
  }
}
export default App;
