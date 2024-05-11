import { Component } from '@angular/core';
import { SignalControllerComponent } from '../signal-controller/signal-controller.component'; // Adjust the path as necessary

@Component({
  selector: 'app-crossroad',
  template: `
    <div class="control-panel">
      <app-signal-controller orientation="vertical" initialSignal="red" [urgentMode]="urgent"></app-signal-controller>
      <div class="inline">
        <app-signal-controller orientation="horizontal" initialSignal="green" [urgentMode]="urgent"></app-signal-controller>
        <button
          aria-label="Activate urgent mode"
          [disabled]="isCoolingDown"
          [class]="urgent ? 'inactive' : ''"
          (click)="triggerUrgentMode()"
        >Emergency</button>
        <app-signal-controller orientation="horizontal" initialSignal="green" [urgentMode]="urgent"></app-signal-controller>
      </div>
      <app-signal-controller orientation="vertical" initialSignal="red" [urgentMode]="urgent"></app-signal-controller>
    </div>
  `,
  styleUrls: ['./crossroad.component.scss'],
  imports: [SignalControllerComponent],
  standalone: true
})
export class CrossroadComponent {
  public urgent = false;
  public isCoolingDown = false;
  public cooldownTime = 10;

  triggerUrgentMode() {
    this.urgent = true;
    setTimeout(() => {
      this.urgent = false;
      this.isCoolingDown = true;
      setTimeout(() => {
        this.isCoolingDown = false;
      }, this.cooldownTime * 1000);
    }, this.cooldownTime * 1000);
  }
}
