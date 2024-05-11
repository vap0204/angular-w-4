import { Component, Input } from '@angular/core';

type LightColor = 'red' | 'yellow' | 'green';

@Component({
  selector: 'app-signal-controller',
  template: `
    <div class="traffic-light" [class]="orientation">
      <div class="light red" [class.active]="currentLight === 'red'"></div>
      <div class="light yellow" [class.active]="currentLight === 'yellow'"></div>
      <div class="light green" [class.active]="currentLight === 'green'"></div>
    </div>
  `,
  styleUrls: ['./signal-controller.component.scss'],
  standalone: true
})
export class SignalControllerComponent {
  @Input() orientation: 'vertical' | 'horizontal' = 'vertical';
  @Input() initialSignal: LightColor = 'red';
  @Input() urgentMode: boolean = false;

  currentLight: LightColor = this.initialSignal;

  constructor() {
    this.changeLights();
  }

  changeLights() {
    const sequence: LightColor[] = ['green', 'yellow', 'red'];
    let index = sequence.indexOf(this.currentLight);
    setInterval(() => {
      if (!this.urgentMode) {
        this.currentLight = sequence[(index = (index + 1) % sequence.length)];
      }
    }, 1000);
  }
}
