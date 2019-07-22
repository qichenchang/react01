import React,{Component} from 'react'

class Home extends Component{
  render () {
    return (
      <div className="Home">
        <h3>首页</h3>
        <input type="button" value="编程时跳转" onClick={()=>{
          this.props.history.push('/product/6?bb=1&cc=2')
        }} />
      </div>
    )
  }

}
export default Home;