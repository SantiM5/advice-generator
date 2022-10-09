'use strict'
const apiUrl = 'https://api.adviceslip.com/advice';
const btn = document.querySelector('button');
const a = document.querySelector('p');
const hash = document.querySelector('h6');

async function getAdvice() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    hash.innerHTML = `advice #${data.slip.id}`;
    a.innerHTML = `"${data.slip.advice}"`;
}

btn.addEventListener('click', getAdvice)