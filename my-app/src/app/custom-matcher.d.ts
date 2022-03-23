declare namespace jasmine {
    interface Matchers<T> {
        validateYear(expected: any, expectationFailOutput?: any): boolean;
        validateAge(expected: any, expectationFailOutput?: any): boolean;
    }
}