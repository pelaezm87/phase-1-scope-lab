var customerName = 'bob';

function upperCaseCustomerName(){
   customerName =  customerName.toUpperCase();
};



function setBestCustomer(){
    bestCustomer = 'not bob';
    return bestCustomer;
}

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob'
};

const leastFavoriteCustomer = "bob";

function changeLeastFavoriteCustomer(){
    return leastFavoriteCustomer = "dani";
}