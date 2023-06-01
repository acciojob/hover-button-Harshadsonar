() => { 
  cy.visit(baseUrl + "/main.html"); 
  cy.get('#btn')
    .should('have.css', 'background-color', 'rgb(0, 0, 0)')
    .should('have.css', 'color', 'rgb(255, 255, 255)')
    .should('have.css', 'border-radius', '5px')
    .should('have.css', 'border', '0px none rgb(255, 255, 255)')
    .should('have.attr', 'type', 'submit'); 
}

