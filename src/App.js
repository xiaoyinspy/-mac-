import React, { Component } from 'react';
import logo from './logo.svg';
import FreeScrollBar from 'react-free-scrollbar';
import './App.css';
import Header from './components/Header'
import List from './components/List'
import Input from './components/Input'

let Text = (<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente sint quos at. Quae in voluptate, autem ipsa porro quisquam architecto eos impedit laudantium, dolorem blanditiis fugiat maxime, veritatis voluptas temporibus?<br/><br/>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic consequuntur, incidunt explicabo reiciendis, reprehenderit voluptates dolorum possimus quo consequatur ratione quasi ipsa provident, ducimus similique. Ipsum quo alias exercitationem corrupti?<br/><br/>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic consequuntur, incidunt explicabo reiciendis, reprehenderit voluptates dolorum possimus quo consequatur ratione quasi ipsa provident, ducimus similique. Ipsum quo alias exercitationem corrupti?<br/><br/>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic consequuntur, incidunt explicabo reiciendis, reprehenderit voluptates dolorum possimus quo consequatur ratione quasi ipsa provident, ducimus similique. Ipsum quo alias exercitationem corrupti?</p>);

class App extends Component {
  render() {
    return (
      <div className="App">
        <h4>Auto hide, and the starting position is on the "bottom right".</h4>
        <div className="auto-hide">
            <FreeScrollBar className="example" autohide={true} fixed={true} start={'bottom right'} onScrollbarScroll={() => {console.log('scrolled')}} onScrollbarScrollTimeout={10}>
                <div className="inner">{Text}{Text}{Text}</div>
            </FreeScrollBar>
        </div>
      </div>
    )
  }
}

export default App