let nameCustomer = prompt("enter name customer: ");
let IdCard = prompt("enter ID card customer: ");
let birthdayCustomer = prompt("enter birthdayCustomer (dd/MM/yyyy): ");
let addressCustomer = prompt("enter address Customer: ");
let typeCustomer = prompt("enter type Customer: ");
let discount = prompt("enter discount: ");
let numberOfAccompanying = prompt("enter number of accompanying: ");
let typeRom = prompt("enter type Rom: ");
let rentDay = prompt("enter rent day: ");
let typeService = prompt("enter type service: ");
let emailCustomer = prompt("enter email customer: ");
let totalPays = 300 * rentDay * (1 - discount/100);
alert("Information of  customer: \n"+
    "name: "+ nameCustomer +
    "\nid card: "+IdCard +
    "\nbirthday: "+ birthdayCustomer +
    "\naddress: "+ addressCustomer +
    "\ntype customer: "+ typeCustomer +
    "\ndiscount: "+ discount+
    "\nnumberOfAccompanying: "+numberOfAccompanying+
    "\ntype rom: "+typeRom +
    "\nrent day: "+rentDay+
    "\ntype service: "+typeService+
    "\nemailCustomer: "+ emailCustomer+
    "\ntotal pays: "+ totalPays
)