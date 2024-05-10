// Angular TypeScript and Inline Template Custom Ignore Attributes Test
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-root',
    template: '<span i18n custom-field="test-custom-field">Hello {{name}}</span>!',
    styles: [`
        span {
            font-weight: bold;
        }
    `]
})
export class AppComponent {
    @Input() public name = 'Angular';
}
