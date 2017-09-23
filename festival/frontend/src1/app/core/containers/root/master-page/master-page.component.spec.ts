import { TestBed, inject } from '@angular/core/testing';

import { MasterPageComponent } from './master-page.component';

describe('a master-page component', () => {
	let component: MasterPageComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				MasterPageComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([MasterPageComponent], (MasterPageComponent) => {
		component = MasterPageComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});