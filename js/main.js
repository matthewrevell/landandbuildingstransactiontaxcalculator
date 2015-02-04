// Calculate the Scottish Land and Buildings Transaction Tax due based on house price

function calcLBTT(price) {

var variablePortion = 0;
var lbtt = 0;
var taxableAmount = 0;

  if (price <= 145000) {
    // Below £145,001, there's no LBTT to pay on residential properties in Scotland 
    return 0;   
  }
  if (price >= 145001 && price <= 250000) {
    // Between £145,001 and £250,000, 2% is payable on the amount above £145,000
    // but below £250,000
    taxableAmount = price - 145000;
    lbtt = taxableAmount * 0.02;
    return Math.floor(lbtt);
  }
  if (price >= 250001 && price <= 325000) {
    // Between £250,001 and 3925,000, 5% is payable on the amount above £250,000
    variablePortion = price - 250000;
    lbtt = variablePortion * 0.05 + 2100;
    return Math.floor(lbtt);
  }
  if (price >= 325001 && price <= 750000) {
    // Between £325,001 and £750,000, 10% is payable on the amount above £325,000
    variablePortion = price - 325000;
    lbtt = variablePortion * 0.1 + 5850;
    return Math.floor(lbtt);
  }
  if (price > 750000) {
    // Over £750k, 12% is payable for that portion
    variablePortion = price - 750000;
    lbtt = variablePortion * 0.12 + 48350;
    return Math.floor(lbtt);
  }
}

$(document).ready(function() {
  var counter = 0;
  $('#houseprice').autoNumeric('init',{aSign: '£', vMin: '1', mDec: '0', aPad: false, wEmpty: 'sign', lZero: 'deny'});
  $('#result-figure').autoNumeric('init',{aSign: '£', mDec: '0', lZero: 'deny'});
  $('button').click(function() {
    if (counter === 0) {
      $('#disclaimer').removeClass("hide-text");
      $('#result').removeClass("hide-text");
    }
    var price = $('#houseprice').autoNumeric('get');
    var duty = calcLBTT(price); 
    $('#result-figure').autoNumeric('set',duty);
  });
  // Simulate user click when Enter is press on the house price input
  $('#houseprice').keypress(function(e){
    if(e.which == 13){
      $('button').click();
    }
  });
});
