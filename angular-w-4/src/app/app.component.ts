import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CrossroadComponent } from "./crossroad/crossroad.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CrossroadComponent]
})
export class AppComponent {
  title = 'angular-w-4';
}
