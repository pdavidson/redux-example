import {expect} from 'chai';
import {List, Map} from 'immutable';

describe('immutability', () => {

	describe('a number', () => {

		function increment(currentState) {
			return currentState + 1;
		}

		it('is immutable', () => {
			let state = 42;
			let nextState = increment(state);

			expect(state).to.equal(42);
			expect(nextState).to.equal(43);

		});

	});


	describe('a list', () => {
		function addMovie(currentState, movie) {
      		return currentState.push(movie);
    	}

    	it ('is immutable', () => {
    		let state = List.of ('Trainspotting', '28 Days Later');
    		let nextState = addMovie(state, 'Sunshine');

    		expect(state).to.equal(List.of(
    			'Trainspotting',
    			'28 Days Later'
			));

			expect(nextState).to.equal(List.of(
				'Trainspotting',
    			'28 Days Later',
    			'Sunshine'
			));
    	});

	});


	describe('a tree', () => {
		function addMovie(currentState, movie) {
			let newState = currentState.get('movies').push(movie);
			return currentState.set('movies', newState);
    	} 

    	it ('is immutable', () => {
    		let state = Map({
    			movies: List.of('Trainspotting', '28 Days Later')
    		})

    		let nextState = addMovie(state, 'Sunshine');

    		expect(nextState).to.equal(Map({
		        movies: List.of(
		          'Trainspotting',
		          '28 Days Later',
		          'Sunshine'
		        )
		      }));

			expect(state).to.equal(Map({
				movies: List.of(
					'Trainspotting',
					'28 Days Later'
				)
			}));
    	})

	})
})