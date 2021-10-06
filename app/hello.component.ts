import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
    <h1>Hello Browser!</h1>
    You're using: <pre>{{ window.navigator.userAgent }}</pre>
  `,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {

  @Input() window: Window;

}
