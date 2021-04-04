import React from 'react'

export class RegClient extends React.Component{
    constructor() {
        super();
        this.sendForm = this.sendForm.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.state = {
            name: "",
            lastname: "",
            email: "",
            pass: "",
            infoEmail:"",
            infoPass:""
        }
    }
    sendForm(){
        let formData = new FormData();
        formData.append("name",this.state.name);
        formData.append("lastname",this.state.lastname);
        formData.append("email",this.state.email);
        formData.append("pass",this.state.pass);
        console.log(formData);
        fetch("http://aistwerty.beget.tech/projects/spaTech/php/client_reg.php", {
            method: "POST",
            body: formData
        }).then(response=>response.json())
            .then(result=>{
                console.log(result.result);
            })
    }
    handleInputChange(event) {
        const value = event.target.value;
        const name = event.target.name;
        if (name === "email") {
            const formData = new FormData();
            formData.append("email", value);
            fetch("http://aistwerty.beget.tech/projects/spaTech/php/check_email.php", {
                method: "POST",
                body: formData
            }).then(response => response.json())
                .then(result => {
                    if (result.result == "exist") {
                        this.setState({
                            infoEmail: "Пользователь с таким email уже существует"
                        })
                    } else {
                        this.setState({
                            infoEmail: ""
                        })
                    }
                });
        }
        if (name === "pass" && value.length<6){
            this.setState({
                infoPass: "Слишком короткий пароль"
            })
        }else{
            this.setState({
                infoPass: ""
            })
        }
        this.setState({
            [name]: value
        })
    }

    render() {
        return <div className="col-md-5 my-5 mx-auto">
            <h4 className="text-center my-3">Регистрация</h4>
            <form>
                <div className="mb-3">
                    <input value={this.state.name} onChange={this.handleInputChange} name="name" type="text" className="form-control" placeholder="Имя"/>
                </div>
                <div className="mb-3">
                    <input value={this.state.lastname} onChange={this.handleInputChange} name="lastname" type="text" className="form-control" placeholder="Фамилия"/>
                </div>
                <div className="mb-3">
                    <input value={this.state.email} onChange={this.handleInputChange} name="email" type="email" className="form-control" placeholder="Email"/>
                    <p style={{color:"green"}}>{this.state.infoEmail}</p>
                </div>
                <div className="mb-3">
                    <input value={this.state.pass} onChange={this.handleInputChange} name="pass" type="password" className="form-control" placeholder="Пароль"/>
                    <p style={{color:"green"}}>{this.state.infoPass}</p>
                </div>
                <div className="mb-3">
                    <input type="submit" className="form-control btn btn-info" value="Зарегистрироваться"/>
                </div>
            </form>
        </div>

    }
}