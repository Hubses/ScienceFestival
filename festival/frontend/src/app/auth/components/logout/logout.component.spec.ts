import { TestBed, inject } from '@angular/core/testing';

import { LogoutComponent } from './logout.component';

describe('a logout component', () => {
	let component: LogoutComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				LogoutComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([LogoutComponent], (LogoutComponent) => {
		component = LogoutComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});