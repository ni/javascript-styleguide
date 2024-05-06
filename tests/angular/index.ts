// Angular TypeScript and Inline Template Smoke Test
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-root',
    template: '<span i18n [(id)]="name" theme="non-localized-theme-id" title="This title should be localized." i18n-title>Hello {{name}}</span>!',
    styles: [`
        span {
            font-weight: bold;
        }
    `]
})
export class AppComponent {
    @Input() public name = 'Angular';
}
