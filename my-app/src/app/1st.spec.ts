// Basic Test that uses a function to return a value for its matcher
const returnName = () => {
    return "Mario";
}

describe("Testing return of function", () => {
    it('Name is Mario', () => {
        expect("Mario").toBe(returnName());
  });
});



// List of custom validators
let customValidator = {
    validateYear: () => {
        return {
            compare: (actualYear: number, providedYear: number) => {
                let result = {pass:false, message:''};

                if(providedYear == actualYear){
                    result.pass = true;
                } 
                else{
                    result.pass = false;
                    result.message = `The year ${actualYear} was expected | [${providedYear}] was provided`;
                }
                return result;
            }
        }
    },
    validateAge: () => {
        return {
            compare: (actualAge: number, providedAge: number) => {
                let result = {pass: false, message: ''};

                if(providedAge < actualAge){
                    result.pass = false;
                    result.message = `Yikes [${providedAge}] years old, you're younger than [${actualAge}]`;
                }
                else if (providedAge > actualAge){
                    result.pass = false;
                    result.message = `What's a [${providedAge}] years old doing here, go reminiscent about plowing the fields grandpa, I need a [${actualAge}]`;
                }
                else if (providedAge == actualAge){
                    result.pass = true;
                }
                else{
                    result.pass = false;
                    result.message = `[${providedAge}] this is an impossible age`;
                }

                return result;
            }
        }
    }
};


describe("Validate Year", () => {

    beforeEach(() => {
        jasmine.addMatchers(customValidator);
    })

    const requiredYear = 2022;
    let providedYear = 2022;

    it(`Required Year [${requiredYear}] | Provided Year [${providedYear}]`, () => {
        expect(requiredYear).validateYear(providedYear);
    })
});

describe("Validate Age", () => {

    beforeEach(() => {
        jasmine.addMatchers(customValidator);
    })

    const requiredAge = 18;
    let providedAge = 18 ;

    it(`Your age of [${providedAge}] is exactly the same as [${requiredAge}]`, () => {
        expect(requiredAge).validateAge(providedAge);
    })
});

