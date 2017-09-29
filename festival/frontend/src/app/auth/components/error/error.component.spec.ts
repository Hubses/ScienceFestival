import { TestBed, inject } from '@angular/core/testing';

import { ErrorComponent } from './error.component';

describe('a error component', () => {
	let component: ErrorComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ErrorComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ErrorComponent], (ErrorComponent) => {
		component = ErrorComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});