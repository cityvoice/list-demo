import React, { useState } from 'react'
import { connect } from 'react-redux';
import Header from '../../components/header.js';
import Footer from '../../components/footer.js';
import NameItem from '../../components/nameItem.js';
import { add, remove } from '../../actions/index';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit:false,
      name:'',
      errMsg:'',
      filters:this.props.names.slice(0)
    }
  }
  showNameInput(){
    this.setState({edit:true})
  }
  hideNameInput(){
    this.setState({name:'', errMsg:'', edit:false})
  }
  newName(name){
    this.setState({name})
  }
  removeName(name){
    this.props.dispatch(remove(name))
    this.setState({edit:false, filters:[...this.state.filters.filter(item=>item!=name)]})
  }
  handleSave(){
    let name = this.state.name
    if(name=='' || /^\s+|\s+$/g.test(name)){
      this.setState({errMsg:'name is empty!'})
      return
    }
    if(this.props.names.indexOf(name)!=-1){
      this.setState({errMsg:'name has exists!'})
      return
    }
    this.props.dispatch(add(name))
    this.setState({errMsg:'', edit:false, filters:[...this.state.filters, name],name:''})
  }
  pickOne(){
    if(this.state.filters.length==0)return;
    let random = Math.floor(Math.random()*this.state.filters.length)
    let name = this.state.filters[random]
    this.setState({fiters:[...this.state.filters.splice(random, 1)]})
  }
  render() {
    let {names} = this.props
    return (<div>
      <Header/>
      <div className="list-title"><span>name list</span></div>
      <ul className="list-group">
        {names.map((name, index) =>
        <NameItem key={'name_'+index} picked={this.state.filters.indexOf(name)==-1?true:false} remove={(name)=>this.removeName(name)} name={name}>{name}</NameItem>
      )}
      </ul>
      {names.length==0?
        <div className="list-empty"><span>the name lists are empty, please click <em>add</em> button to add one</span></div>
        :null
      }

      {this.state.edit ?
        <div className="form-row"><input type="text" placeholder='input name here' onChange={(evt)=>this.newName(evt.target.value)} value={this.state.name}/><button className="btn-primary" onClick={()=>this.handleSave()}>save</button><button onClick={()=>this.hideNameInput()} className="btn-default" >cancel</button></div>
        :<div className="form-row"><button className="btn-primary" onClick={()=>this.showNameInput()}>add</button></div>
      }
      {this.state.errMsg!='' ? 
        <div className="warn"><span>{this.state.errMsg}</span></div>
        :null
      }
      <div className="form-row"><button className="btn-primary" onClick={()=>this.pickOne()}>pick one</button></div>
      <Footer/>
    </div>
      );
  }
}

const mapStateToProps = (state) => {
  return {
    names: state.nameReducer
  }
}

export default connect(mapStateToProps)(App)