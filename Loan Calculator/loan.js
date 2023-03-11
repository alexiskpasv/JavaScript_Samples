function payment(monthly_interest_rate, loan_amount, loan_length) {
  var base = Math.pow(1 + monthly_interest_rate, loan_length);
 return loan_amount * monthly_interest_rate / (1 - (1 / base));
}


var vehicle_price = parseInt(prompt('How much is this vehicle ?'));
var down_payment = parseInt(prompt('How much are you paying now ?'));
var interest_rate = 2.5
var loan_amount = vehicle_price - down_payment;
var monthly_interest_rate = interest_rate / 1200;
var loan_length = 12

document.write("Vehicle price: $" + vehicle_price + "<br>");
document.write("Down payment: $" + down_payment + "<br>");
document.write("Interest rate: " + interest_rate + "%" + "<br>");
document.write("Loan Amount: $ " + loan_amount + "<br>");


var range = [12,24,36,48]
for (x=0; x < range.length; x++) {
 
  document.write("Loan Payment for " + range[x] + " months: <br>");
  var monthly_payment = payment(monthly_interest_rate, loan_amount, range[x]).toFixed(2);
   document.write(monthly_payment + "<br>");
  
}