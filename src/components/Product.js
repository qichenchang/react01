import React,{Component} from 'react'
import {Link, NavLink, Route, Redirect, Switch} from 'react-router-dom'
import Detail from "./Detail"
import querystring from 'query-string';
class Product extends Component{
  render () {
    return (
      <div className="Product">
        <h3>商品</h3>
        <Link to="/product/1">商品001</Link>
        <Link to={this.props.match.url+"/2"}>商品002</Link>
        <Link to="/product/3?aa=1&bb=2" >商品003</Link>
        <Link to={{pathname:this.props.match.url+"/4",search:'aa=11&bb=22'}}>商品004</Link>
        <Link to={{pathname:this.props.match.url+"/5",search:querystring.stringify({aa:111,bb:222})}}>商品005</Link>
      
        {/* <Route path={ Component={Detail}}/> */}
        <Route path={ this.props.match.path + "/:id" } component={Detail} />
      </div>
    )
  }

}
export default Product;