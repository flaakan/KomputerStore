
const accountCard = (account) =>{
    const card =`
    <h3>Bank: <span id="bankName"> ${account.bankName} </span> </h3>
    <h3>Account owner: <span id="bankName"> ${account.accountOwner} </span> </h3>
    <h3>Balance: <span id="bankName"> ${account.balance}kr </span> </h3>
    ${hasLoan(account)}`;
    $('#bank-account').html(card);
}

const hasLoan = (account) =>{
    return account.hasLoan ?
     `<h3 style="display:inline-block;">Loan: ${account.loanAmount}kr </h3>
     <button class="btn btn-primary" id="PayBackButton">Pay back loan</button> 
     ` : "";  
}


const userCard = (person) =>{
    const card =`
    <h3>Name: <span id="bankName"> ${person.name} </span> </h3>
    <h3>Salary: <span id="bankName"> ${person.salary}kr </span> </h3>
    <h3>Balance: <span id="bankName"> ${person.totalSalary}kr </span> </h3>`;
    $('#UserCard').html(card);
}

const computerList = (computers) =>{
    computers.map((computer,index) =>{
        $("#SelectComputer").append(`<option value="${index}"> ${computer.name}</option>`)
});
}


const displayComputer = (computer) =>{

    const renderComputer =  
    ` <div class="row" id="computerRow">
    <div class="col-sm-6">
        <h2 id="computerName">${computer.name}</h2>
        <p>${computer.description}</p>
        <h2>Price: ${computer.price}kr</h2>
        <h2>Features</h2>
        <ul>
            ${computer.features.map(feature =>`<li>${feature}</li>`).join("")}
        </ul>
    </div>
    <div class= "col-sm-6">
    <img class="card-img-top" id="cardImage" src="${computer.imageUrl}" alt="">
    </div>
    </div>
    `;

    $("#SelectedComputer").html(renderComputer);
};