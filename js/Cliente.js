export default class Cliente {
    constructor(nome, rg, telefone, email, qntPessoas, dataCheckIn, dataCheckOut, formaDePagamendo) {
        this.nome = nome;
        this.rg = rg;
        this.telefone = telefone;
        this.email = email;
        this.hospedagem = {
            numeroDoQuarto: undefined,
            hospedes: qntPessoas,
            entrada: dataCheckIn,
            saida: dataCheckOut,
        }
        this.formaDePagamendo = formaDePagamendo;
    }
    solicitarReserva() {
        
    }
    checkIn() {

    }
    checkOut() {
        
    }
}

