class Account{
    constructor(accountOwner, bankName, balance){
        this.accountOwner = accountOwner;
        this.bankName = bankName;
        this.balance = balance;
        this.hasLoan = false;
        this.loanAmount = 0;
    }

    deposit(amount){
        this.balance += amount;
    }

    withdraw(amount){
        this.balance -= amount;

    }

    getLoan(amount){
        this.hasLoan = true;
        this.balance += amount;
        this.loanAmount = amount;
    }

    payLoan(){
        if(this.balance > this.loanAmount){
        this.hasLoan = false;
        this.balance -= this.loanAmount;
        this.loanAmount = 0;
        }
    }
}

class Person{
    constructor(name, salary, totalSalary){
        this.name = name;
        this.salary = salary;
        this.totalSalary = totalSalary;
    }

    work(){
        this.totalSalary += this.salary;
    }

    transferToBank(){
        const transfer = this.totalSalary;
        this.totalSalary = 0;
        return transfer;
    }

}
