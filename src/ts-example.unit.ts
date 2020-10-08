import { expect } from "chai";
import { helloWorld } from "./ts-example";

describe("ts-example", () => {
    it("should say 'Hello World!'", () => {
        expect(helloWorld()).to.equal("Hello World!");
    });
});
