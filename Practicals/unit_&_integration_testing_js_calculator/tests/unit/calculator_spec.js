var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('should be able to add',function () {
    calculator.previousTotal = 4
    calculator.add(1)
    const actual = calculator.runningTotal
    assert.strictEqual(actual, 5)
  })

  it('should be able to subtract', function () {
    calculator.previousTotal = 7
    calculator.subtract(4)
    const actual = calculator.runningTotal
    assert.strictEqual(actual, 3)
  })

  it('should be able to multiply', function () {
    calculator.previousTotal = 3
    calculator.multiply(5)
    const actual = calculator.runningTotal
    assert.strictEqual(actual, 15)
  })

  it('should be able to divide', function () {
    calculator.previousTotal = 21
    calculator.divide(7)
    const actual = calculator.runningTotal
    assert.strictEqual(actual, 3)
  })

  it('should be able to concatenate multiple number button clicks', function () {
    calculator.newTotal = false
    calculator.runningTotal = 2
    calculator.numberClick(5)
    const actual = calculator.runningTotal
    assert.strictEqual(actual, 25)
  })

  it('should be able to chain multiple operations together', function () {
    calculator.numberClick(5)
    calculator.operatorClick('-')
    calculator.numberClick(2)
    calculator.operatorClick('+')
    calculator.numberClick(3)
    calculator.operatorClick('=')
    const actual = calculator.runningTotal
    assert.strictEqual(actual, 6)
  })

  it('should be able to clear the running total without affecting the calculation', function () {
    calculator.numberClick(5)
    calculator.operatorClick('-')
    calculator.numberClick(2)
    calculator.clearClick()
    calculator.numberClick(3)
    calculator.operatorClick('=')
    const actual = calculator.runningTotal
    assert.strictEqual(actual, 2)
  })


});
