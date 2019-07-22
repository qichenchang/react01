import React,{Component} from 'react'
import querystring from 'query-string'

class Detail extends Component{
  render () {
    return (
      <div className="Detail">
        <h3>详情</h3>
        <a href="javascript:;" onClick={()=>this.props.history.go(-1)}>←</a>
      </div>
    )
  }
  componentDidMount(){
    console.log('id',this.props.match.params.id)
    console.log('search',this.props.location.search)
    console.log('path',this.props.location.pathname)
  }
  componentDidUpdate(){
    console.log('id',this.props.match.params.id)
    console.log('search',this.props.location.search)
    console.log('search-obj',querystring.parse(this.props.location.search))
    console.log('path',this.props.location.pathname)
  }
}
export default Detail;