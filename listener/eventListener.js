import Cat from '../src/UI/catBuilder.js';
import CatApi from '../src/data/catApi.js';

export default class Event {
  static listen() {
    const catGenerator = document.querySelector('.generator');
    catGenerator.addEventListener('click', this.loadAndDisplayCat);
    catGenerator.addEventListener('click', this.random_bg_color);
  }

  static async loadAndDisplayCat() {
    const data = new CatApi();
    console.log(data);
    try {
      const catData = await data.getData();
      Event.displayCat(catData[0]);
    } catch (error) {
      console.error(error);
    }
  }

  static displayCat(catData) {
    const container = document.querySelector('.cat-container');

    if (catData.breeds.length == 0) {
      container.innerHTML = Cat.buildOneWithoutBreeds(catData);
    } else {
      container.innerHTML = Cat.buildOneWithBreeds(catData);
    }
    console.log(catData);
  }

  static random_bg_color() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let a = 0.3;
    let bgColor = 'rgb(' + r + ',' + g + ',' + b + ',' + a + ')';

    document.body.style.background = bgColor;
  }
}
