window.onload = function () {

    getir("api/js/settings").then(function (i) {
        if (i.state == 1) {

            document.title = i.title;
            document.writeln("<center>" + i.description + "<br>" + i.explanation + "</center>");

            var inputname = "<br> <input type='text' id='tbsearch' placeholder='Name' /> ";
            var inputcount = "<input type='number' id='tbcount' placeholder='Count' min='1' max='1000' maxlength='1000' />";
            var inputbutton = "<input type='button' id='btnsearch' value='Search' />";

            document.writeln("<center>" + inputname + inputcount + inputbutton +"<br> <div id='datalist'/>" + "</center>");
            document.getElementById("btnsearch").onclick = function myfunction() { search() }

        } else { document.writeln("<center>" + "Web Close" + "</center>"); }
    })

    function search() {
         

        if (document.getElementById("tbsearch").value == "") { alert("Name is null"); return; }
        if (document.getElementById("tbcount").value == "") { alert("Count is null"); return; }

        var _Search = {
            name: document.getElementById("tbsearch").value,
            count: document.getElementById("tbcount").value
        }

        getir("api/js/UserList", _Search).then(function (data) {
            var _htmllist = ""; 
            data.forEach(function (i, index) {
                if (i.state == 1) { 
                    _htmllist += "<br>" + "<br>" + i.name + " - " + i.surname + " - " + i.job + " - " + i.explanation + " - " + i.age;
                }
            }) 
            document.getElementById("datalist").innerHTML = _htmllist;
        })

}}