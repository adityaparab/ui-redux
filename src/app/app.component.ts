import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  @HostBinding('class') klass = 'flex flex-column';
  title = 'ui-redux';
}
