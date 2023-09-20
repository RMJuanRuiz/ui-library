import { Component } from '@angular/core';

import { Card } from 'ui-controls';
import { assassins } from 'src/assets/assassins.mock';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Using Component UI library created with Angular :)';
  cards: Card[] = assassins;

  onCardChange(cards: Card[]) {
    console.log(cards);
  }

  log() {
    alert(this.title + ' copied to the clipboard');
  }
}
