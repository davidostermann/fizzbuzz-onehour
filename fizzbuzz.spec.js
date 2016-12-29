var FizzBuzz = require('./fizzbuzz');

describe('FizzBuzz game !',() =>{
	it('use FizzBuzz function with 7', () =>{
		expect(FizzBuzz.fizzBuzz(7)).toEqual(7);
	});
	it('use FizzBuzz function with 6', () =>{
		expect(FizzBuzz.fizzBuzz(6)).toEqual('Fizz');
	});
	it('use FizzBuzz function with 15', () =>{
		expect(FizzBuzz.fizzBuzz(15)).toEqual('FizzBuzz');
	});
	it('use FizzBuzz function with 10', () =>{
		expect(FizzBuzz.fizzBuzz(10)).toEqual('Buzz');
	});
	it('use FizzBuzz function with 3', () =>{
		expect(FizzBuzz.fizzBuzz(3)).toEqual('Fizz');
	});
	it('use FizzBuzz function with 4', () =>{
		expect(FizzBuzz.fizzBuzz(4)).toEqual(4);
	});
	it('use FizzBuzz function with 5', () =>{
		expect(FizzBuzz.fizzBuzz(5)).toEqual('Buzz');
	});
	it('use FizzBuzz function with 90', () =>{
		expect(FizzBuzz.fizzBuzz(90)).toEqual('FizzBuzz');
	});
	it('use FizzBuzz function with 1', () =>{
		expect(FizzBuzz.fizzBuzz(1)).toEqual(1);
	});
	
});