// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const { designEndpoint } = require("./constants");

Cypress.Commands.add('login', () => {
  const token = Cypress.env('token');
  cy.setCookie("meshplay-provider", "Meshplay");
  cy.setCookie("token", token);
});

Cypress.Commands.add("setReleaseTag", (version) => {
  cy.readFile("cypress/fixtures/capabilities.json", (err, data) => {
    if (err) {
      return console.error(err);
    };
  }).then((data) => {
    if (!version) {
      version = Cypress.env("releasetag")
    }
    data["package_version"] = version;
    data["package_url"] = `https://github.com/khulnasoft-lab/meshplay-extensions-packages/releases/download/${version}/provider-meshplay.tar.gz`
    cy.writeFile("cypress/fixtures/capabilities.json", JSON.stringify(data))
  });
});

Cypress.Commands.add("setMode", (mode) => {
  window.localStorage.setItem("mode", mode)
})

Cypress.Commands.add("interceptCapabilities", () => {
  cy.intercept('GET', '/api/provider/capabilities', { fixture: 'capabilities.json' }).as('getCapabilites')
})

Cypress.Commands.add("setViewPort", () => {
  cy.viewport(1500, 900)
})

Cypress.Commands.add("deleteDesign", (designId) => {
  cy.request({
    url: `${designEndpoint.absolutePath}/${designId}`,
    method: "DELETE"
  }).then(resp => {
    console.log("resp", resp)
    cy.log(resp.status)
  })
})

Cypress.Commands.add("disableCollaboration", () => {
  cy.request("POST", "http://localhost:9081/api/user/prefs", { "usersExtensionPreferences": { "canvasSettings": { "hideGrid": true, "snapToGrid": false, "collaborationIsEnabled": false }, "showTutorialVideo": false } })
})


Cypress.Commands.add("enableCollaboration", () => {
  cy.request("POST", "http://localhost:9081/api/user/prefs", { "usersExtensionPreferences": { "canvasSettings": { "hideGrid": true, "snapToGrid": false, "collaborationIsEnabled": true }, "showTutorialVideo": false } })
})