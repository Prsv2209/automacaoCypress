const locators = {

        SITE:
        {
            URL: 'http://prova.stefanini-jgr.com.br/teste/qa/'
        },

        CAMPOS:
        {
            NOME:           '#name',
            EMAIL:          '#email',
            SENHA:          '#password',
            BTN_CADASTRAR:  '#register'
        },

        NOTIFICACAO:
        {
            NOTIFIC_NOME:   '//p[.=\'O campo Nome é obrigatório.\']',
            NOTIFIC_EMAIL:  '//p[.=\'O campo E-mail é obrigatório.\']',
            NOTIFIC_SENHA:  '//p[.=\'O campo Senha é obrigatório.\']'
        },

        VALIDACAO:
        {
            TIT_USER_CAD:   '.table-title',
            TIT_USER_NOME:  'table > :nth-child(2)',
            TIT_USER_EMAIL: 'table > :nth-child(3)',
            TIT_USER_ACOES: 'table > :nth-child(4)',

            USER_NOME:      '#tdUserName1',
            USER_EMAIL:     '#tdUserEmail1',
            USER_ACAO:      '#removeUser1'
        }


}
export default locators;