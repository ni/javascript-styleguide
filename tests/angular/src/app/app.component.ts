import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html'
})
export class AppComponent {
    @Input() public name = 'Angular';
}
