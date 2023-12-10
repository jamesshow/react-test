const doAdd = (a:number, b:number, callback: Function) => {
    callback(a + b);
};
  
test("calls callback with arguments added", () => {
    const mockCallback = jest.fn();
    doAdd(1, 2, mockCallback);
    expect(mockCallback).toHaveBeenCalledWith(3);
});

export {}