window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  var player = GetPlayer();
var inp = "d1";          // Thay giá trị biến ở đây
var ans = player.GetVar(inp);             
var check = false;
ans = ans.trim();
ans = ans.replace(/\s+/g, ' ');
player.SetVar(inp, ans);                  
if (/[a-zA-Z]/.test(ans) || isNaN(parseFloat(ans.replace(/,/g, '.')))) {
    check = true;
} else {
    var result = parseFloat(ans.replace(/\s+/g, '').replace(/,/g, '.'));
    function addSpaceSeparators(number) {
        var parts = number.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join('.');
    }
    var formattedResult = addSpaceSeparators(result);
    var Result1 = formattedResult.replace(/\./g, ','); 
    player.SetVar(inp, Result1);             
}
}

window.Script2 = function()
{
  var player = GetPlayer();
var inp = "d2";          // Thay giá trị biến ở đây
var ans = player.GetVar(inp);             
var check = false;
ans = ans.trim();
ans = ans.replace(/\s+/g, ' ');
player.SetVar(inp, ans);                  
if (/[a-zA-Z]/.test(ans) || isNaN(parseFloat(ans.replace(/,/g, '.')))) {
    check = true;
} else {
    var result = parseFloat(ans.replace(/\s+/g, '').replace(/,/g, '.'));
    function addSpaceSeparators(number) {
        var parts = number.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join('.');
    }
    var formattedResult = addSpaceSeparators(result);
    var Result1 = formattedResult.replace(/\./g, ','); 
    player.SetVar(inp, Result1);             
}
}

window.Script3 = function()
{
  var player = GetPlayer();
var inp = "d3";          // Thay giá trị biến ở đây
var ans = player.GetVar(inp);             
var check = false;
ans = ans.trim();
ans = ans.replace(/\s+/g, ' ');
player.SetVar(inp, ans);                  
if (/[a-zA-Z]/.test(ans) || isNaN(parseFloat(ans.replace(/,/g, '.')))) {
    check = true;
} else {
    var result = parseFloat(ans.replace(/\s+/g, '').replace(/,/g, '.'));
    function addSpaceSeparators(number) {
        var parts = number.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join('.');
    }
    var formattedResult = addSpaceSeparators(result);
    var Result1 = formattedResult.replace(/\./g, ','); 
    player.SetVar(inp, Result1);             
}
}

window.Script4 = function()
{
  var player = GetPlayer();
var inp = "d4";          // Thay giá trị biến ở đây
var ans = player.GetVar(inp);             
var check = false;
ans = ans.trim();
ans = ans.replace(/\s+/g, ' ');
player.SetVar(inp, ans);                  
if (/[a-zA-Z]/.test(ans) || isNaN(parseFloat(ans.replace(/,/g, '.')))) {
    check = true;
} else {
    var result = parseFloat(ans.replace(/\s+/g, '').replace(/,/g, '.'));
    function addSpaceSeparators(number) {
        var parts = number.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join('.');
    }
    var formattedResult = addSpaceSeparators(result);
    var Result1 = formattedResult.replace(/\./g, ','); 
    player.SetVar(inp, Result1);             
}
}

window.Script5 = function()
{
  var player = GetPlayer();
var inp = "o1";          // Thay giá trị biến ở đây
var ans = player.GetVar(inp);             
var check = false;
ans = ans.trim();
ans = ans.replace(/\s+/g, ' ');
player.SetVar(inp, ans);                  
if (/[a-zA-Z]/.test(ans) || isNaN(parseFloat(ans.replace(/,/g, '.')))) {
    check = true;
} else {
    var result = parseFloat(ans.replace(/\s+/g, '').replace(/,/g, '.'));
    function addSpaceSeparators(number) {
        var parts = number.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join('.');
    }
    var formattedResult = addSpaceSeparators(result);
    var Result1 = formattedResult.replace(/\./g, ','); 
    player.SetVar(inp, Result1);             
}
}

window.Script6 = function()
{
  var player = GetPlayer();
var inp = "o2";          // Thay giá trị biến ở đây
var ans = player.GetVar(inp);             
var check = false;
ans = ans.trim();
ans = ans.replace(/\s+/g, ' ');
player.SetVar(inp, ans);                  
if (/[a-zA-Z]/.test(ans) || isNaN(parseFloat(ans.replace(/,/g, '.')))) {
    check = true;
} else {
    var result = parseFloat(ans.replace(/\s+/g, '').replace(/,/g, '.'));
    function addSpaceSeparators(number) {
        var parts = number.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join('.');
    }
    var formattedResult = addSpaceSeparators(result);
    var Result1 = formattedResult.replace(/\./g, ','); 
    player.SetVar(inp, Result1);             
}
}

window.Script7 = function()
{
  var player = GetPlayer();
var inp = "o3";          // Thay giá trị biến ở đây
var ans = player.GetVar(inp);             
var check = false;
ans = ans.trim();
ans = ans.replace(/\s+/g, ' ');
player.SetVar(inp, ans);                  
if (/[a-zA-Z]/.test(ans) || isNaN(parseFloat(ans.replace(/,/g, '.')))) {
    check = true;
} else {
    var result = parseFloat(ans.replace(/\s+/g, '').replace(/,/g, '.'));
    function addSpaceSeparators(number) {
        var parts = number.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join('.');
    }
    var formattedResult = addSpaceSeparators(result);
    var Result1 = formattedResult.replace(/\./g, ','); 
    player.SetVar(inp, Result1);             
}
}

};
