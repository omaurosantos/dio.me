import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan(amount: number): void {
    if (this.validateLoanStatus()) {
      this.balance += amount; // Adiciona o valor do empréstimo ao saldo
      console.log(`Você pegou um empréstimo de ${amount}. Saldo atual: ${this.balance}`);
    } else {
      console.log('Empréstimo não permitido. Conta inválida.');
    }
  }

  private validateLoanStatus = (): boolean => {
    return true;
  }
}
