import { names } from '../data/names.js';

export default class Cat {
  static buildOneWithoutBreeds(catData) {
    return `
    <section class='cat'>
    <img src='${catData.url}'></img>
    <div class='description'>My name is ${this.randomName()}</div>
    </section>
    `;
  }
  static buildOneWithBreeds(catData) {
    return `
    <section class='cat'>
    <img src='${catData.url}'></img>
    <div class='description'>My name is ${this.randomName()}<br/>I'm a ${
      catData.breeds[0].name
    } from ${catData.breeds[0].origin}</div>
    </section>
    <section class='infos'>${catData.breeds[0].description}</section><a href="${
      catData.breeds[0].wikipedia_url
    }" target="_blank" rel="noopener noreferrer">Find more on Wiki</a>
    `;
  }

  static randomName() {
    let randomName = names[Math.floor(Math.random() * names.length)];
    return randomName;
  }
}
