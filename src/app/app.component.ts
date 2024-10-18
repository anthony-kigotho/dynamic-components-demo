import { Component, Type } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DynamicComponent } from './dynamic/dynamic.component';
import { NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgComponentOutlet],
  template: `
    <button (click)="createComponent()">Create Dynamic Component</button>
    <button (click)="destroyComponent()">Destroy Dynamic Component</button>
    <ng-container [ngComponentOutlet]="dynamicComponent"></ng-container>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'dynamic-components-demo';

  dynamicComponent: Type<DynamicComponent> | null = null;

  createComponent() {
    this.dynamicComponent = DynamicComponent;
  }

  destroyComponent() {
    this.dynamicComponent = null
  }
}

// import { Component, viewChild, ViewContainerRef } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { DynamicComponent } from './dynamic/dynamic.component';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet],
//   template: `
//     <ng-container #anchor></ng-container> //acts as the placeholder for where the dynamic component will be inserted.

//     <button (click)="createComponent()">Create Dynamic Component</button>
//   `,
//   styleUrl: './app.component.css',
// })
// export class AppComponent {
//   title = 'dynamic-components-demo';

//   vcr = viewChild('anchor', { read: ViewContainerRef }); //Returns a Signal
//   createComponent() {
//     this.vcr()?.createComponent(DynamicComponent);
//   }
// }

// import { Component, inject, ViewContainerRef } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { DynamicComponent } from './dynamic/dynamic.component';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet],
//   template: `
//     <button (click)="createComponent()">Create Dynamic Component</button>
//   `,
//   styleUrl: './app.component.css',
// })
// export class AppComponent {
//   title = 'dynamic-components-demo';

//   vcr = inject(ViewContainerRef);
//   createComponent() {
//     this.vcr.createComponent(DynamicComponent);
//   }
// }
