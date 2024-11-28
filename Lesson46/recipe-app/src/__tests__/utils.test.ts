import { emailPattern } from "../utils";

test("emailPattern should match valid email address", () => {
  expect(emailPattern.test("anna@hotmail.com")).toBe(true);
});

test("emailPattern should not match invalid email address", () => {
  expect(emailPattern.test("anna@hotmailcom")).toBe(false);
});

test("emailPattern should not match an email address containing space", () => {
  expect(emailPattern.test("an na@hotmail.com")).toBe(false);
});

test("emailPattern should not match an email address without @ sign", () => {
  expect(emailPattern.test("annahotmail.com")).toBe(false);
});
