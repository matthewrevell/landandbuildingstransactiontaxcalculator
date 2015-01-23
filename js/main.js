// Calculate the stamp duty due based on house price

function calcStampDuty(price) {
  if (price <= 125000) {
    // Below £125,000.01, there's no Stamp Duty to pay on residential properties in the UK 
    return 0;   
  }
  if (price >= 125001 && price < 250000) {
    // Between £125,001 and £250,000, 2% is payable on the amount above £125,000
    // but below £250,000
    var taxableAmount = price - 125000;
    return taxableAmount * 0.02;
  }
  if (price >= 250001 && price <= 925000) {
    // Between £250,001 and £925,000, 5% is payable on the amount above £250,000
    var variablePortion = price - 250000;
    return variablePortion * 0.05 + 2500;
  }
  if (price >= 925001 && price <= 1500000) {
    // Between £925,001 and £1,500,000, 10% is payable on the amount above £925,000
    var variablePortion = price - 925000;
    return variablePortion * 0.1 + 36250;
  }
  if (price > 1500000) {
    // Over £1.5m, 12% is payable for that portion
    var variablePortion = price - 1500000;
    return variablePortion * 0.12 + 93750;
  }
}

$(document).ready(function() {
  var counter = 0;
  $('#houseprice').autoNumeric('init',{aSign: '£', vMin: '1', mDec: '0', aPad: false, wEmpty: 'sign', lZero: 'deny'})
  $('#result-figure').autoNumeric('init',{aSign: '£', mDec: '0', lZero: 'deny'})
  $('button').click(function() {
    if (counter === 0) {
      $('#disclaimer').removeClass("hide-text");
      $('#result').removeClass("hide-text");
    }
    var price = $('#houseprice').autoNumeric('get');
    var duty = calcStampDuty(price); 
    $('#result-figure').autoNumeric('set',duty);
  });
  // Simulate user click when Enter is press on the house price input
  $('#houseprice').keypress(function(e){
    if(e.which == 13){
      $('button').click();
    }
  });
});
