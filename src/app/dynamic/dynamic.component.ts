import { Component, input } from '@angular/core';

@Component({
  selector: 'app-dynamic',
  standalone: true,
  imports: [],
  template: `<p>Dynamic component content! {{ text() }}</p>`,
  styleUrl: './dynamic.component.css'
})
export class DynamicComponent {
  text = input<string>();
}
