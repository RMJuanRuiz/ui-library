import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

import { Card } from './card.model';

@Component({
  selector: 'lib-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
})
export class CardListComponent {
  @Input() cards: Card[] = [];
  @Output() cardChange = new EventEmitter<Card[]>();

  sortCards(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.cards, event.previousIndex, event.currentIndex);

    this.cardChange.emit(this.cards);
  }
}
