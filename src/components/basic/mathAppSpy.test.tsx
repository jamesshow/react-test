//ref: https://medium.com/@rickhanlonii/understanding-jest-mocks-f0046c68e53c
import * as app from "./mathApp";
import * as math from "./math";

describe('spy test', () => {

  test("calls math.add", () => {

    const addMock = jest.spyOn(math, "add");
  
    // calls the original implementation
    expect(app.doAdd(1, 2)).toEqual(3);
  
    // and the spy stores the calls to add
    expect(addMock).toHaveBeenCalledWith(1, 2);

    //==== need to restore the function otherwise the following call will be faied
    addMock.mockRestore();
  
  });
  
  test("calls math.add implementation", () => {

    const addMock = jest.spyOn(math, "add");
  
    //override the implementation
    addMock.mockImplementation(() => 100);
    expect(app.doAdd(1, 2)).toEqual(100);
  
    // restore the original implementation
    addMock.mockRestore();
    expect(app.doAdd(1, 2)).toEqual(3);
  
    addMock.mockRestore();

  });

})
