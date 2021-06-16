import {Component, OnInit, ViewChild} from '@angular/core';
import {FooterComponent} from './footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // currentPage = 1;

  @ViewChild('footer', {static: true})
  footerComponent: FooterComponent;

  ngOnInit(): void {
  }

  // onPageChange(page: number) {
  //   this.currentPage = page;
  // }

  updateLastAccess() {
    console.log('The previous last accessed was: ', this.footerComponent.lastAccessed);
    this.footerComponent.lastAccessed = new Date().toString();
  }
}
