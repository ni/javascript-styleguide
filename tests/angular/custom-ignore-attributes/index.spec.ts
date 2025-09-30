// Angular Test Spec Custom Ignore Attributes Test
import { Component, Input, ViewChild } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';

@Component({
    template: '<div custom-attribute="i18n-should-be-ignored-in-test">missing i18n should be ignored</div>'
})
class MyComponent {
    @Input() public attr = false;
    @ViewChild('div') public div!: HTMLDivElement;
    public myMethod(): void {}
}

describe('MyComponent', () => {
    let hostComponent!: MyComponent;
    let fixture!: ComponentFixture<MyComponent>;

    it('should have a div', async () => {
        await fixture.whenStable();

        expect(hostComponent.div).toBeDefined();
        expect(hostComponent.myMethod).not.toHaveBeenCalled();
    });
});
