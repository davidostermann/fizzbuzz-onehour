// 1,2,3 codez ! //

module.exports = {

	fizzBuzz : function(n) {

		// solution sans else
		/** /
		const isMultipleOf3 = (n%3 === 0);
		const isMultipleOf5 = (n%5 === 0);
		if(isMultipleOf3 && isMultipleOf5) return 'FizzBuzz';
		if(isMultipleOf3) return 'Fizz';
		if(isMultipleOf5) return 'Buzz';
		return n;
		/**/

		/** /
		// solution avec switch case
		const isMultipleOf3 = (n%3 === 0);
		const isMultipleOf5 = (n%5 === 0);
		switch (true) {
			case (isMultipleOf3 && isMultipleOf5) :
				return 'FizzBuzz';
			case (isMultipleOf3) :
				return 'Fizz';
			case (isMultipleOf5) :
				return 'Buzz';
			default: 
				return n;
		}
		/**/

		// solution sans variable
		/**/
		if(!(n%15)) { return 'FizzBuzz'; }
		if(!(n%3)) { return 'Fizz'; }
		if(!(n%5)) { return 'Buzz'; }
		return n;
		/**/

		//Mauvaise solution 1 (pas clair : ecrit sans tdd)
		/** /
		let str = '';
		if(!(n%3)) str = 'Fizz';
		if(!(n%5)) (str || '') += 'Buzz';
		return (str === '') ? n : str;
		/**/

		//Mauvaise solution 2 (pas clair : ecrit sans tdd)
		/** /
		let str;
		if(!(n%3)) str = 'Fizz';
		if(!(n%5)) str = (str || '') + 'Buzz';
		return str || n;
		/**/

	}
}
