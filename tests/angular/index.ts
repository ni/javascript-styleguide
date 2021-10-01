// Angular TypeScript and Inline Template Smoke Test
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-root',
    template: 'Hello <span [(id)]="name">{{name}}</span>!',
    styles: [`
        span {
            font-weight: bold;
        }
    `]
})
export class AppComponent {
    @Input() public name = 'Angular';
}
