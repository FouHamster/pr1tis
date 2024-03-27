describe('Cypress Test',() => {
    it ('None-existent passied',() => {
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

            cy.log('Просмотр уведомлений')
            cy.get('[href="/notification"] > .header__label')
              .click()  
        })
    })
  })
  