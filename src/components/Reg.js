import React,{Component} from 'react'
import { Prompt } from 'react-router-dom'

class Reg extends Component{
  state={
    bl:true
  }
  render () {
    return (
      <div className="Reg">
        <h3>注册</h3>
        <Prompt
          when={this.state.bl}
          message={location=>{return `尚未保存，是否去向${location.pathname}`}}
        />
      </div>
    )
  }
}

export default Reg;
