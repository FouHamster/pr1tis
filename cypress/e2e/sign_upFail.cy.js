describe('Cypress Test',() => {
    it ('None-existent passed',() => {
        cy.fixture('signUp').then(data => {
            cy.log('Переxод на страницу регистрации')
            cy.visit(data.main_url)
  
            cy.log('Ввод логина')
            cy.get('input[autocomplete="username"]')
              .type(data.new_login)
  
            cy.log('Ввод email')
            cy.get('input[class="form-input--email form-input"]')
              .type(data.new_email)
  
            cy.log('Ввод пароля')
            cy.get('div[class="registration-form__label"]:nth-child(3)').find('input[autocomplete="new-password"]')
              .type(data.new_password)
  
            cy.log('Ввод пароля')
            cy.get('div[class="registration-form__label"]:nth-child(4)').find('input[autocomplete="new-password"]')
              .type(data.new_password)
  
            cy.log('Клик по кнопке "Войти"')
            cy.get(':nth-child(4) > .button')
              .click()

            cy.log('Ввод Фамилии')
            cy.get('[style=""] > :nth-child(1) > .form-control--medium > .form-input--text')
            
            
            cy.log('Ввод Имени')
            cy.get(':nth-child(2) > .form-control--medium > .form-input--text')
             


            cy.log('Клик по кнопке "Создать аккаунт"')  
            cy.get(':nth-child(3) > .button')
              .click()
        })
    })
  })