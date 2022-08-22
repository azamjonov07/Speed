

"use strict";

const t = document.querySelector('#distance');
const person = document.querySelector('#person');
const bike = document.querySelector('#bike');
const car = document.querySelector('#car');
const air_plane = document.querySelector('#air_plane');
const personQoldiq = t.value / 3.6;
const bikeQoldiq = t.value / 20.1;
const carQoldiq = t.value / 70;
const air_planeQoldiq = t.value / 800;

function min(value) {
    const a = value * 60;
    const b = a % 60 / 60;
    const c = value - b;
    const d = b * 60;
    return Math.round(c) + ' Hour ' + ' / ' + Math.round(d) + 'Minut';
}


function vaqt() {
    person.textContent = min(t.value / 3.6);
    bike.textContent = min(t.value / 20.1);
    car.textContent = min(t.value / 70);
    air_plane.textContent = min(t.value / 800);
}