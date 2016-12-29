var App = require('./fizzbuzz');
describe('FizzBuzz game !',() =>{
	it('use FizzBuzz function with 1', () =>{
		expect(App.fizzBuzz(1)).toEqual(1);
	});
	it('use FizzBuzz function with 2', () =>{
		expect(App.fizzBuzz(2)).toEqual(2);
	});
	it('use FizzBuzz function with 3', () =>{
		expect(App.fizzBuzz(3)).toEqual('Fizz');
	});
	it('use FizzBuzz function with 4', () =>{
		expect(App.fizzBuzz(4)).toEqual(4);
	});
	it('use FizzBuzz function with 5', () =>{
		expect(App.fizzBuzz(5)).toEqual('Buzz');
	});
	it('use FizzBuzz function with 6', () =>{
		expect(App.fizzBuzz(6)).toEqual('Fizz');
	});
	it('use FizzBuzz function with 7', () =>{
		expect(App.fizzBuzz(7)).toEqual(7);
	});
	it('use FizzBuzz function with 8', () =>{
		expect(App.fizzBuzz(8)).toEqual(8);
	});
	it('use FizzBuzz function with 9', () =>{
		expect(App.fizzBuzz(9)).toEqual('Fizz');
	});
	it('use FizzBuzz function with 10', () =>{
		expect(App.fizzBuzz(10)).toEqual('Buzz');
	});
	it('use FizzBuzz function with 11', () =>{
		expect(App.fizzBuzz(11)).toEqual(11);
	});
	it('use FizzBuzz function with 12', () =>{
		expect(App.fizzBuzz(12)).toEqual('Fizz');
	});
	it('use FizzBuzz function with 13', () =>{
		expect(App.fizzBuzz(13)).toEqual(13);
	});
	it('use FizzBuzz function with 14', () =>{
		expect(App.fizzBuzz(14)).toEqual(14);
	});
	it('use FizzBuzz function with 15', () =>{
		expect(App.fizzBuzz(15)).toEqual('FizzBuzz');
	});
	it('use FizzBuzz function with 24', () =>{
		expect(App.fizzBuzz(24)).toEqual('Fizz');
	});
	it('use FizzBuzz function with 40', () =>{
		expect(App.fizzBuzz(40)).toEqual('Buzz');
	});
	it('use FizzBuzz function with 90', () =>{
		expect(App.fizzBuzz(90)).toEqual('FizzBuzz');
	});		
});