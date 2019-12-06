import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
// import PropsProxy from './components/base/propsProxy/PropsProxy'
// import PropsControl from './components/base/propsProxy/PropsControl'
import PropsControl2 from './components/base/propsProxy/PropsControl2'
import AbstractState from './components/base/propsProxy/AbstractState'
import InheritanceInversion from './components/base/inheritanceInversion/InheritanceInversion'
import RenderOrder from './components/base/inheritanceInversion/RenderOrder'
import RenderHijack from './components/base/inheritanceInversion/RenderHijack'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: true,
      showRenderHijack: true,
    }
    this.getInfo = this.getInfo.bind(this)
  }

  componentDidMount() {
    const map = new AMap.Map('mapContent', {
      resizeEnable: true, // 是否监控地图容器尺寸变化
      zoom: 11, // 初始化地图层级
      center: [116.397428, 39.90923], // 初始化地图中心点
    });
    map.on('complete', () => {
      // this.getInfo()
    })
  }

  getInfo() {
    const xml = new XMLHttpRequest()
    xml.open('GET', 'http://uri.amap.com/nearby?service=movie&location=116.481590,39.989175&city=110000&src=mypage&coordinate=gaode')
    xml.send()
    console.log(this)
  }

  clickPropsControl2(e) {
    // console.log(this, e)
    this.show = !this.show
    e.persist()
    // this.show = false
    this.setState({ showRenderHijack: this.show })
  }

  render() {
    const { show, showRenderHijack } = this.state
    const renderHijack = { loggedIn: showRenderHijack }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit
            <code>src/App.js</code>
            and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        {/* <PropsProxy /> */}
        {/* <PropsControl /> */}
        <div
          role="button"
          tabIndex="0"
          onKeyPress={() => this.clickPropsControl2()}
          onClick={e => this.clickPropsControl2(e)}
        >
          {
            show
              ? (
                <div>
                  <PropsControl2
                    ref={(c) => { this.propsControls = c }}
                  />
                  <AbstractState />
                  <InheritanceInversion />
                  <RenderOrder />
                </div>
              )
              : <div />
          }
          <RenderHijack {...renderHijack} />
        </div>
        {/* <div style={{ height: 500, width: 700 }} id="mapContent" /> */}
        <iframe title="map" width="100%" height="500" src="//uri.amap.com/nearby?service=movie&location=121.6083800000,31.2446600000&city=310115&src=&coordinate=gaode&platform=mobile&view=map" />
      </div>
    );
  }
}
/* function App1() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          <code>src/App.js</code>
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
} */
export default App;
