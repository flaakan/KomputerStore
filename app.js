
let account, person, computers;

$(document).ready(()=>{
    account =  new Account("Jerry", "Bank of Me", 200);
    person = new Person("Jerry",100, 0);
    accountCard(account);
    userCard(person);

    getComputers().then((data) => {
        computers = data.computers;
    
        displayComputer(computers[0]);
        computerList(computers);

    });
});

const getComputers = async () => {
    return await getData("/computers.json");
};

const getData = async (url) => {
    const data = await fetch(url);
    const json_data = await data.json();
    return json_data;
};