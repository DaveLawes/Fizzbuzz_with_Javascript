describe('FizzBuzz', function() {

  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new FizzBuzz();
  });

  describe('It returns Fizz for multiples of 3', function() {
    it('Returns Fizz when given 3', function() {
      expect(fizzbuzz.play(3)).toEqual('Fizz');
    });
  });

  describe('It returns Buzz for multiples of 5', function() {
    it('Returns Buzz when given 5', function() {
      expect(fizzbuzz.play(5)).toEqual('Buzz');
    });
  });

  describe('It returns FizzBuzz for multiples of 15', function() {
    it('Returns FuzzBuzz when given 15', function() {
      expect(fizzbuzz.play(15)).toEqual('FizzBuzz');
    });
  });

  describe('It returns the number otherwise', function() {
    it('Returns 1 when given 1', function() {
      expect(fizzbuzz.play(1)).toEqual(1);
    });
  });
});
