import loc from './locators'


Cypress.Commands.add('AcessaSiteCadastro', () => {
    cy.visit(loc.SITE.URL)
})

Cypress.Commands.add('NaoPreencherCampos', () => {
    cy.get(loc.CAMPOS.NOME)
        .should('be.visible')
        .should('have.value', '')

    cy.get(loc.CAMPOS.EMAIL)
        .should('be.visible')
        .should('have.value', '')
    
    cy.get(loc.CAMPOS.SENHA)
        .should('be.visible')
        .should('have.value', '')
})

Cypress.Commands.add('ClicarCadastrar', () => {
    cy.get(loc.CAMPOS.BTN_CADASTRAR)
        .click()
})

Cypress.Commands.add('Notificacao', () => {
    cy.xpath(loc.NOTIFICACAO.NOTIFIC_NOME).should('be.visible')
    cy.xpath(loc.NOTIFICACAO.NOTIFIC_EMAIL).should('be.visible')
    cy.xpath(loc.NOTIFICACAO.NOTIFIC_SENHA).should('be.visible')
})

Cypress.Commands.add('PreencherCampoNome', (nome) => {
    cy.get(loc.CAMPOS.NOME)
        .type(nome)
})

Cypress.Commands.add('PreencherCampoEmail', (email) => {
    cy.get(loc.CAMPOS.EMAIL)
        .type(email)
})
Cypress.Commands.add('PreencherCampoSenha', (senha) => {
    cy.get(loc.CAMPOS.SENHA)
        .type(senha)
})


Cypress.Commands.add('Validacao', (nome, email) => {
    cy.get(loc.VALIDACAO.TIT_USER_CAD).should('contain.text', 'Usuários cadastrados')
    cy.get(loc.VALIDACAO.TIT_USER_NOME).should('contain.text', 'Nome')
    cy.get(loc.VALIDACAO.TIT_USER_EMAIL).should('contain.text', 'E-mail')
    cy.get(loc.VALIDACAO.TIT_USER_ACOES).should('contain.text', 'Ações')

    cy.get(loc.VALIDACAO.USER_NOME).should('contain.text', nome)
    cy.get(loc.VALIDACAO.USER_EMAIL).should('contain.text', email)
    cy.get(loc.VALIDACAO.USER_ACAO).should('contain.text', 'Excluir')
})

Cypress.Commands.add('ValidarMensagem', (mensagem) => {
    cy.contains(mensagem)  
})