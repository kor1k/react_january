import React, { Component, Fragment } from 'react';

import Header from './components/Header'
import Menu from './components/Menu'
import MailList from './components/MailList'

import './App.scss';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo);

class App extends Component {
    state = {
        active: 'getted',
        mailList: {
            getted: [
                {
                    id: 1,
                    status: true,
                    from: 'test@test.ua',
                    subject: 'Some test subject',
                    text: 'Сервис онлайн проверки текста на уникальность Text.ru покажет процент уникальности текста. Глубокая и качественная проверка найдет дубликаты и'
                },
                {
                    id: 2,
                    status: true,
                    from: 'test@ukr.net',
                    subject: 'Ukr.net hello!',
                    text:'Проверьте грамотность текста онлайн, чтобы исправить все орфографические ошибки. Сервис проверки правописания Адвего работает на 20 языках'
                },
                {
                    id: 3,
                    status: true,
                    from: 'test@bigmir.net',
                    subject: 'Bigmir subject',
                    text: 'Семантический анализ текста Адвего для SEO онлайн — профессиональный инструмент для оценки качества текстов, seo оптимизации статей и'
                },
                {
                    id: 4,
                    status: true,
                    from: 'test@test.ua',
                    subject: 'Some test subject',
                    text: 'Сервис онлайн проверки текста на уникальность Text.ru покажет процент уникальности текста. Глубокая и качественная проверка найдет дубликаты и'
                },
                {
                    id: 5,
                    status: true,
                    from: 'test@ukr.net',
                    subject: 'Ukr.net hello!',
                    text:'Проверьте грамотность текста онлайн, чтобы исправить все орфографические ошибки. Сервис проверки правописания Адвего работает на 20 языках'
                },
                {
                    id: 6,
                    status: true,
                    from: 'test@bigmir.net',
                    subject: 'Bigmir subject',
                    text: 'Семантический анализ текста Адвего для SEO онлайн — профессиональный инструмент для оценки качества текстов, seo оптимизации статей и'
                }
            ],
            sent: [
                {
                    id: 7,
                    status: true,
                    from: 'friend@ukr.net',
                    subject: 'Hello my friend',
                    text: 'A text (literary theory) is any object that can be read, including: Documents: Religious text, a writing that a religious tradition considers to be sacred; Textbook'
                },
                {
                    id: 8,
                    status: true,
                    from: 'some@bigmir.net',
                    subject: 'Work proposition',
                    text: 'Функція TEXT дає змогу змінити спосіб відображення числа, застосувавши до нього форматування з кодами форматів. Це корисно, коли потрібно '
                },
                {
                    id: 9,
                    status: true,
                    from: 'test@test.ua',
                    subject: 'Some test subject',
                    text: 'Сервис онлайн проверки текста на уникальность Text.ru покажет процент уникальности текста. Глубокая и качественная проверка найдет дубликаты и'
                },
                {
                    id: 10,
                    status: true,
                    from: 'test@ukr.net',
                    subject: 'Ukr.net hello!',
                    text:'Проверьте грамотность текста онлайн, чтобы исправить все орфографические ошибки. Сервис проверки правописания Адвего работает на 20 языках'
                },
                {
                    id: 11,
                    status: true,
                    from: 'test@bigmir.net',
                    subject: 'Bigmir subject',
                    text: 'Семантический анализ текста Адвего для SEO онлайн — профессиональный инструмент для оценки качества текстов, seo оптимизации статей и'
                },
            ]
        }
    };

    chgFolder = (folderId) => {
        this.setState({
            active: folderId
        })
    };

    render() {
        let activeCategory = this.state.active
        return (
            <Fragment>
                <Header/>
                <div className="main-region">
                    <Menu chgFolder={this.chgFolder} active={activeCategory}/>
                    <MailList mails={this.state.mailList[activeCategory]}/>
                </div>
            </Fragment>
        );
    }
}

export default App;