document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("b1").addEventListener("click", encrypt);
});
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("b2").addEventListener("click", decrypt);
})
console.log("This works")
function b64EncodeUnicode(str){
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match, p1) {
    return String.fromCharCode('0x' + p1);
	}));
}
function encrypt(){
  var ncrypt = document.getElementById('ta1').value;
  ncrypt = b64EncodeUnicode(ncrypt);
  document.getElementById('ta2').value = ncrypt;
}
function decrypt(){
  var dcrypt = document.getElementById('ta2').value;
  dcrypt = atob(dcrypt);	
  document.getElementById('ta1').value = dcrypt;
}
