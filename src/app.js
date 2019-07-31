console.log('app.js running');

import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

/* class OldSyntax {
    constructor() {
        this.name = 'Bimbica';
    }
}

const oldSyntax = new OldSyntax();
console.log(oldSyntax);

class NewSyntax {
    name = 'Lilo';
    address = 'Vinkuran';
    getGreeting = () => {
        return `Hi, ${this.name}!`
    }
}

const newSyntax = new NewSyntax();
console.log(newSyntax);
console.log(newSyntax.getGreeting()); */