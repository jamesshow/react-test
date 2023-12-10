//ref: https://medium.com/@rickhanlonii/understanding-jest-mocks-f0046c68e53c
import * as app from "./mathApp";
import * as math from "./math";

jest.mock("./math.tsx");

test("calls math.add", () => {
  app.doAdd(1, 2);
  expect(math.add).toHaveBeenCalledWith(1, 2);
});

test("calls math.subtract", () => {
  app.doSubtract(1, 2);
  expect(math.subtract).toHaveBeenCalledWith(1, 2);
});