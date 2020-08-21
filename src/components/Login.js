import React from "react"

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            id: '',
            pw: ''
        }
    }

    changeHandler = (e) => {
        let name = e.target.name;
        let val = e.target.value;

        this.setState({ [name] : val});
    }

    submitHandler = (e) => {
        e.preventDefault();

        alert('로그인 성공')
        // TODO : axios
        this.props.history.push("/");
    }

    render(){
        return (
            <div> 
                <h1> Login </h1> 
                <form onSubmit = {this.submitHandler}>
                    <input type="text" name = "id" onChange={this.changeHandler}/>
                    <input type="password" name = "pw" onChange={this.changeHandler}/>
                    <button>로그인</button>
                </form>
            </div>
        )
    }

}

export default Login;