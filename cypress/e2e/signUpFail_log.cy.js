describe('Cypress Test',() => {
    it ('None-existent failed',() => {
        cy.fixture('signUp').then(data => {
            cy.log('Переxод на страницу регистрации')
            cy.visit(data.main_url)
  
            cy.log('Ввод логина')
            cy.get('input[autocomplete="username"]')
              .type(data.none_existent_login)
  
            cy.log('Ввод email')
            cy.get('input[class="form-input--email form-input"]')
              .type(data.none_existent_email)
   
            cy.log('Ввод пароля')
            cy.get('div[class="registration-form__label"]:nth-child(3)').find('input[autocomplete="new-password"]')
              .type(data.none_existent_password)
  
            cy.log('Ввод пароля')
            cy.get('div[class="registration-form__label"]:nth-child(4)').find('input[autocomplete="new-password"]')
              .type(data.none_existent_password)
  
            cy.log('Клик по кнопке "Войти"')
            cy.get(':nth-child(4) > .button')
              .click()
  
            cy.log('Проверка, что появился элемент сигнализирующий об ошибке')
            cy.get(':nth-child(1) > .form-error > span')
              .should('exist')
                        
            cy.log('Проверка, что появился элемент сигнализирующий об ошибке2')
            cy.get(':nth-child(3) > .form-error')
              .should('exist')
            
        })
    })
})