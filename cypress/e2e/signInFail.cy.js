describe('Cypress Test2',() => {
    it ('None-existent failed',() => {
      cy.fixture('signIn').then(data => {
          cy.log('Переxод на страницу автозации')
          cy.visit(data.main_url)
  
          cy.log('Ввод несуществующего логина')
          cy.get('input[class="form-input--text form-input"]')
              .type(data.none_existent_login)
          cy.log('Ввод несуществующего пароля')
          cy.get('input[class="form-input--password form-input"]')
            .type(data.none_existent_password)
          cy.log('Клик по кнопке "Войти')
          cy.get('div[class="login-form__button"] button[type="submit"]')
            .click()
      })
    })
  })