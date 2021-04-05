import React from 'react'

export class ContactUs extends React.Component{
    render() {
        return <div className="col-md-5 my-5 mx-auto">
            <form action="">
                <h4 className="text-center my-3">Форма обратной связи</h4>
                <div className="mb-3"><input type="text" className="form-control" placeholder="Тема сообщения"/></div>
                <div className="mb-3"><textarea type="text" className='form-control' placeholder="Текст сообщения"/></div>
                <div className="mb-3"><input type="text" className="form-control" placeholder="Ваше ФИО"/> </div>
                <div className="mb-3"><input type="tel" className='form-control' placeholder="Номер телефона"/></div>
                <div className="mb-3"><input type="email" className='form-control' placeholder="email"/></div>
                <div className="mb-3"><input type="submit" className='form-control btn btn-info' placeholder="Отправить"/></div>
            </form>
        </div>
    }
}