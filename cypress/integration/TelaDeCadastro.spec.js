    /// <reference types="cypress" />

describe('1# Realizar tentativa de cadastro sem o preenchimento de nenhuma informação', () => {
    context('Dado que eu esteja na tela de cadastro', () => {
        beforeEach(() => {
            cy.AcessaSiteCadastro()
        })
        
        context('Quando clico no botão "Cadastrar" ', () => {
            beforeEach(() => {
               cy.NaoPreencherCampos()
               cy.ClicarCadastrar()
            })
  
            it('Então é apresentado 3 mensagens de alerta nos campos obrigatórios', () => {
                cy.Notificacao()
            })
         })
    
    afterEach( () => {
        cy.wait(5000)
    })
    })
})

describe('2# Cadastrar um usuário em duplicidade', () => {
    context('Dado que eu esteja na tela de cadastro', () => {
        beforeEach('0',() => {
            cy.AcessaSiteCadastro()
        })
        
        context('E preencha os campos com informações válidas', () => {
            beforeEach('1', () => {
               cy.PreencherCampoNome('Teste QA')
               cy.PreencherCampoEmail('Teste@teste.com.br')
               cy.PreencherCampoSenha('1234567890')
               cy.ClicarCadastrar() 
               cy.Validacao('Teste QA', 'Teste@teste.com.br')
            })
            
            context('Quando preencho novamente os campos com os mesmos valores"', () => {
               beforeEach('2',() => {
               cy.PreencherCampoNome('Teste QA')
               cy.PreencherCampoEmail('Teste@teste.com.br')
               cy.PreencherCampoSenha('1234567890')
                cy.ClicarCadastrar()  
               });
                
               it('Então é apresentado os registros em duplicidade', () => {
                cy.Validacao('Teste QA', 'Teste@teste.com.br')
                })
            })
        afterEach( () => {
            cy.wait(5000)
        })
        })
    })
})

describe('3# Registrar um usuário sem subdominio de Email', () => {
    context('Dado que eu esteja na tela de cadastro', () => {
        beforeEach('0',() => {
            cy.AcessaSiteCadastro()
        })
        
        context('E preencho o campo de Email sem o subdominio de Email', () => {
            beforeEach('1', () => {
                cy.PreencherCampoNome('Teste QA')
                cy.PreencherCampoEmail('Teste@.com.br')
                cy.PreencherCampoSenha('1234567890')
            })
            
            context('Quando clico no botão "Cadastrar"', () => {
               beforeEach('2',() => {
                cy.ClicarCadastrar()  
               });
                
               it('Então é permitido o registro', () => {
                cy.Validacao('Teste QA', 'Teste@.com.br')
                })
            })
        afterEach( () => {
        cy.wait(5000)
        })
        })
    })
})

describe('4# Efetuar tentativa de cadastro sem o preenchimento do campo Nome', () => {
    context('Dado que eu esteja na tela de cadastro', () => {
        beforeEach('0',() => {
            cy.AcessaSiteCadastro()
        })
        
        context('E não preencho o campo de Nome', () => {
            beforeEach('1', () => {
                //cy.PreencherCampoNome('Teste QA')
                cy.PreencherCampoEmail('Teste@teste.com.br')
                cy.PreencherCampoSenha('1234567890')
            })
            
            context('Quando clico no botão "Cadastrar"', () => {
               beforeEach('2',() => {
                cy.ClicarCadastrar()  
               });
                
               it('Então é apresentado 1 mensagem de alerta com a frase "O campo Nome é obrigatório."', () => {
                cy.ValidarMensagem('O campo Nome é obrigatório.')
                })
            })
        afterEach( () => {
        cy.wait(5000)
        })
        })
    })
})

describe('5# Efetuar tentativa de cadastro sem o preenchimento do campo E-mail', () => {
    context('Dado que eu esteja na tela de cadastro', () => {
        beforeEach('0',() => {
            cy.AcessaSiteCadastro()
        })
        
        context('E não preencho o campo de E-mail', () => {
            beforeEach('1', () => {
                cy.PreencherCampoNome('Teste QA')
                //cy.PreencherCampoEmail('Teste@teste.com.br')
                cy.PreencherCampoSenha('1234567890')
            })
            
            context('Quando clico no botão "Cadastrar"', () => {
               beforeEach('2',() => {
                cy.ClicarCadastrar()  
               });
                
               it('Então é apresentado 1 mensagem de alerta com a frase "O campo E-mail é obrigatório."', () => {
                cy.ValidarMensagem('O campo E-mail é obrigatório.')
                })
            })
         })
    afterEach( () => {
    cy.wait(5000)
    })
    })
})

describe('6# Efetuar tentativa de cadastro sem o preenchimento do campo Senha', () => {
    context('Dado que eu esteja na tela de cadastro', () => {
        beforeEach('0',() => {
            cy.AcessaSiteCadastro()
        })
        
        context('E não preencho o campo de Senha', () => {
            beforeEach('1', () => {
                cy.PreencherCampoNome('Teste QA')
                cy.PreencherCampoEmail('Teste@teste.com.br')
                //cy.PreencherCampoSenha('1234567890')
            })
            
            context('Quando clico no botão "Cadastrar"', () => {
               beforeEach('2',() => {
                cy.ClicarCadastrar()  
               });
                
               it('Então é apresentado 1 mensagem de alerta com a frase "O campo E-mail é obrigatório."', () => {
                cy.ValidarMensagem('O campo Senha é obrigatório.')
                })
            })
         })
    afterEach( () => {
    cy.wait(5000)
    })
    })
})

describe('7# Preencher o campo Nome somente com o primeiro nome', () => {
    context('Dado que eu esteja na tela de cadastro', () => {
        beforeEach('0',() => {
            cy.AcessaSiteCadastro()
        })
        
        context('E digite somente o primeiro nome no campo pertinente', () => {
            beforeEach('1', () => {
                cy.PreencherCampoNome('Teste')
                cy.PreencherCampoEmail('Teste@teste.com.br')
                cy.PreencherCampoSenha('1234567890')
            })
            
            context('Quando clico no botão "Cadastrar"', () => {
               beforeEach('2',() => {
                cy.ClicarCadastrar()  
               });
                
               it('Então é apresentado 1 mensagem de alerta com a frase "Por favor, insira um nome completo."', () => {
                cy.ValidarMensagem('Por favor, insira um nome completo.')
                })
            })
         })
    afterEach( () => {
    cy.wait(5000)
    })
    })
})

describe('8# Preencher o campo Senha com um caractere', () => {
    context('Dado que eu esteja na tela de cadastro', () => {
        beforeEach('0',() => {
            cy.AcessaSiteCadastro()
        })
        
        context('E digite um caractere no campo de Senha', () => {
            beforeEach('1', () => {
                cy.PreencherCampoNome('Teste QA')
                cy.PreencherCampoEmail('Teste@teste.com.br')
                cy.PreencherCampoSenha('1')
            })
            
            context('Quando clico no botão "Cadastrar"', () => {
               beforeEach('2',() => {
                cy.ClicarCadastrar()  
               });
                
               it('Então é apresentado 1 mensagem de alerta com a frase "A senha deve conter ao menos 8 caracteres."', () => {
                cy.ValidarMensagem('A senha deve conter ao menos 8 caracteres.')
                })
            })
         })
    afterEach( () => {
    cy.wait(5000)
    })
    })
})

describe('9# Preencher o campo Senha com sete caracteres', () => {
    context('Dado que eu esteja na tela de cadastro', () => {
        beforeEach('0',() => {
            cy.AcessaSiteCadastro()
        })
        
        context('E digite sete caracteres no campo de Senha', () => {
            beforeEach('1', () => {
                cy.PreencherCampoNome('Teste QA')
                cy.PreencherCampoEmail('Teste@teste.com.br')
                cy.PreencherCampoSenha('1234567')
            })
            
            context('Quando clico no botão "Cadastrar"', () => {
               beforeEach('2',() => {
                cy.ClicarCadastrar()  
               });
                
               it('Então é apresentado 1 mensagem de alerta com a frase "A senha deve conter ao menos 8 caracteres."', () => {
                cy.ValidarMensagem('A senha deve conter ao menos 8 caracteres.')
                })
            })
         })
    afterEach( () => {
    cy.wait(5000)
    })
    })
})

describe('10# Realizar um cadastro de usuário válido', () => {
    context('Dado que eu esteja na tela de cadastro', () => {
        beforeEach(() => {
            cy.AcessaSiteCadastro()
        })
        
        context('Quando preencho todos os campos pertinentes com valores válidos', () => {
            beforeEach(() => {
                cy.PreencherCampoNome('Teste QA')
                cy.PreencherCampoEmail('Teste@teste.com.br')
                cy.PreencherCampoSenha('1234567890')
                cy.ClicarCadastrar()
            })
  
            it('Então é apresentado o registro do cadastro efetuado com sucesso', () => {
                cy.Validacao('Teste QA', 'Teste@teste.com.br')
            })
         })
    
    afterEach( () => {
        cy.wait(5000)
    })
    })
})


/*
describe('Teste', () => {
    it('test', () => { 
        cy.AcessaSiteCadastro()
        cy.NaoPreencherCampos()
        cy.ClicarCadastrar()
        cy.contains('O campo Nome é obrigatório.').should('exist')
        //cy.Notificacao()
    })
});
*/