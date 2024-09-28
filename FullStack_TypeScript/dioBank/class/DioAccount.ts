export abstract class DioAccount {
  private name: string;
  private readonly accountNumber: number;
  protected balance: number = 0;  // Permite o acesso pelas subclasses
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  setName(name: string): void {
    this.name = name;
    console.log('Nome alterado com sucesso!');
  }

  getName(): string {
    return this.name;
  }

  deposit(amount: number): void {
    if (this.validateStatus() && amount > 0) {
      this.balance += amount;
      console.log(`Você depositou ${amount}. Saldo atual: ${this.balance}`);
    } else {
      console.log('Depósito falhou');
    }
  }

  withdraw(amount: number): void {
    if (this.validateStatus() && this.balance >= amount) {
      this.balance -= amount;
      console.log(`Você sacou ${amount}. Saldo atual: ${this.balance}`);
    } else {
      console.log('Saque não permitido. Saldo insuficiente ou conta inválida.');
    }
  }

  getBalance(): void {
    console.log(this.balance);
  }

  private validateStatus(): boolean {
    return this.status;
  }
}
