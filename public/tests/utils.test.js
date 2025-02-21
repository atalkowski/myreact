import { mapToHTML } from "../js/utils.js";

const text1 = "hello world\n line 2 here!";
const html1 = "<div class='htmltext'>hello world\n line 2 here!</div>";
const yaml1 = "<div class='yamltext'>hello&nbsp;world\n<br/	>&nbsp;line&nbsp;2&nbsp;here!</div>";

/* Mocha version:
const assert = require("assert");
describe("mapToHTML function", () => {
  it("mapToHTML of text1 for html extension should be html1", () => {
     assert.equal(mapToHTML(text1, "html"), html1);   
   });
});

describe("mapToHTML function", () => {   
  it("mapToHTML of text1 for yaml extension should be yaml1", () => {
     assert.equal(mapToHTML(text1, "yaml"), yaml1);   
   });
});
*/

test('mapToHTML of text1 for html extension should be html1', () => {
  expect(mapToHTML(text1, "html")).toBe(html1);
});

