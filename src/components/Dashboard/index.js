import React, { Component, Fragment } from 'react';

import Header from '../Header'
import Menu from '../Menu'
import MailList from '../MailList'

import './App.scss';

class App extends Component {
    state = {
        active: 'getted',
        mailList: {
            getted: [
                {
                    id: 1,
                    status: false,
                    from: 'test@test.ua',
                    subject: 'Some test subject',
                    text: 'Сервис онлайн проверки текста на уникальность Text.ru покажет процент уникальности текста. Глубокая и качественная проверка найдет дубликаты и'
                },
                {
                    id: 2,
                    status: false,
                    from: 'test@ukr.net',
                    subject: 'Ukr.net hello!',
                    text:'Проверьте грамотность текста онлайн, чтобы исправить все орфографические ошибки. Сервис проверки правописания Адвего работает на 20 языках'
                },
                {
                    id: 3,
                    status: false,
                    from: 'test@bigmir.net',
                    subject: 'Bigmir subject',
                    text: 'Семантический анализ текста Адвего для SEO онлайн — профессиональный инструмент для оценки качества текстов, seo оптимизации статей и'
                },
            ],
            sent: [
                {
                    id: 4,
                    status: true,
                    from: 'friend@ukr.net',
                    subject: 'Hello my friend',
                    text: 'A text (literary theory) is any object that can be read, including: Documents: Religious text, a writing that a religious tradition considers to be sacred; Textbook'
                },
                {
                    id: 5,
                    status: true,
                    from: 'some@bigmir.net',
                    subject: 'Work proposition',
                    text: 'Функція TEXT дає змогу змінити спосіб відображення числа, застосувавши до нього форматування з кодами форматів. Це корисно, коли потрібно '
                },
            ]
        }
    }

    addNewMsg = (to = "test@test.ua", subject = "Some subject", text = "New msg") => {
        let allCurrentMsg = this.state.mailList.sent.map((item) => {
            let tmp = {...item}
        })
        allCurrentMsg.push({
            id: Math.floor(Math.random()*100),
            status: false,
            from: to,
            subject: subject,
            text: text
        })
        this.setState({
            ...this.state.mailList,
            sent: allCurrentMsg
        })
    }

    chgFolder = (folderId) => {
        this.setState({
            active: folderId
        })
    }

    readMail = (id) => {
        let mailListUpd = this.state.mailList[this.state.active].map((item) => {
            let newObj ={...item};
            if (newObj.id === id) {
                newObj.status = true
            }
            return newObj
        });


        this.setState({
            mailList: {
                ...this.state.mailList,
                [this.state.active]: mailListUpd
            },
        })


    }

    render() {
        let activeCategory = this.state.active
        return (
            <Fragment>
                <Header/>
                <div className="main-region">
                    <Menu chgFolder={this.chgFolder} active={activeCategory}/>
                    <MailList mails={this.state.mailList[activeCategory]} readMail={this.readMail} addNewMsg={this.addNewMsg} />
                </div>
            </Fragment>
        );
    }
}

export default App;