import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kendo-ui-misc-ngcc';
  onButtonClick() {}
  chips = [ "Chips", "Snack", "Smack"];
}
