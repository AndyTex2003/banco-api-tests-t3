const request = require('supertest')
const { expect } = require('chai')
require('dotenv').config()
const { obterToken } = require ('../helpers/autenticacao')


describe('Contas', () => {
    let token

    beforeEach(async () => {
        token = await obterToken('julio.lima', 123456)
    })

    describe('GET /contas', () => {
        it('Deve listar todas as contas e retornar sucesso com 200', async () => {
            
            const resposta = await request(process.env.BASE_URL)
                .get('/contas')
                .set('Authorization', `Bearer ${token}`)

            
            expect(resposta.status).to.equal(200)
            expect(resposta.body.contas).to.be.an('array')
            
        })

        it('Cada conta deve possuir id, titular, saldo e ativa', async () => {

            const resposta = await request(process.env.BASE_URL)
                .get('/contas')
                .set('Authorization', `Bearer ${token}`)

            
            resposta.body.contas.forEach(conta => {
                expect(conta).to.have.property('id')
                expect(conta).to.have.property('titular')
                expect(conta).to.have.property('saldo')
                expect(conta).to.have.property('ativa')
            })
        
        })
    })

    describe('GET /contas/{id}', () => {
        it('Deve retornar sucesso com 200 quando o ID for válido', async () => {

            const resposta = await request(process.env.BASE_URL)
                .get('/contas/1')
                .set('Authorization', `Bearer ${token}`)

            
            expect(resposta.status).to.equal(200)            
            expect(resposta.body).to.include.keys('id', 'titular', 'saldo', 'ativa')
            expect(resposta.body.id).to.equal(1)
        })

        it('Deve retornar 401 quando não enviar token', async () => {

            const resposta = await request(process.env.BASE_URL)
                .get('/contas/1')

            
            expect(resposta.status).to.equal(401)
              
        })
        
    })
})
