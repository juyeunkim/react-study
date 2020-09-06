import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../modules/auth';
import Login from '../components/Login'

class LoginContainer extends Component {
  handleSelect = color => {
    const { changeColor } = this.props;
    console.log('what');
    changeColor(color);
  };

  render() {
    const { color } = this.props;
    return <Login onSelect={this.submitHandler} selected={color} />;
  }
}

// props 로 넣어줄 스토어 상태값
const mapStateToProps = state => ({
    admin_id: state.counter.admin_id,
});

// props 로 넣어줄 액션 생성함수
const mapDispatchToProps = dispatch => ({
  submitHandler: color => dispatch(changeColor(color)),
  

});

// 컴포넌트에 리덕스 스토어를 연동해줄 때에는 connect 함수 사용
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);