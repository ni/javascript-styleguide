// Angular test spec smoke test
import { Component, Input, ViewChild } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';

@Component({
    template: '<div [(attr)] = true></div>'
})
class MyComponent {
    @Input() public attr = false;
    @ViewChild('div') public div: HTMLDivElement;
}
/* tslint:disable-next-line */
describe('MyComponent', () => {
    let hostComponent: MyComponent;
    let fixture: ComponentFixture<MyComponent>;

    it('should have a div', async () => {
        await fixture.whenStable();

        expect(hostComponent.div).toBeDefined();
    });
});
