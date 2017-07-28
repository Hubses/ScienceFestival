import { TestBed, inject } from '@angular/core/testing';

import { NewsFeedComponent } from './news-feed.component';

describe('a news-feed component', () => {
	let component: NewsFeedComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				NewsFeedComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([NewsFeedComponent], (NewsFeedComponent) => {
		component = NewsFeedComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});