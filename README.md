# Net Core Javascript Xhr Get Post

Net Core Based Javascript Project I Developed

# Get function use

 getir("api/js/settings").then(function (i) {
  var title = i.title; 
 })


# Post function use

 var _Search = {
  name: document.getElementById("tbsearch").value,
  count: document.getElementById("tbcount").value
 }

 getir("api/js/UserList", _Search).then(function (data) {
 var _htmllist = ""; 
 data.forEach(function (i, index) {
 if (i.state == 1) { 
     _htmllist += i.name + " - " + i.surname + " - " + i.job;
  }}) 
  document.getElementById("datalist").innerHTML = _htmllist;
 })
