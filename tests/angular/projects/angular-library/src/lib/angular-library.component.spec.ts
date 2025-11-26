import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularLibraryComponent } from './angular-library.component';

describe('AngularLibraryComponent', () => {
    let fixture: ComponentFixture<AngularLibraryComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({ imports: [AngularLibraryComponent] });
        fixture = TestBed.createComponent(AngularLibraryComponent);
    });

    it('should create the component and render the title', () => {
        expect(fixture.componentInstance).toBeTruthy();

        fixture.detectChanges();

        const span: HTMLSpanElement = fixture.nativeElement.querySelector('span') as HTMLSpanElement;
        expect(span.textContent).toBe('Hello Angular');
    });
});
