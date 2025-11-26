import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({ imports: [AppComponent] });
    });

    it('should create the application and render the title', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();

        fixture.detectChanges();

        const span: HTMLSpanElement = fixture.nativeElement.querySelector('span') as HTMLSpanElement;
        expect(span.textContent).toBe('Hello Angular');
    });
});
