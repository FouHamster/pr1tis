describe('Cypress Test',() => {
    it ('None-existent passed',() => {
        cy.fixture('signIn').then(data => {
            cy.log('Переxод на страницу автозации')
            cy.visit(data.main_url)
  
            cy.log('Ввод существующего логина')
            cy.get('input[class="form-input--text form-input"]')
                .type(data.login)

            cy.log('Ввод существующего пароля')
            cy.get('input[class="form-input--password form-input"]')
              .type(data.password)

            cy.log('Клик по кнопке "Войти')
            cy.get('div[class="login-form__button"] button[type="submit"]')
              .click()

            cy.log('Выбор роли')
            cy.get('.page-nav__role-block > .button')
              .click()

            cy.log('Выбор организации')
            cy.get('.select-role-form > :nth-child(1)')
              .click()

            cy.log('Выбор новой организации')
            cy.get('.variants-company > :nth-child(2)')
              .click()
              cy.fixture('application').then(data => {
                    cy.log('Название организации')
                    cy.get(':nth-child(1) > .form-control--medium > .form-input--text')
                    .type(data.name_org)

                    cy.log('Адресс организации')
                    cy.get(':nth-child(2) > .form-control--medium > .form-input--text')
                    .type(data.adress_org)

                    cy.log('Описание организации')
                    cy.get('.form-area')
                    .type(data.title)

                    cy.log('Клик "Добавить"')
                    cy.get('.create-company-form__description-block > .button')
                    .click()

                    cy.log('Клик "Заявки"')
                    cy.get(':nth-child(3) > .menu-item__item-name')
                    .click()
              })
        })
    })
})