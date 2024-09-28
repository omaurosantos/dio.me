import { BonusAccount } from "./class/BonusAccount";
import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Mauro', 10);
console.log(peopleAccount);
peopleAccount.deposit(100); // Depósito de 100
peopleAccount.withdraw(50); // Saque de 50
peopleAccount.getBalance(); // Mostra o saldo

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20);
companyAccount.deposit(200); // Depósito de 200
companyAccount.getLoan(500); // Pega um empréstimo de 500
companyAccount.getBalance(); // Mostra o saldo

const specialAccount: BonusAccount = new BonusAccount('Special User', 30);
specialAccount.deposit(100); // Depósito com bônus de 10, ou seja, 110
specialAccount.getBalance(); // Mostra o saldo
