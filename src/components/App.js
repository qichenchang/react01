import React,{Component} from 'react'
import {Link, NavLink, Route, Redirect, Switch} from 'react-router-dom'
import Home from "./Home"
import Product from "./Product"
import User from "./User"
import Login from "./Login"
import Reg from "./Reg"
import ErrorPage from "./ErrorPage"
import "../assects/css/app.css"

class App extends Component{
  render () {
    return (
      <div className="App">
        <h3>App</h3>

        <NavLink activeClassName="app-nav-active" to='/home'>首页</NavLink>
        <NavLink activeClassName="app-nav-active" to='/product'>商品</NavLink>
        <NavLink activeClassName="app-nav-active" to='/user'>用户</NavLink>
        <NavLink activeClassName="app-nav-active" to='/login'>登录</NavLink>
        <NavLink activeStyle={{background:'red'}} to='/reg'>注册</NavLink>

        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/product" component={Product} />
          <Route path="/user" component={User} />
          <Route path="/login" component={Login} />
          <Route path="/reg" component={Reg} />
          <Redirect exact from="/" to="/home" />
          <Route component={ErrorPage} />
        </Switch>
      </div>
    ) 
  }

}
export default App;