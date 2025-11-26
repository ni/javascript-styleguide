import { Component, Input } from '@angular/core';

@Component({
    selector: 'angular-lib',
    standalone: true,
    /* Angular In-line Template Smoke Test */
    template: '<span i18n [(id)]="name" theme="non-localized-theme-id" title="This title should be localized." i18n-title>Hello {{name}}</span>!'
})
export class AngularLibraryComponent {
    @Input() public name = 'Angular';
}
