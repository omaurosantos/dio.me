import { DioAccount } from "./DioAccount";

export class BonusAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  deposit(amount: number): void {
    const bonus = 10;
    super.deposit(amount + bonus);
    console.log(`Você depositou ${amount} com um bônus de ${bonus}.`);
  }
}
