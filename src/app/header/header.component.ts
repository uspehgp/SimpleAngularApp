import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor() {
  }

  // @Output()
  pageRequested = 1;

  @Output()
  pageGangedEvent = new EventEmitter<number>();

  onChangePage(page: number) {
    console.log('page ' + page + 'clicked');
    this.pageRequested = page;
    this.pageGangedEvent.emit(page);
  }


}
