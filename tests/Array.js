require('../ES6.js');
require('./suitest.js');

/**
 * ------------------------------------------------------------
 * Array
 * ------------------------------------------------------------
**/

void function(__is__)
{
	/*
	 Array.of
	*/

	new Suitest('Array.of')

	.test('Array.of: returns Array', function()
	{
		this
			.describe("type of Array.of(0, 1) is '[object Array]'")
			.exec(__is__.call(Array.of(0, 1)), '[object Array]')
			.done();
	})

	.test('Array.of: converting a variable number of argument to array', function()
	{
		this
			.describe("Array.of(0, 1) are equal [0, 1]'")
			.exec((Array.of(0, 1).toString()), [0, 1].toString()).done();
	});

	/*
	 Array.from
	*/

	new Suitest('Array.from')

	.test('Array.from: returns Array', function()
	{
		this
			.describe("type of Array.from('01') is [object Array]'")
			.exec(__is__.call(Array.from('01')), '[object Array]').done();
	})

	.test('Array.from: converting a string to array', function()
	{
		this
			.describe("Array.from('01') is [0, 1]'")
			.exec(Array.from('01').toString(), [0, 1].toString()).done();
	})

	.test('Array.from: array from arguments', function()
	{
		this
			.describe("Array.from(arguments) converted to [0, 1]")
			.exec(function() {
				return Array.from(arguments);
		}(0, 1), [0, 1].toString()).done();
	});

}(Object.prototype.toString);
