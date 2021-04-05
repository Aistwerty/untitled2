import React from 'react'

export class ClientAuth extends React.Component{
    constructor() {
        super();
        this.sendForm = this.sendForm.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.state = {
            email:"",
            pass:"",
            info:""
        }
    }
    sendForm(){
        const formData = new FormData();
        formData.append("email",this.state.email);
        formData.append("pass",this.state.pass);
        fetch('http://aistwerty.beget.tech/projects/spaTech/php/client_auth.php',{
            method: "POST",
            body: formData
        }).then(response=>response.json())
            .then(result=>{
                if (result.result === "success"){
                    console.log("Вы успешно вошли");
                }else{
                    console.log("Ошибка");
                }

                }
            )
    }
    handleInputChange(event){
        const name = event.target.name;
        const value = event.target.value;
        if (name === "email") {
            const formData  = new FormData();
            formData.append("email",value);
            fetch("http://aistwerty.beget.tech/projects/reactTech/php/check_email.php",{
                method: "POST",
                body: formData
            }).then(response=>response.json())
                .then(result=>{
                    if (result.result === "exist") {
                        this.setState({
                            info: "Правильный"
                        })

                    }else{
                        this.setState({
                            info: ""

                        })
                    }
                });
        }
        this.setState({
            [name]: value
        })
    }

    render() {
      return <div className="col-md-5 my-5 mx-auto">
                <h4 className="text-center my-3">Авторизация</h4>
                <form onSubmit={this.sendForm}>
                    <div className="mb-3">
                        <input value={this.state.email} onChange={this.handleInputChange} name="email" className="form-control"  type="text" placeholder="Логин"/>
                        <p style={{color:"green"}}>{this.state.info}</p>
                    </div>
                    <div className="mb-3">
                        <input value={this.state.pass} onChange={this.handleInputChange} name="pass" className="form-control"  type="password" placeholder="Пароль"/>
                    </div>
                    <div className="mb-3">
                        <input value="Войти" className="form-control btn btn-info" type="submit" />
                    </div>

                </form>
            </div>
    }

}
