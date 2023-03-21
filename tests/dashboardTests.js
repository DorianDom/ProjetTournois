/*import ejs from "ejs";
import { JSDOM } from "jsdom";
import fs from "fs";
import { expect } from "chai"
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const targetFile = resolve(__dirname, "../src/views/index.ejs");

describe('dashboard page tests', () => {
    let dom;
    let container;

    beforeEach(() => {
        const tournaments = [{ id: "1", name: "mon tournoi", participants: [{ id: "1", name: "Ana" }] }, { id: "2", name: "mon 2eme tournoi", participants: [{ id: "1", name: "Ana" }, { id: "2", name: "Bob" }] }]
        ejs.renderFile(targetFile, { tournaments }, function (err, htmlString) {
            if (err) {
                console.log(err);
                expect(err).to.be.null
                return
            }

            dom = new JSDOM(htmlString, {}, { runScripts: "dangerously" });
            container = dom.window.document.body;
        });
    });

    it('Should render', () => {

        const list = container.querySelectorAll("ul > li")
        expect(list.length).to.eql(2);
    });
});*/
