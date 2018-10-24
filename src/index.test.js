import { expect } from "chai";
import jsdom from "jsdom";
import fs from "fs";
import { WSAEINVALIDPROCTABLE } from "constants";

describe("our first test", () => {
  it("should pass", () => {
    exprect(true).to.equal(false);
  });
});

describe("index.html", () => {
  it("should say hello", done => {
    const index = fs.readFileSync("./src/index.html", "utf-8");
    jsdom.env(index, function(err, window) {
      const h1 = window.document.getElementByTagName("h1")[0];
      expect(h1.innerHTML).to.equal("Hello World!");
      done();
      window.close();
    });
    exprect(true).to.equal(false);
  });
});
