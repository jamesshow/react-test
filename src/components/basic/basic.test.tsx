//ref: https://medium.com/@rickhanlonii/understanding-jest-mocks-f0046c68e53c
describe('test jest function', () => {

    test('returns undefined by default', () => {
        
        const mock = jest.fn();
        let result = mock('foo');

        expect(result).toBeUndefined();
        expect(mock).toHaveBeenCalled();
        expect(mock).toHaveBeenCalledTimes(1);
        expect(mock).toHaveBeenCalledWith('foo');
    })

    test("mock implementation", () => {

        const mock = jest.fn((str:string) => "bar");      
        expect(mock("foo")).toBe("bar");

    });

    test("also mock implementation", () => {
        
        const mock = jest.fn().mockImplementation(() => "bar");

        expect(mock("foo")).toBe("bar");
        expect(mock).toHaveBeenCalledWith("foo");
    });

    test("mock implementation one time", () => {

        const mock = jest.fn().mockImplementationOnce(() => "bar");
      
        expect(mock("foo")).toBe("bar");
        expect(mock).toHaveBeenCalledWith("foo");
      
        expect(mock("baz")).toBe(undefined);
        expect(mock).toHaveBeenCalledWith("baz");

    });

    test("mock return value", () => {

        const mock = jest.fn();
        mock.mockReturnValue("bar");
      
        expect(mock("foo")).toBe("bar");
        expect(mock).toHaveBeenCalledWith("foo");

    });

    test("mock promise resolution", () => {

        const mock = jest.fn();
        mock.mockResolvedValue("bar");
      
        expect(mock("foo")).resolves.toBe("bar");
        expect(mock).toHaveBeenCalledWith("foo");

    });

})

export {} //to make npm start work