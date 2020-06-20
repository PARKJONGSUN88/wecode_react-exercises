import React, { Component } from "react";
import Card from "../2-monsters/components/Card/Card";
import "./index.scss";
class index extends Component {
  state = {
    user: {},
    num: 1
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then(res => res.json())
      .then(res => this.setState({user: res}))
  }
componentDidUpdate(prevProps) {
  // 둘이 다를 때 실행 디드업데이트는 계속 호출되기 떄문에 조건을 걸어주어야 불필요한 실행이 안된다
  // 기본으로 preProps 를 인자로 받는다
  if (prevProps.match.params.id !== this.props.match.params.id)  {
    fetch(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(res => this.setState({user: res}))
  }
}
  render() {
    console.log(this.props)
    const {id, name, email} = this.state.user;
    return (
      <div className="url-parameters">
        <Card id={id} name={name} email={email} />
        <div className="btn-wrapper">
          <button onClick={() => this.props.history.push(`/url-parameters/${Number(this.props.match.params.id) - 1}`)}>Previous</button>
          <button onClick={() => this.props.history.push(`/url-parameters/${Number(this.props.match.params.id) + 1}`)}>Next</button>
        </div>
      </div>
    );
  }
}
export default index;