$(document).ready(()=> {

$("#WorkButton").click(()=>{
    person.work();
    userCard(person);
});

$("#TransferButton").click(()=>{
    account.deposit(person.transferToBank());
    accountCard(account);
    userCard(person);
});

$("#GetLoanButton").click(()=>{
    account.hasLoan ? $("#LoanModalBody").text("You already have a loan!") :$("#LoanModalBody").html(`<div> Enter loan amount</div>
    <input id="amountToLoan"></input> `);

    account.hasLoan ?  $("#LoanButton").prop('disabled',true): $("#LoanButton").prop('disabled',false);
    $('#LoanModal').modal('show');

});


$("#LoanButton").click(()=>{
    const amount = parseInt($("#amountToLoan").val());
    if(checkLoan(amount)){
        account.getLoan(amount);
        $('#LoanModal').modal('hide');
        $("#amountToLoan").val("");

    }
    accountCard(account);
});


$(document).on("click", "#PayBackButton", function(){
    account.payLoan();
    accountCard(account);
});

$("#BuyButton").click(()=>{

  const computer = computers[$("#SelectComputer").val()];
  if(account.balance>= computer.price){
      account.withdraw(computer.price);
      accountCard(account);
      alert("You bought a new "+ computer.name + "!");
  }
  else{
      const missingAmount = computer.price - account.balance;
      alert("Missing " + missingAmount + "kr to buy " + computer.name + "!");
  }
});

$("#SelectComputer").change(() => {
    displayComputer(computers[$("#SelectComputer").val()]);
});


function checkLoan(amount){
    return(
        !account.hasLoan && account.balance * 2 >=  amount && amount > 0 
    );
}

});