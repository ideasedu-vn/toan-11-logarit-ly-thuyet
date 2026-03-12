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
window.Script1 = function()
{
  var player = GetPlayer();
var inp = "dien_4";          
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
    var Result1 = formattedResult.replace(/\./g, ','); // Thay dấu . thành ,
    player.SetVar(inp, Result1);             
}
}

window.Script2 = function()
{
  var player = GetPlayer();
var inp = "dien_4";          
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
    var Result1 = formattedResult.replace(/\./g, ','); // Thay dấu . thành ,
    player.SetVar(inp, Result1);             
}
}

window.Script3 = function()
{
  var player = GetPlayer(); 

function findLMSAPI(win) {
if (win.hasOwnProperty("GetStudentID")) return win;
else if (win.parent == win) return null;
else return findLMSAPI(win.parent);
}
var lmsAPI = findLMSAPI(this);

var finalRawScore = player.GetVar("Tongcau_Dung_1");        //thay biến điểm
var passPercent = 1;                      //thay giá trị điểm mục tiêu
var scoreScale = finalRawScore/8;   //thay giá trị điểm tối đa

SCORM2004_objAPI.SetValue('cmi.score.scaled', scoreScale);
SCORM2004_objAPI.SetValue('cmi.score.raw', finalRawScore);
SCORM2004_objAPI.SetValue('cmi.score.min', '1');
SCORM2004_objAPI.SetValue('cmi.score.max', '8');  //thay giá trị điểm tối đa

if (SCORM2004_objAPI.GetValue('cmi.score.raw') >= passPercent) 
{
  SCORM2004_objAPI.SetValue("cmi.success_status","passed");
  SCORM2004_objAPI.SetValue("cmi.completion_status","completed"); 
}
  else
{ 
  SCORM2004_objAPI.SetValue("cmi.success_status","failed");
  SCORM2004_objAPI.SetValue("cmi.completion_status","incomplete"); 

}
}

};
