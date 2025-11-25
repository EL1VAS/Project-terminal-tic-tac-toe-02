import { checkIfNoMovesLeft } from "../board-printer";

test("checkIfNoMovesLeft should return true if there are no moves left", () => {
  const board = [
    ["X", "X", "O"],
    ["O", "O", "X"],
    ["X", "X", "O"],
  ];
  expect(checkIfNoMovesLeft(board)).toBe(true);
});

test('returns false if there are empty cells "_"', () => {
  const board = [
    ["_", "X", "O"],
    ["O", "_", "X"],
    ["X", "O", "O"],
  ];
  expect(checkIfNoMovesLeft(board)).toBe(false);
});
