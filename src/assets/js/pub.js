
var IS_NULL = 128; //	10000000
var IS_FULL = 64; //	01000000
var IS_HALF = 32; //	00100000
var IS_ASCII = 16; //	00010000
var IS_NUM = 8; //	00001000
var IS_DATE = 4; //	00000100
var IS_PHONE = 2; //	00000010
var IS_EMAIL = 1; //	00000001
var IS_NOT_NULL = 0; //	00000000
//实现String的replaceAll方法
String.prototype.replaceAll=function(s1,s2)
{
	var demo=this
	while(demo.indexOf(s1)!=-1)
		demo=demo.replace(s1,s2);
	return demo;
}
//实现trim方法
String.prototype.trim=function(){
        return this.replace(/(^\s*)|(\s*$)/g, "");
}
String.prototype.ltrim=function(){
        return this.replace(/(^\s*)/g,"");
}
String.prototype.rtrim=function(){
        return this.replace(/(\s*$)/g,"");
}
/****************************************一、弹出窗口*************************************************/
//1.日期选择窗口
function fPopUpCalendarDlg(ctrlobj) {
	var showx = event.screenX - event.offsetX; // + deltaX;
	var showy = event.screenY - event.offsetY + 18; // + deltaY;
	var newWINwidth = 210 + 4 + 18;
	var retval = window.showModalDialog("../pub/CalendarDlg.htm", "", "dialogWidth:100px; dialogHeight:180px; dialogLeft:" + showx + "px; dialogTop:" + showy + "px; status:no; directories:yes;scrollbars:no;Resizable=no; ");
	if (retval != null) {
		retval = retval.replace(/\//g, "-");
		ctrlobj.value = retval;
	}
}
/****************************************二、控制键盘录入*************************************************/

//1.控制键盘输入，只允许数字键录入整数
function intOnly() {
	if (!(window.event.keyCode >= 48 && window.event.keyCode <= 57
		||window.event.keyCode==13	//回车符
	)) {
		window.event.keyCode = 0;
		alert("请输入整数数字!");
	}
}
//2.控制键盘输入，只允许数字键录入整数
//和intOnly()区别：输入完成焦点离开后判断数字是否合法
function intOnly2(param) {
	var reg=/^([0-9]*)$/;
	var flag = reg.test(param.value);
	if(!flag){
		alert("请输入整数数字!");
		param.value="";
	}
}

//1.控制键盘输入，只允许数字键录入小数和整数
function numberOnly() {
	if (!(((window.event.keyCode >= 48) && (window.event.keyCode <= 57)) || (window.event.keyCode == 13) || (window.event.keyCode == 46))) {
		window.event.keyCode = 0;
		alert("请输入数字!");
	}
}
//2.控制键盘输入，只允许数字键录入小数和整数
//和numberOnly()区别：输入完成焦点离开后判断数字是否合法
function numberOnly2(param) {
	var reg=/^([0-9]+(\.?[0-9]+)?)$/;
	var flag = reg.test(param.value);
	if(!flag){
		if(param.value!=""){
			alert("请输入数字!");
			param.value="";
		}
	}
}

//1.控制键盘输入时只能输入数字和小数点
function floatOnly() {
	if (!(((window.event.keyCode >= 48) && (window.event.keyCode <= 57)) || (window.event.keyCode == 13) || (window.event.keyCode == 46))) {
		window.event.keyCode = 0;
		alert("输入有误，请输入数字!");
	}
}

//2.控制键盘输入时只能输入数字和小数点
//和floatOnly()区别：输入完成焦点离开后判断数字是否合法
function floatOnly2(param) {
	var reg=/^([0-9]+(\.?[0-9]+)?)$/;
	var flag = reg.test(param.value);
	if(!flag){
		if(param.value!=""){
			alert("输入有误，请输入数字!");
			param.value="";
		}
	}
}


//控制键盘输入时只能输入数字和'-'，用于限制电话号码的输入
function phoneOnly() {
	if (!(window.event.keyCode >= 48 && window.event.keyCode <= 57 
			|| window.event.keyCode == 45 
			|| window.event.keyCode == "\uff0d"
			||window.event.keyCode==13 //回车符
		)) {
		alert("电话号码输入有误，请输入数字!");
		window.event.keyCode = 0;
	}
}
//控制键盘输入时只能输入数字和'-'，用于限制电话号码的输入
//和phoneOnly()区别：输入完成焦点离开后判断数字是否合法
function phoneOnly2(param) {
	var reg=/^([0-9]+(\-?[0-9]+)?)$/;
	var flag = reg.test(param.value);
	if(!flag){
		if(param.value!=""){
			alert("电话号码输入有误，请输入数字!");
			param.value="";
		}
	}
}

/***************************************/
//检查<html:file><input type="file">中地址所指文件是否是图片类型
function isImage(obj) {
	var str = obj.value;
	var temp = str.indexOf(".");
	if (temp > 0) {
		str = str.substring(temp + 1).toLowerCase();
		var myTypes = new Array("gif", "jpg", "jpeg", "png");
		for (i = 0; i < myTypes.length; i++) {
			if (str == myTypes[i]) {
				return;
			}
		}
		alert("\u8bf7\u9009\u62e9\u683c\u5f0f\u4e3agif,jpg,jpeg,png\u7684\u56fe\u7247");
		obj.select();
	}
}
/****************************************三、数字的格式化操作函数*************************************************/
//取浮点数，可以定义小数点后精确的位数,并且四舍五入。
function getFloat(number, reserve) {
	var index = number.indexOf(".");
	if (index == -1) {
		return number;
	} else {
		var index = index + reserve + 1;
		if (index >= number.length) {
			return number;
		} else {
			var temp = number.charAt(index);
			number = number.substring(0, index);
			if (parseInt(temp) < 5) {
				return number;
			} else {
				for (var i = index - 1; i >= 0; i--) {
					if (number.charAt(i) == ".") {
						continue;
					}
					var value = parseInt(number.charAt(i));
					value++;
					if (value != 10) {
						number = replace(number, i, value);
						return number;
					} else {
						number = replace(number, i, "0");
						if (i == 0) {
							number = "1" + number;
						}
					}
				}
				return number;
			}
		}
	}
}
function replace(number, i, value) {
	var newnumber = number.substring(0, i) + value;
	newnumber = newnumber + number.substring(i + 1, number.length);
	return newnumber;
}
/****************************************四、字符串的格式化操作函数*************************************************/
//1.子字符串替换
function replaceStr(str, sFnd, sRep) {
	var sTmp = "";
	var endIndex = 0;
	var beginIndex = 0;
	var len = sFnd.length;
	while (endIndex >= 0) {
		var endIndex = str.indexOf(sFnd, beginIndex);
		if (endIndex >= 0) {
			sTmp += str.substring(beginIndex, endIndex) + sRep;
			beginIndex = endIndex + len;
		} else {
			if (beginIndex >= 0) {
				sTmp += str.substring(beginIndex);
				break;
			}
		}
	}
	return sTmp;
}
//2.单双引号替换（基于子字符串替换函数）
function replaceCommas(str) {
	if (str == "") {
		return str;
	}
	str = replaceStr(str, "'", "'");
    //str = replaceStr(str, '"', '"');
	return str;
}

//3.去掉字符串中的给定字符
function removeChar(str, c) {
	if (str == null || str == "") {
		return str;
	}
	var i = str.indexOf(c);
	while (i >= 0) {
		str = str.substring(0, i) + str.substring(i + 1, str.length);
		i = str.indexOf(c);
	}
	return str;
}

//4.验证strings中是否包含string，其中strings是一','为分隔符的字符串，例："a,ab,cd"
function isContainString(strings, string){
	var array = strings.split(",");
	if ("" == string)
		return false;
	if (array.length == 0)
		return false;
	for (var i = 0; i < array.length; i++) {
		if(string == array[i]) {
			return true;
		}
	}
	return false;
}

/****************************************五、日期的格式化操作函数*************************************************/
//1.年月日组合成格式化的字符串
function formatDate(sYear, sMonth, sDay) {
	if (sMonth.length == 1) {
		sMonth = "0" + sMonth;
	}
	if (sDay.length == 1) {
		sDay = "0" + sDay;
	}
	return sYear + sMonth + sDay;
}
//2.日期型转换为格式化的字符串
function convDate(sDate, sSep) {
	var pos = 0;
	var str = sDate;
	var len = str.length;
	if ((len < 8) || (len > 10)) {
		return str;
	} else {
		if (str.indexOf(sSep) == 4) {
			pos = str.indexOf(sSep, 5);
			if (pos == 6) {
				if (len == 8) {
					return str.substring(0, 4) + "0" + str.substring(5, 6) + "0" + str.substring(7, 8);
				} else {
					return str.substring(0, 4) + "0" + str.substring(5, 6) + str.substring(7, 9);
				}
			} else {
				if (pos == 7) {
					if (len == 9) {
						return str.substring(0, 4) + str.substring(5, 7) + "0" + str.substring(8, 9);
					} else {
						return str.substring(0, 4) + str.substring(5, 7) + str.substring(8, 10);
					}
				} else {
					return str;
				}
			}
		} else {
			return str;
		}
	}
}
//3.判断是否为闰年
function checkLeapYear(year) {
	if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
		return true;
	}
	return false;
}
//4.获得格式化的系统时间
function getSysDate() {
	var today = new Date();
	var nYear = today.getYear();
	var nMonth = today.getMonth() + 1;
	var nDay = today.getDate();
	var sToday = "";
	if (nYear < 1000) {
		sToday += "" + (1900 + nYear);
	} else {
		sToday += nYear;
	}
	if (nMonth < 10) {
		sToday += "0" + nMonth;
	} else {
		sToday += nMonth;
	}
	if (nDay < 10) {
		sToday += "0" + nDay;
	} else {
		sToday += nDay;
	}
	return sToday;
}
//5.比较两个日期的大小
//dateStr1 >,=,< dateStr2 return 1,0,-1
function compareDateStr(dateStr1, dateStr2) {
	if (dateStr1.indexOf("/") > 0) {
		dateStr1 = convDate(dateStr1, "/");
	} else {
		if (dateStr1.indexOf("-") > 0) {
			dateStr1 = convDate(dateStr1, "-");
		}
	}
	if (dateStr2.indexOf("/") > 0) {
		dateStr2 = convDate(dateStr2, "/");
	} else {
		if (dateStr2.indexOf("-") > 0) {
			dateStr2 = convDate(dateStr2, "-");
		}
	}    
    //dateStr2 = convDate(dateStr2, "/");
	if (dateStr1 > dateStr2) {
		return 1;
	} else {
		if (dateStr1 == dateStr2) {
			return 0;
		} else {
			return -1;
		}
	}
	return dateStr1;
}
//6.判断是否小于当前时间
function checkBeforeDate(str) {	
   //统一格式为20100803
	if (str.indexOf("/") > 0) {
		str = convDate(str, "/");
	} else {
		if (str.indexOf("-") > 0) {
			str = convDate(str, "-");
		}
	}
	
	if (str.length == 6) {
		str += "01";
	}
	//开始比较
	if (str >= getSysDate()) {
		return false;
	}
	return true;
}
//7.判断是否等于当前时间
function checkIsToday(str) {
	str = convDate(str, "/");
	if (str.length == 6) {
		str += "01";
	}
	if (str == getSysDate()) {
		return true;
	} else {
		return false;
	}
}
//8.判断是否大于当前时间
function checkAfterDate(str) {
	str = convDate(str, "/");
	if (str.length == 6) {
		str += "01";
	}
	if (str <= getSysDate()) {
		return false;
	}
	return true;
}
//比较两个时间大小
function compareDate(fromDate, toDate) {
	if (checkDate(fromDate) != true) {
		return false;
	}
	if (checkDate(toDate) != true) {
		return false;
	}
	if (fromDate.indexOf("/") > 0) {
		fromDate = convDate(fromDate, "/");
	} else {
		if (fromDate.indexOf("-") > 0) {
			fromDate = convDate(fromDate, "-");
		}
	}
	if (toDate.indexOf("/") > 0) {
		toDate = convDate(toDate, "/");
	} else {
		if (toDate.indexOf("-") > 0) {
			toDate = convDate(toDate, "-");
		}
	}
	if ((fromDate.length != 8) || !checkNumber(fromDate) || (toDate.length != 8) || !checkNumber(toDate)) {
		return false;
	}
	if (fromDate <= toDate) {
		return true;
	} else {
		return false;
	}
}


/****************************************五、表单值的格式化操作*************************************************/
//1.上传文件时取得表单的上传路径中的文件名
function getFileName(fullpath) {
	var platform = navigator.platform;
	var fileseperator = (platform.indexOf("Win") == -1) ? "/" : "\\";
	var idx = fullpath.lastIndexOf(fileseperator);
	if (idx == -1) {
		return fullpath;
	} else {
		if (idx >= fullpath.length - 1) {
			return "";
		} else {
			return fullpath.substring(idx + 1);
		}
	}
}
//2.去掉FORM中所有TEXT和TEXTAREA表单的值两边的空格
function trimItems(oFrm) {
	var i = 0;
	var type = "";
	for (i = 0; i < oFrm.elements.length; i++) {
		type = oFrm.elements[i].type;
		if ((type == "text") || (type == "textarea")) {
			oFrm.elements[i].value = oFrm.elements[i].value.trim();
		}
	}
}
/****************************************六、提交前的表单值检查*************************************************/
//1.在删除操作时选择复选框
function isSelected() {
	for (var i = 0; i < document.all.length; i++) {
		if (document.all[i].tagName.toUpperCase() == "INPUT") {
			var tmp = document.all[i].type.toUpperCase();
			var name = document.all[i].name;
			if ((tmp == "CHECKBOX") && (document.all[i].checked == true) && (name == "selection" || name == "selected")) {
				return true;
			}
		}
	}
	return false;
}
//2.检查表单的值是否为空,是否符合最大最小长度限制
var MSG_CHECK_SUCCESS = "Check Success";
function checkItem(sCheck, nMinLen, nMaxLen, chkFlg) {
	var strLen = 0;
	if ((sCheck == null) || (sCheck == "")) {
		if (((chkFlg & 128) == 128) || ((chkFlg & 0) == 0)) {
			return "\u662f\u5fc5\u987b\u8f93\u5165\u7684\u9879\u76ee";
		} else {
			return MSG_CHECK_SUCCESS;
		}
	}
	if ((nMinLen > 0) || (nMaxLen > 0)) {
		strLen = getLength(sCheck);
		if (nMinLen > 0) {
			if (nMinLen == nMaxLen) {
				if (strLen != nMinLen) {
					if ((chkFlg & 8) == 8) {
						return "\u7684\u957f\u5ea6\u5fc5\u987b" + nMinLen + "\u5b57\u8282";
					} else {
						return "\u7684\u957f\u5ea6\u5fc5\u987b" + nMinLen + "\u5b57\u8282";
					}
				}
			} else {
				if (strLen < nMinLen) {
					if ((chkFlg & 8) == 8) {
						return "\u4e0d\u662f\u6570\u5b57";
					} else {
						return "\u8fc7\u4e8e\u77ed\u5c0f\uff0c\u6700\u5c0f\u957f\u5ea6\u4e3a" + nMinLen + "\u5b57\u8282";
					}
				}
			}
		}
		if (nMaxLen > 0) {
			if (strLen > nMaxLen) {
				return "\u8d85\u8fc7\u4e86\u6700\u5927\u957f\u5ea6" + nMaxLen + "\u5b57\u8282";
			}
		}
	}
	if ((chkFlg & 16) == 16) {
		if (!checkASCII(sCheck)) {
			return "\u4e0d\u6b63\u786e";
		}
	}
	if ((chkFlg & 8) == 8) {
		if (!checkNumber(sCheck)) {
			return "\u662f\u6570\u5b57\u9879\u76ee";
		}
	}
	if ((chkFlg & 4) == 4) {
		if (!checkDate(sCheck)) {
			return "\u662f\u65e5\u671f\u9879\u76ee";
		}
	}
	if ((chkFlg & 2) == 2) {
		if (!checkPhone(sCheck)) {
			return "\u4e0d\u6b63\u786e";
		}
	}
	if ((chkFlg & 1) == 1) {
		if (!checkEmail(sCheck)) {
			return "\u4e0d\u6b63\u786e";
		}
	}
	return MSG_CHECK_SUCCESS;
}
function check(sItemName, sCheck, nMinLen, nMaxLen, chkFlg) {
	sRet = checkItem(sCheck, nMinLen, nMaxLen, chkFlg);
	if (sRet != MSG_CHECK_SUCCESS) {
		sErr += sItemName + sRet + "\n";
		return false;
	}
	return true;
}
//3.检查电子邮件表单的格式是否正确
function checkEmail(str) {
	var i;
	var len = str.length;
	var aPos = str.indexOf("@");
	var dPos = str.indexOf(".");
	var aaPos = str.indexOf("@@");
	var adPos = str.indexOf("@.");
	var ddPos = str.indexOf("..");
	var daPos = str.indexOf(".@");
	var chkStr = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890-_@.";
	if ((aPos <= 0) || (aPos == len - 1) || (dPos == len - 1) || (adPos > 0) || (daPos > 0) || (str.charAt(len - 1) == "@") || (str.charAt(len - 1) == ".") || (aaPos > 0) || (ddPos > 0)) {
		return false;
	}
	if (str.indexOf("@", aPos + 1) > 0) {
		return false;
	}
	for (i = 0; i < len; i++) {
		if (chkStr.indexOf(str.charAt(i)) < 0) {
			return false;
		}
	}
	return true;
}
//4.检查电话号码表单的格式是否正确
function checkPhone(str) {
	var i = str.indexOf("--");
	var len = str.length;
	if (i >= 0) {
		return false;
	}
	i = str.indexOf("-");
	if ((i == 0) || (i == len - 1)) {
		return false;
	} else {
		if (i > 0) {
			i = str.lastIndexOf("-");
			if (i == len - 1) {
				return false;
			}
			str = removeChar(str, "-");
		}
	}
	if (!checkNumber(str)) {
		return false;
	} else {
		return true;
	}
}
//5.检查是否为英文字母
function checkEngNum(str) {
	if (str == null || str == "") {
		return true;
	}
	var c = new RegExp();
	c = / ^ [\d | a - zA - Z] + $ /;
	if (c.test(str)) {
		return true;
	} else {
		return false;
	}
}
//6.检查是否为数字型元素
function checkNumber(str) {
	var i;
	var len = str.length;
	var chkStr = "1234567890";
	if (len == 1) {
		if (chkStr.indexOf(str.charAt(i)) < 0) {
			return false;
		}
	} else {
		if ((chkStr.indexOf(str.charAt(0)) < 0)) {
			return false;
		}
		for (i = 1; i < len; i++) {
			if (chkStr.indexOf(str.charAt(i)) < 0) {
				return false;
			}
		}
	}
	return true;
}
//7.检查是否为浮点型元素
function checkFloat(str) {
	var i;
	var len = str.length;
	var chkStr = "1234567890.";
	if (len == 1) {
		if (chkStr.indexOf(str.charAt(i)) < 0) {
			return false;
		}
	} else {
  //if ((chkStr.indexOf(str.charAt(0)) < 0) || (str.charAt(0) == "0")) {
		if ((chkStr.indexOf(str.charAt(0)) < 0)) {
			return false;
		}
		for (i = 1; i < len; i++) {
			if (chkStr.indexOf(str.charAt(i)) < 0) {
				return false;
			}
		}
	}
	return true;
}
//8.检查是否为日期
function checkDate(str) {
	var index = str.indexOf("-");
	var subIndex = str.indexOf("-",index+1);
	if(str.substring(parseInt(subIndex)+1,str.length).length>2){
	    return false;
	}
	if(str.indexOf("-")==-1){
	    return false;
	}
	str = convDate(str, "-");
	if ((str.length != 8) || !checkNumber(str)) {
		return false;
	}
	var year = str.substring(0, 4);
	var month = str.substring(4, 6);
	var day = str.substring(6, 8);
	dayOfMonth = new Array(31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
	if ((month < 1) || (month > 12)) {
		return false;
	}
	if ((day < 1) || (day > dayOfMonth[month - 1])) {
		return false;
	}
	if (!checkLeapYear(year) && (month == 2) && (day == 29)) {
		return false;
	}
	//sqlserver中日期不能小于1753年，故在此对日期加以限定
	if(year<1800){
		return false;
	}
	return true;
}

function  checkInputDate(object){
	changeDateFormate(object);
    if(object.value!=""&&checkDate(object.value)==false){
	         alert("日期输入不合法，请重新输入！");
	         object.focus();
	         object.select();
	}
}
//将日期格式统一转换为十位YYYY-MM-DD
function changeDateFormate(object){
	var str=object.value;
	str=str.replaceAll("/","-");
	if(object.value.length==8){
    	str=str.substring(0,4)+"-"+str.substring(4,6)+"-"+str.substring(6,8);
    }
   	object.value=str;
}
/****************************************七、子窗口的弹出与关闭*************************************************/
var childWindow = null;
var fatherWindow = null;
var form = null;

// 打开子窗口，在打开之前定义父窗口的名字
function openNew(URL, Width, Height) {

 //   window.name = "fatherWindow";
	closeChildNew();
	showx = event.screenX - event.offsetX - Width; // + deltaX;
	showy = event.screenY - event.offsetY - Height - 30; // + deltaY;
	var features = "width = " + Width + ",height = " + Height + ",left = " + showx + ",top = " + showy + ",directories = no, localtion = no, menubar = no, status = yes, toolbar = no,scrollbars = yes, resizeable = no";
	childWindow = window.open(URL, "", features);
}
// 如果已经有子窗口打开，则关闭之
function closeChildNew() {
	if (childWindow && childWindow.open && !childWindow.closed) {
		childWindow.close();
	}
}

// 关闭子窗口的同时，进行提交，并将提交之后的得页面转到父窗口，关闭子窗口
// 这里本应该是使用同一个函数,但是时间有点急,就
function closeChildWindow(fatherForm, childForm, actionType) {
	childForm.actionType.value = actionType;
	childForm.target = "mainFrame";
	childForm.submit();
	window.close();
	return true;
}
function closeChildWindowNew(childForm, actionType) {
	childForm.actionType.value = actionType;
	childForm.target = "fatherWindow";
	childForm.submit();
	window.close();
	return true;
}
/* SelectAllOptions ***********************************************************/
// set all options to selected
/******************************************************************************/
function SelectAllOptions(theSelect) {
	for (var i = 0; i < theSelect.options.length; i++) {
		theSelect.options[i].selected = true;
	}
}
//改变选中行的css;author：lithlin   for rdms only!
function changeCss(CB, className) {
	if (CB.checked) {
		while (CB.tagName != "TR") {
			CB = CB.parentElement;
		}
		CB.className = "ListTrLight";
	} else {
		while (CB.tagName != "TR") {
			CB = CB.parentElement;
		}
		CB.className = className;
	}
}
//  
function MoveAllOptionsTo(fromSelect, toSelect) {
	var myform = document.expertslistform;
	//removeAllItem(toSelect);
	for (i = 0; i < fromSelect.options.length; i++) {
		var name = fromSelect.item(i).text;
		var newOpt = new Option(name, fromSelect.item(i).value);
		toSelect.add(newOpt);
	}
}
function removeAllItem(from) {
	for (i = from.options.length - 1; i >= 0; i--) {
		from.remove(i);
	}
}
//在两个选择框中移动数据
function MoveOptionsTo(fromSelect, toSelect) {
	var myform = document.expertslistform;
	for (i = 0; i < fromSelect.options.length; i++) {
    // alert(fromSelect.options.length);
		if (fromSelect.options(i).selected == true) {
			j = toSelect.options.length - 1;
            // alert(toSelect.options.length);
			for (; j >= 0; j--) {
				if (fromSelect.item(i).value == toSelect.item(j).value) {
					break;
				}
			}
			if (j < 0) {
				var name = fromSelect.item(i).text;
				var newOpt = new Option(name, fromSelect.item(i).value);
				toSelect.add(newOpt);
			}
		}
	}
}
//移走某个多选框中的数据
function removeItem(from) {
	for (i = from.options.length - 1; i >= 0; i--) {
		if (from.options(i).selected == true) {
			from.remove(i);
		}
	}
}
//上移或者下移某个多选框的数据
function upOrDownItem(form,flag) {
    var j=0; 
	for (i =0; i < form.options.length; i++) {
		if (form.options(i).selected == true) {
		if(flag=="up"){
		  j=i-1;
		  if(j<0){
		    j=form.options.length-1;
		  }
		}else if(flag=="down"&&i<form.options.length-1){
		  j=i+1;
		}
		if(i!=j){
		var value=form.options(i).value;
		var text=form.options(i).text;
		form.options(i).value=form.options(j).value;
		form.options(i).text=form.options(j).text;
		form.options(i).selected=false;
		form.options(j).value=value;
		form.options(j).text=text;
		form.options(j).selected=true;
			 return;
		}
		}
	}
}
//===============全选按钮操纵所有多选框==========================================
function checkAll() {
	var state = document.forms[0].selectstate.value;
	var j = 0;
	for (var i = 0; i < document.forms[0].elements.length; i++) {
		var e = document.forms[0].elements[i];
		if ((!e.disabled) && e.name == "selected") {
			e.checked = state;
			j++;
		}
	}
	if (state == "on") {
		document.forms[0].selectstate.value = "";
	} else {
		document.forms[0].selectstate.value = "on";
	}
	if(state!="on"){
		MM_showHideLayers('allselect','','hide',"0");
	}else{
		MM_showHideLayers('allselect','','show');
	}
}
function MM_showHideLayers() {
	document.forms[0].selectedDataScope.value="";
	var i,p,v,obj,args=MM_showHideLayers.arguments;
	for (i=0; i<(args.length-2); i+=3) 
	with (document) if (getElementById && ((obj=getElementById(args[i]))!=null)) { v=args[i+2];
	  if (obj.style) { 
	  	obj=obj.style; v=(v=='show')?'visible':(v=='hide')?'hidden':v; }
	  	obj.visibility=v; 
	  }
}
function MM_showHideLayers(act1,act2,act3,act4) {
	if(document.forms[0].selectedDataScope!=undefined){
		document.forms[0].selectedDataScope.value=act4;
	}
	var i,p,v,obj,args=MM_showHideLayers.arguments;
	for (i=0; i<(args.length-2); i+=3) 
	with (document) if (getElementById && ((obj=getElementById(args[i]))!=null)) { v=args[i+2];
	  if (obj.style) { 
	  	obj=obj.style; v=(v=='show')?'visible':(v=='hide')?'hidden':v; }
	  	obj.visibility=v; 
	  }
}
//判断第1个数字是否大于第2个数字
function oneBigThanTwo(one,two){
	var temp1=parseFloat(one);
	var temp2=parseFloat(two);
	return temp1>temp2?true:false;
}

//将值转化成Float型
function turnToFloat(name) {
	trimValue(name);
	var value = document.all[name].value;
	value = getFloat(value, 2);
	document.all[name].value = value;
}

//对数字型数据值进行整理
function trimValue(name) {
	var value = document.all[name].value;
	if (value == "" || parseFloat(value) == 0) {
		document.all[name].value = 0;
		return;
	}
   //去掉开头的0
	for (var i = 0; i < value.length; i++) {
		if (value.charAt(i) == 0) {
			continue;
		} else {
			value = value.substring(i);
			break;
		}
	}
	document.all[name].value = value;
}

//百分比计算，结果保留小数点两位
function getRatio(num1, num2) {
	if (num2 == 0) {
		return 0;
	}
	var result = num1 / num2 * 100;
	return getFloat(result + "", 2);
}
/*给出起始日期的年月日year,month,day及此后的天数days，算出这days天中的工作日数目*/
function getWorkDay(year, month, day, days) {
	date = new Date();
	date.setFullYear(year, month, day);
	startWeekDay = date.getDay();
	yushu = days % 7;
	weekNum = (days - yushu) / 7;
	if ((startWeekDay == 1) || (startWeekDay + yushu == 8)) {
		total = weekNum * 2 + 1;
	} else {
		if (startWeekDay + yushu > 8) {
			total = weekNum * 2 + 2;
		} else {
			total = weekNum * 2;
		}
	}
	return days - total;
}

//判断页面输入内容是否超过字数限制
function checkLimit(field, limit) {
	var fieldLength = strlength(field.value);
	var newLimit = limit * 2;
	if (fieldLength > newLimit) {
		return false;
	} else {
		return true;
	}
}

//计算字符长的字节长度
function strlength(str) {
	var l = str.length;
	var n = l;
	for (var i = 0; i < l; i++) {
		if (str.charCodeAt(i) < 0 || str.charCodeAt(i) > 255) {
			n++;
		}
	}
	return n;
}
function printDocument() {
	window.open("../pub/print.jsp");
}
function printReportForms() {
	window.open("../pub/printReport.htm");
}
//改变页面查询类型	
function changeSearchMode() {
	if (document.all["queryBean.searchMode"].value == "a") {
		document.all["simple"].style.display = "none";	
		//document.getElementById("simpleHead").setAttribute("background","../images/searchbg01.gif");
		document.all["advance"].style.display = "";	
		//document.getElementById("advanceHead").setAttribute("background","../images/searchbg002.gif");
	} else {
		document.all["simple"].style.display = "";
		//document.getElementById("simpleHead").setAttribute("background","../images/searchbg002.gif");
		document.all["advance"].style.display = "none";		
		//document.getElementById("advanceHead").setAttribute("background","../images/searchbg01.gif");
	}
	//如果更多查询存在
	if(document.all["more"]!=null){
		if(document.all["queryBean.defaultSearchFlag"].value=="1"){
			document.all["more"].style.display="none";
		}
		else{
			document.all["more"].style.display="block";
		}
	}
}
function checkAuthorNum(obj){
	if("edit"==document.all['pageType'].value){
		var newValue = obj.value;
		var oldValue = document.all['authorNum'].value;
		if(parseFloat(oldValue)>parseFloat(newValue)){
			alert('作者人数必须大于最大作者署名顺序！');
			obj.value=oldValue;
			this.focus();
		}
	}
}
function convert(act){	
	var selectedStyle="url(../images/tabright1_top.gif) no-repeat right top";
	var unSelectedStyle="url(../images/tabright1_bottom.gif) no-repeat right top";
	if(act=="simple"){
      	document.all["queryBean.searchMode"].value="s";
		document.getElementById("simple_search").style.background=selectedStyle;
		document.getElementById("advance_search").style.background=unSelectedStyle;
   	}else if(act=="advance"){
      	document.all["queryBean.searchMode"].value="a";
		document.getElementById("simple_search").style.background=unSelectedStyle;
		document.getElementById("advance_search").style.background=selectedStyle;
   	}
   	changeSearchMode();
}
//改变查询页面提交方式
function changeSubmitType() {
	var submitType;
	for (var i = 0; i < document.all["submitType"].length; i++) {
		if (document.all["submitType"][i].checked) {
			submitType = document.all["submitType"][i].value;
		}
	}
	if (submitType == "exportExcel") {
		document.all["exportExcel"].style.display = "block";
		document.all["statistic"].style.display = "none";
	} else {
		if (submitType == "statistic") {
			document.all["exportExcel"].style.display = "none";
			document.all["statistic"].style.display = "block";
		} else {
			if (submitType == "search") {
				document.all["exportExcel"].style.display = "none";
				document.all["statistic"].style.display = "none";
			}
		}
	}
}
//清空查询页面
function searchFormClear(){
	var i = 0;
	var type = "";
	for (i = 0; i <document.forms[0].elements.length; i++) {
	   var ele=document.forms[0].elements[i];
		type = document.forms[0].elements[i].type;
		if ((type == "text") || (type == "textarea")) {
			ele.value ="";
		}
		else if(type=="select-one"){
			ele.options[0].selected=true;
		}
		else if(type == "radio"){
		  //查询页面清空时，单选框选中“所有”选项
		  if(ele.value!=""){
		  	ele.checked=false;
		  }
		  else{
			 ele.checked=true;
		 }
		}else if(type=="checkbox"){
			ele.checked=false;
		}
	}
}
//返回列表页面
function backListPage(){
	document.all["actionType"].value = "list";
   	document.forms[0].submit();
}

//通用提交验证方法
function onsubmit() {
	var property;
	var message;
	var dateProperty;
	var dateMessage;
	//1.对form中的text和textarea对象进行trim处理
	trimItems(document.forms[0]);
    //2.判断必填项是否有数据
	if (propertys!= null&&propertys!= ""&&msg!=null&&msg!="") {
		property = propertys.split(",");
		message = msg.split(",");
		for (i = 0; i < property.length; i++) {
			//判断字段是否在页面存在,存在时校验必填
			if(document.all[property[i]]!=null){
				var eleObj = document.all[property[i]];				
				var dateType = elemGetAttribute(eleObj,"dataType");							
				var propertyValue=getPropertyValue(property[i]);
				var theResulet = checkItem(propertyValue, 0, 0, IS_NOT_NULL);
				if (theResulet == MSG_CHECK_SUCCESS) {
					if(dateType =='decimal'){
						var intValue = parseFloat(propertyValue);
						if(intValue < 0){
							alert(message[i]+"应大于或者等于0");
							eleObj.focus();
							return false;
						}
					}
				} else {
					alert(message[i] + theResulet);
					//转移焦点到字段内
					if (document.all[property[i]].type == "text"||	//文本框
						document.all[property[i]].type == "textarea"|| //文本区
						document.all[property[i]].type == "select-one" //下拉框
						) {
						document.all[property[i]].focus();						
					}
					else if($("input[name="+property[i]+"]").attr("type")=="radio"){ //单选按钮
						$("input[name="+property[i]+"]")[0].focus();
					}
					return false;
					break;
				}
			}
		}
	}
	if (datePropertys!= null&&datePropertys!= ""&&dateMsg!=null&&dateMsg!="") {
		dateProperty = datePropertys.split(",");
		dateMessage = dateMsg.split(",");
		for (i = 0; i < dateProperty.length; i++) {
		     var dateObj = $("input[name='"+dateProperty[i]+"']");
			//判断改字段信息是否在页面存在
			if(dateObj!=null&&dateObj.val()){
				//日期字段如果有值，校验其合法性
				if(!dateObj.attr("disabled")&&dateObj.val().length>0){
					var theResulet = checkDate(dateObj.val());
					if (theResulet) {
					} else {
						alert(dateMessage[i] + "不是合法的日期形式");
						dateObj.focus();
						dateObj.select();
						return false;
						break;
					}
				}
			}
		}
	}
	
	//3.对form中的text和textarea对象 进行长度检查
	if(!checkLen()){
		return false;		
	}
	return true;
}

//对页面为text/textarea对象进行长度检查
function checkLen(){
	 var nodeList = document.getElementsByTagName("input");
	 for(var i = 0; i < nodeList.length;i++){		
		if(nodeList[i].getAttribute("type") != "hidden"){
			var maxLength = nodeList[i].getAttribute('maxLength');	
			//仅针对存在maxLength属性的控件进行控制
			if(maxLength!=null){
		 		var str = nodeList[i].value;
				var len = 0;  
			    for(var j=0;j<str.length;j++) {   
			        char = str.charCodeAt(j);    
			        if(!(char>255)) {      
			            len = len + 1;   
			        } else {      
			            len = len + 2;   
			        }  
			    }
			    if(len > maxLength){
			    	var tt = nodeList[i].parentNode.previousSibling.innerHTML;
			    	var title = tt.replaceAll("：","");	
			    	alert(title+"：最多可输入"+Math.floor(maxLength/2)+"个汉字或"+maxLength+"个英文字符！");		    	
			    	nodeList[i].focus();
			    	return false;
			    }
			}
		}	 	
	 }
	 return true;
}

//根据属性名得到其页面上的值
function getPropertyValue(propertyName){
	var propertyValue="";
	//如果是单选框
	if(document.all[propertyName].length!=null&&document.all[propertyName][0].type=="radio"){
		for(var i=0;i<document.all[propertyName].length;i++){
			if(document.all[propertyName][i].checked==true) 
				propertyValue = " ";
		}
	}
	//文本框、文本区或下拉框
	else if(document.all[propertyName].type=="select-one"){
		propertyValue=$("select[name='"+propertyName+"']").val();
	}else{
		propertyValue=document.all(propertyName).value;
	}
	return propertyValue;
}
	//删除和重新上传附件时删除原附件方法 往后台提交一次,将原附件id设置为0,保存时从数据库删除
		function deleteFile(){
		    document.forms[0].actionType.value="removeFile";
	   		document.forms[0].submit();
		}
		
   var xmlHttp;
   /*****************************************************以下操作，完成页面生成下拉框的功能**************************************/
   //创建xmlHttp对象
   function createXMLHttpRequest(){
   		//如果浏览器支持ActiveX
	   	if(window.ActiveXObject){
	   		xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
	   	}
	   	//如果浏览器支持对象XMLHttpRequest
	   	else if(window.XMLHttpRequest){
	   		xmlHttp=new XMLHttpRequest();
	   	}
   }
   /**
     自动生成二级下拉框以达到局部刷新
    attribName1: 例如：“project.projectTypeId” 
    attribName2: 例如：“project.projectSubTypeId” 
   **/
   function generateOption(attribName1,attribName2){
        var selfName=convertStandardId(attribName1);  
        if(document.all[selfName].value){    
        	var attribName1Value = document.all[selfName].value;
        }else{
        	var attribName1Value = $("input[name="+selfName+"]:checked").val();
        }
   		//创建xmlHttpRequest对象
   		createXMLHttpRequest();
   		//请求地址
   		var url="option.option?attribName1="+attribName1+"&attrib1Value="+attribName1Value+"&attribName2="+attribName2+"&timeStamp="+new Date().getTime();
   		xmlHttp.open("GET",url,false);
   		xmlHttp.onreadystatechange=regerateOptions;
   		xmlHttp.send(null);
   }
   
   /**
     自动生成二级下拉框以达到局部刷新 带2个参数的下拉框
    attribName1: 例如：“person.subjectId” 
    attribName3: 例如：“person.subject2Id” 
    attribName2: 例如：“person.subject3Id” 
   **/
   function generateTwoParamsOption(attribName1,attribName3,attribName2){
        var selfName=convertStandardId(attribName1);
        var selfName3=convertStandardId(attribName3);
   		var attribName1Value = document.all[selfName].value;
   		var attribName3Value = document.all[selfName3].value;
   		//创建xmlHttpRequest对象
   		createXMLHttpRequest();
   		//请求地址
   		var url="option.option?attribName1="+attribName1+"&attrib1Value="+attribName1Value+"&attribName3="+attribName3+"&attribName3Value="+attribName3Value+"&attribName2="+attribName2+"&timeStamp="+new Date().getTime();
   		xmlHttp.open("GET",url,true);
   		xmlHttp.onreadystatechange=regerateOptions;
   		xmlHttp.send(null);
   }
   
   /**
    根据新增还是查询转换成标准id号：
    例如：“project.projectTypeId” 
    	新增时会变成“bean.projectTypeId”
   		查询时会变成“@projectTypeId”
    displayId 原始的Id 如：“project.projectTypeId” 
   */
   function convertStandardId(sourceValue){
	var actionType=document.forms[0].actionType.value;
	var selfName="";
	if("batchUpdateForm"==document.forms[0].name){//批量修改特殊处理
	    var operateId = document.forms[0].operateId.value;//获得操作列的编号
	    selfName="@"+sourceValue.substring(sourceValue.indexOf(".")+1)+"_"+operateId;
	}else if("integratedSearchForm"==document.forms[0].name){//综合查询特殊处理
		selfName="@"+sourceValue;
	}else{
		if("initSearch"==actionType||"popSearch"==actionType||"search"==actionType||actionType.indexOf("statistic")>=0||"saveStaticFilterfields"==actionType
		||"popQueryOptions"==actionType||actionType.indexOf("Search")>=0||"popCompleteQueryOptions"==actionType){
	   	  selfName="@"+sourceValue.substring(sourceValue.indexOf(".")+1);
	   	 }else{
	   	  selfName="bean"+sourceValue.substring(sourceValue.indexOf("."));
	   	 }
   	 }
   	return selfName;
   }
   
  /**
   selfName 自身对象名称
   tgtName 目标对象名称
   categoryName 目标对象对应的常量名
   checkRight 是否检查权限
   **/
   function generateOptionWithRight(modelName,selfName,tgtName,categoryName,checkRight){
   		var selfName=convertStandardId(attribName1);
   		var attribName1Value = document.all[selfName].value;
   		//创建xmlHttpRequest对象
   		createXMLHttpRequest();
   		//请求地址
   		var url="option.option?checkRight=true&attribName1="+attribName1+"&attrib1Value="+attribName1Value+"&attribName2="+attribName2+"&timeStamp="+new Date().getTime();
   		xmlHttp.open("GET",url,true);
   		xmlHttp.onreadystatechange=regerateOptions;
   		xmlHttp.send(null);
   }
  //处理请求结果
    function regerateOptions(){
   		if(xmlHttp.readyState==4){
   			if(xmlHttp.status==200){ 
   				var mes=xmlHttp.responseXML;
   				var targetName=mes.getElementsByTagName("target")[0].firstChild.nodeValue;
   				targetName=convertStandardId(targetName);
   				var mb = document.getElementsByName(targetName)[0];
   				//如果目标对象存在,对其赋值
   				if(mb){
	   				cleanList(mb);
	   				var options=mes.getElementsByTagName("option");
	   				for(i=0;i<options.length;i++){
	   					var option=document.createElement("option");
	   					if(options[i].childNodes[0].firstChild!=null){
	   						option.setAttribute("value",options[i].childNodes[0].firstChild.nodeValue);
	   					}else{
	   						option.setAttribute("value","");
	   					}
	   					option.appendChild(document.createTextNode(options[i].childNodes[1].firstChild.nodeValue));
	   					mb.appendChild(option);
	   				}
   				}
   			}
   		}
   }
   //清除下拉框中的值
	function   cleanList(listObject){
		while(listObject.hasChildNodes()){
			listObject.removeChild(listObject.firstChild);
		}
	
	}
/*****************************************************以下操作，完成页面的某个区域刷新功能**************************************/
/**
  通过Ajax生成区域代码，实现局部刷新
  pageAreaId 区域区 "detail"
  attributeName 触发事件的属性名 例如：project.projectTypeId
  @author zjh
*/
function generateArea(pageAreaId,attribName){
   		//查询:只能用pop()
   		var actionType=document.forms[0].actionType.value;
   		if("initSearch"==actionType||"popSearch"==actionType||"search"==actionType||actionType.indexOf("statistic")>=0||"saveStaticFilterfields"==actionType
   		||"popQueryOptions"==actionType||actionType.indexOf("Search")>=0||"popCompleteQueryOptions"==actionType){
   		  return pop();
   		}
   		//创建xmlHttpRequest对象
   		createXMLHttpRequest();
   		//属性值
   		var thisAttribName="bean".concat(attribName.substring(attribName.indexOf(".")));
   		var attribValue=document.all[thisAttribName].value;
   		//请求地址
   		var url="area.area?pageAreaId="+pageAreaId+"&attribName="+attribName+"&attribValue="+attribValue;
   		//保证同步执行
   		xmlHttp.open("GET",url,true);
   		//回调方法，获得状态
   		xmlHttp.onreadystatechange=function(){
   			areawrite(pageAreaId);
   			//区域刷新后重新获取焦点(获取焦点为触发刷新事件的控件)
   			document.all[thisAttribName].focus();
   			};
   		xmlHttp.send(null);
   }
/**
  回调方法，并将内容写回客户端
  pageAreaId 页面显示的区域
*/
function areawrite(pageAreaId){
   		if(xmlHttp.readyState==4){
   			if(xmlHttp.status==200){
   				var mes=xmlHttp.responseText;
   				document.getElementById(pageAreaId).innerHTML=mes;
   				}
   			}
   }
/*****************************************************以上操作，完成页面的某个区域刷新功能**************************************/

/**
   删除表格的行
  pageAreaId  TBoby行的编号
*/
function deleteRows(pageAreaId){
 var tt=document.getElementById(pageAreaId);
   				var n=tt.rows.length;//行长度 
                for(i=0;i<n;i++){
                 tt.deleteRow(0);//删除某一行 
                }
}

	/**
	 * 校验对象objectName的属性attribName1、和属性attribName2在数据库中是否存在重名，currentId用于编辑查询时排除对象自身
	 * objectName 对象名
	 * attribName1 属性名
	 * attribName2 属性名2
	 * forceFlag 强制检测标识，如果为true，重名不能提交，否则仅提醒重名
	 */
   function checkTwoAttribSameName(objectName,attribName1,attribName2,forceFlag){
   		// 只有在新增时校验重名
   		//if(document.all["actionType"].value=="add"){
	   		//创建xmlHttpRequest对象
	   		createXMLHttpRequest();
	   		var attribValue1=document.all["bean."+attribName1].value;
	   		var attribValue2=document.all["bean."+attribName2].value;
	   		var currentId=document.all["bean.id"].value;
	   		//只有属性值长度大于零时进行校验重名
	   		if(attribValue1.length>0){
		   		//请求地址
		   		var url="eplugger.checkSameName?objectName="+objectName+"&attribName="+attribName1+"&attribValue="+attribValue1
		   		+"&attribName2="+attribName2+"&attribValue2="+attribValue2+"&currentId="+currentId+"&forceFlag="+forceFlag+"&timeStamp="+new Date().getTime();
		   		xmlHttp.open("GET",url,true);
		   		if(forceFlag=="true"){
			   		xmlHttp.onreadystatechange=sameNameAlertForce;
		   		}else{
			   		xmlHttp.onreadystatechange=sameNameAlert;
		   		}
		   		xmlHttp.send(null);
	   		}
   		//}
   }
   
	/**
	 * 校验对象objectName的属性attribName在数据库中是否存在重名，currentId用于编辑查询时排除对象自身
	 * objectName 对象名
	 * attribName 属性名
	 * forceFlag 强制检测标识，如果为true，重名不能提交，否则仅提醒重名
	 */
   function checkSameName(objectName,attribName,forceFlag){
   		// 只有在新增时校验重名
   		//if(document.all["actionType"].value=="add"){
	   		//创建xmlHttpRequest对象
	   		createXMLHttpRequest();
	   		var attribValue=document.all["bean."+attribName].value;
	   		var currentId=document.all["bean.id"].value;
	   		//只有属性值长度大于零时进行校验重名
	   		if(attribValue.length>0){
		   		//请求地址
		   		var url="eplugger.checkSameName?objectName="+objectName+"&attribName="+attribName+
		   		"&attribValue="+attribValue+"&currentId="+currentId+"&forceFlag="+forceFlag+"&timeStamp="+new Date().getTime();
		   		xmlHttp.open("GET",url,true);
		   		if(forceFlag=="true"){
			   		xmlHttp.onreadystatechange=sameNameAlertForce;
		   		}else{
			   		xmlHttp.onreadystatechange=sameNameAlert;
		   		}
		   		xmlHttp.send(null);
	   		}
   		//}
   }
   /**
    * 存在同名时弹出提示信息
    */
   function sameNameAlert(){
	   	if(xmlHttp.readyState==4){
	   			if(xmlHttp.status==200){ 
	   				var mes=xmlHttp.responseXML;
	   				var targetValue=mes.getElementsByTagName("checkResult")[0].firstChild.nodeValue;
	   				//如果存在重名，弹出提示信息
					if(targetValue=="true"){
						alert(mes.getElementsByTagName("alertInfo")[0].firstChild.nodeValue);
						if(document.all["existSameRecord"]!=null){
							document.all["existSameRecord"].value="true";
						}
					}else{
						if(document.all["existSameRecord"]!=null){
							document.all["existSameRecord"].value="false";
						}
					}
	   			}
	   		}	
   }
   /**
    * 存在同名时弹出提示信息,同时不允许提交
    */
   function sameNameAlertForce(){
	   	if(xmlHttp.readyState==4){
	   			if(xmlHttp.status==200){ 
	   				var mes=xmlHttp.responseXML;
	   				var targetValue=mes.getElementsByTagName("checkResult")[0].firstChild.nodeValue;
	   				//如果存在重名，弹出提示信息，并在页面标记重名状态
					if(targetValue=="true"){
						alert(mes.getElementsByTagName("alertInfo")[0].firstChild.nodeValue);
						//在页面标记重名状态，用于判断是否允许提交
						if(document.all["existSameRecord"]!=null){
							document.all["existSameRecord"].value="true";
						}
					}
					//如果不存在重名，清楚页面重名状态的内容
					else{
						if(document.all["existSameRecord"]!=null){
							document.all["existSameRecord"].value="false";
						}
						
					}
	   			}
	   		}	
   }
   
	function WaitObj(ac,ti,ca){
		var action=ac;
		var title=ti==''?'提交':ti;
		var isCancel=ca;
	}
	/**
		将oFrm中的独立单选按钮自动选择
	*/
	function automaticChooseSingleRadio(oFrm){
		for (i = 0; i < oFrm.elements.length; i++) {
		type = oFrm.elements[i].type;
		if ((type == "radio") && isNaN(document.all[oFrm.elements[i].name].length)) {
			oFrm.elements[i].checked="true";
		}
		}
	}
	
	/**
		显示更多查询
	**/
	function moreSearch(){
		var moreSearchDisplay=false;
		if(document.all["queryBean.defaultSearchFlag"].value=="1"){
			moreSearchDisplay=true;
		}
		
		if(moreSearchDisplay){
			document.all['more'].style.display='block';
			document.all["queryBean.defaultSearchFlag"].value="0";
		}else{
			document.all['more'].style.display='none';
			document.all["queryBean.defaultSearchFlag"].value="1";
		}
	}

//控制左侧框架的宽度
	function changeframe(direction){
	     if(direction=="left"){
		  table.style.display="none";
		  toLeft.style.display="none";
		  toRight.style.display="";
		  top.window.frames["leftFrame"].scrollTo(0, 0);
		  top.window.frames["leftFrame"].document.body.scroll="no";
	      top.content.cols="25,*";
		 }
		 if(direction=="right"){
		  table.style.display="";
		  toLeft.style.display="";
		  toRight.style.display="none";
		  top.window.frames["leftFrame"].document.body.scroll="auto";
	      top.content.cols="146,*";
		 }
	}
	//根据左侧框架的宽度，决定显示的内容
	function adjustContent(){
	    if(top.content.cols=="25,*"){
	    	top.window.frames["leftFrame"].document.body.scroll="no";
		  	table.style.display="none";
		    toLeft.style.display="none";
		    toRight.style.display="";
		}
	}
	
//**************************************	DWR 实现自动完成 开始   ××××××××××××××××××××××××××××××××××××××××

   //初始化需要自动完成的文本框信息
   var autoComplete = null;
   function initAjaxText(textName){
        var configuration = {
          instanceName: "autoComplete",
          textbox: document.getElementById(textName)
        };
        autoComplete = new neverModules.modules.autocomplete(configuration);
        autoComplete.useContent = true;
	    autoComplete.useSpaceMatch = true;
	    autoComplete.ignoreWhere = true;
	    autoComplete.create();
   }
   /* 显示autoComplete */
   function showAutocomplete(evt) {
     autoComplete.hdleEvent(evt);
     window.setTimeout(function () {
       autoComplete.closeAnimateImage();
       },1000);
   }
   /**
    * textName 文本区属性名
    * textId 文本区字段对应的编号字段名
    * isNeedUnit 如果值为"true",则检索时判断是否加单位条件,（可选）
    * actiontType 提交动作
    */
      //根据用户输入生成信息提示
   var userInput="";
   //文本框对应的编号属性，eg bean.chargerCode
   var idTextName="";
   //文本框的属性名称,eg bean.chargerName
   var displayTextName=""; 
   function generatorSuggestContent(textName,textId,isNeedUnit){
		//初始化自动生成
   		if(autoComplete==null){
	   		initAjaxText(textName);
	   		idTextName=textId;
	   		displayTextName=textName;
   		}
        //关闭原因 不兼容 IE7和firefox
        //if (window.event!=null && autoComplete.isValidKey(window.event)==false ) {
//          showAutocomplete(window.event);
         // return;
       // }
       var thisData;
       thisData={personName:document.all[textName].value};
       if(isNeedUnit){
       		thisData.isNeedUnit = isNeedUnit;
       }
       //控制中文录入过程中，不查询
       if(document.all[textName].value!=''){
       		if(userInput==document.all[textName].value){
       			PersonBO.searchPerson(thisData,pageLoadHdle);
       		}else{
	       		//输入信息改变时，将编号对应的名称置为空
       	   		document.all[textId].value="";
	       		PersonBO.searchPerson(thisData,pageLoadHdle);
	       		userInput=document.all[textName].value;
       		}
       }
   }
  function pageLoadHdle(data) {
         autoComplete.setDataSource(data);
         autoComplete.callback = function (autocompleteValue, autocompleteContent) {
         	//autocompleteValue值结构为“职工号：asdf
	        PersonBO.getPersonByAccount(autocompleteContent.split(":")[1],getIdByAccount);
	        document.all[displayTextName].value=autocompleteValue;
         }
         autoComplete.create();
         autoComplete.expandAllItem();
         autoComplete.showAnimateImage("../widgets/suggest/images/indicator.gif");
         window.setTimeout(
          function closeAnimateImageAfter1seconds() { 
            autoComplete.closeAnimateImage();
          }, 1000);
      }
  //通过人员职工号得到人员编号、部门编号、教研室编号    
  function getIdByAccount(data){
  		//autoComplete.callback = function (autocompleteValue, autocompleteContent) {
	  		for(i=0;i<data.length;i++){
	  			document.all[idTextName].value = data[i].content.split(":")[0];
	       		//if(data[i].content==autocompleteContent){
	       		//部门
       			if(document.all["author.authorUnitId"]!=null){
       				document.all["author.authorUnitId"].value=data[i].content.split(":")[1];
       			}
       			if(document.all["bean.unitId"]!=null){
       				document.all["bean.unitId"].value=data[i].content.split(":")[1];
       				changeUnitIdDisabledStatus();
       			}
       			if(document.all["bean.divisionId"]!=null){
       				document.all["bean.divisionId"].value=data[i].content.split(":")[2];
       			}
       			//教研室
       			if(document.all["author.authorDivisionId"]!=null){
       				document.all["author.authorDivisionId"].value=data[i].content.split(":")[2];
       			}
       			if(document.all["bean.authorDivisionId"]!=null){
       				document.all["bean.authorDivisionId"].value=data[i].content.split(":")[2];
       			}
       			//人员编号
       			if(document.all["author.authorId"]!=null){
       				document.all["author.authorId"].value=data[i].content.split(":")[0];
       			}
       			if(document.all["bean.authorId"]!=null){
       				document.all["bean.authorId"].value=data[i].content.split(":")[0];
       			}
       			//性别
       			if(document.all["author.sexId"]!=null){
       				document.all["author.sexId"].value=data[i].content.split(":")[3];
       			}
       			if(document.all["bean.sexId"]!=null){
       				document.all["bean.sexId"].value=data[i].content.split(":")[3];
       			}
       			if(document.all["bean.chargerGender"]!=null){
       				document.all["bean.chargerGender"].value=data[i].content.split(":")[3];
       			}
       			//职称
       			if(document.all["author.titleId"]!=null){
       				document.all["author.titleId"].value=data[i].content.split(":")[4];
       			}
       			if(document.all["bean.titleId"]!=null){
       				document.all["bean.titleId"].value=data[i].content.split(":")[4];
       			}
       			if(document.all["bean.applierTitleId"]!=null){
       				document.all["bean.applierTitleId"].value=data[i].content.split(":")[4];
       			}
       			if(document.all["bean.chargerTitleId"]!=null){
       				document.all["bean.chargerTitleId"].value=data[i].content.split(":")[4];
       			}
       			//学历
       			if(document.all["author.eduLevelId"]!=null){
       				document.all["author.eduLevelId"].value=data[i].content.split(":")[5];
       			}
       			if(document.all["bean.apllierEduLevelId"]!=null){
       				document.all["bean.apllierEduLevelId"].value=data[i].content.split(":")[5];
       			}
       			if(document.all["bean.eduLevelId"]!=null){
       				document.all["bean.eduLevelId"].value=data[i].content.split(":")[5];
       			}
       			//学位
       			if(document.all["author.eduDegreeId"]!=null){
       				document.all["author.eduDegreeId"].value=data[i].content.split(":")[6];
       			}
       			//学位
       			if(document.all["bean.eduDegreeId"]!=null){
       				document.all["bean.eduDegreeId"].value=data[i].content.split(":")[6];
       			}
       			//出生日期
       			if(document.all["bean.birthday"]!=null){
       				document.all["bean.birthday"].value=data[i].content.split(":")[7];
       			}
       			if(document.all["bean.chargerBrithday"]!=null){
       				document.all["bean.chargerBrithday"].value=data[i].content.split(":")[7];
       			}
       			//行政职务
       			if(document.all["bean.duty"]!=null){
       				document.all["bean.duty"].value=data[i].content.split(":")[8];
       			}
       			//学术兼职
       			if(document.all["bean.learningBywork"]!=null){
       				document.all["bean.learningBywork"].value=data[i].content.split(":")[9];
       			}
       			if(document.all["bean.workUnit"]!=null){
       				document.all["bean.workUnit"].value=data[i].content.split(":")[1];
       			}
       			if(document.all["bean.tel"]!=null){
       				document.all["bean.tel"].value=data[i].content.split(":")[10];
       			}
	       		//}
	       }
	   //}    
  }    
  
  /**
    改变单位的Disabled的状态
  */
  function changeUnitIdDisabledStatus(){
	if(document.all["bean.unitId"].value!=""){
//	 if(document.all["bean.divisionId"]!=null){
//	 	generateOption("project.unitId","project.divisionId");
//	 }
	 document.all["bean.unitId"].disabled=true;
	}else{
	 document.all["bean.unitId"].disabled=false;
	}
  }
  
//——————————————————————————————————————————————————        DWR 实现自动完成 结束             ———————————————————   


/*****************************************************以下操作，完成审核功能**************************************/

 //多条审核新增页面
	function checkListAdd(moduleName,pageForm){
	  if(isSelected()){
	  var moduleIds=getModuleIds(); 
	   window.location="../check/check.do?actionType=checkListAdd&moduleIds="+moduleIds+"&moduleName="+moduleName+"&pageFrom="+pageForm;
	  }else{
	    alert("请选择需要审核的记录");
		   return;
	    }
	}
	//将所选择的moduleIds组成以逗号隔开的字符串
	function getModuleIds(){
	   var fromSelect = document.getElementsByName("selected"); 
	   var moduleIds="";
	   for (var i = 0; i <fromSelect.length; i++) {
		if (fromSelect[i].checked == true) {
		  moduleIds+=fromSelect[i].value+",";
		}
		if(i==fromSelect.length-1){
		 moduleIds=moduleIds.substring(0,moduleIds.length-1);
		}
	   }
	   return moduleIds;
	}
/*****************************************************以上操作，完成审核功能功能**************************************/
 
/****************************************************以下操作，完成点击列表标题排序功能*******************************/
	/**
		针对特定列信息进行排序
		columnName 排序的列名
		orderType 排序方式：升序或降序
	*/
	var columnName,orderType,modelName;
	function orderContent(objectName,param1,param2){
		columnName=param1;
		orderType=param2;
		modelName=objectName;
		var result=PageListTag.getOutputTableForDWR(modelName,"commonList",true,true,true,columnName,orderType,refreshTableContent);
	}
	
	function refreshTableContent(result){
		var tableContent="<table cellSpacing='0' cellPadding='0' id='table' align='center' border='0'>";
		tableContent+=result;
		tableContent+="</table>";		
		document.getElementById("listContent").innerHTML=tableContent;
		var tdObj=document.getElementById("title_"+columnName);		
	}
/*****************************************************以上操作，完成点击列表标题排序功能*******************************/	
//得到当前应用的地址
function getWebAppAddress(){
	var address=window.document.location.protocol+"//"+window.document.location.host;
	var pathname=window.document.location.pathname.substr(1);
	pathname=pathname.substr(0,pathname.indexOf("/"));
	address+="/"+pathname;
	return address;
}

/*****************************************************保存成功后的弹出层效果**************************************/
	
var docEle = function() 
{
    return document.getElementById(arguments[0]) || false;
}
//moduleId:所属模块person
//optionType:操作方式add,edit
function openNewDiv(moduleId,optionType) 
{
	var optionName="编辑";
	
	if(moduleId == "contract"){//横向与枞向共用一个Action请求
		moduleId = "project";
	}
	var addOrEditLink=moduleId+".do?actionType=edit";
	if("add"==optionType){
		optionName="新增";
		addOrEditLink=moduleId+".do?actionType=add";
	}
	
    var m = "mask";
    if (docEle("remindDiv")) document.body.removeChild(docEle("remindDiv"));
    if (docEle(m)) document.body.removeChild(docEle(m));    
    
    //新弹出层
    var newDiv = document.getElementById("PopupDiv");    
    DivRefWidth = 401;
	DivRefHeight = 203;
	newDiv.style.width = DivRefWidth + "px";
	newDiv.style.height = DivRefHeight + "px";
	newDiv.style.top = (document.body.scrollTop + document.body.clientHeight/2 - DivRefHeight/2) + "px";
	newDiv.style.left = (document.body.scrollLeft + document.body.clientWidth/2 - DivRefWidth/2) + "px";
	newDiv.style.display = "block";
	newDiv.style.zIndex = "60";
    
    newDiv.style.backgroundImage="url('../../css/css_default/img/save.jpg')";
    var divHead = "<div class='top'>提示信息</div>"+
    					"<div style='float:right;margin-right:5px;cursor:hand' onclick='DivSetVisible(false)' align='right'><img src='../../css/css_default/img/x.gif' border='0'></div>"+
    					"<br><div class='text'>信息操作成功！</div><br><div class='text_1'>请选择下一步操作:<br><br>"; 
   
    var divBody = ""; 
    if(arguments.length > 2){    	
    	var link_action = arguments[2].split("&&");
    	var link_content = arguments[3].split("&&");   	
    	
    	if(link_action.length < 4){    		
    		for(var i = 0; i < link_action.length ;i++){
    			divBody += "[<a href='"+link_action[i]+"' class='list_link'>"+link_content[i]+"</a>]<br>";
    		}    	
    	}else{  //大于4行时, 两个排一行
    		for(var i = 0; i < link_action.length ;i++){
    			divBody += "[<a href='"+link_action[i]+"' class='list_link'>"+link_content[i]+"</a>]&nbsp;&nbsp;";
    			if(i % 2 == 0){
    				divBody += "<br>";
    			}
    		} 
    	}
    }else{//通用 Div层提示    	
    	divBody = "[<a href='"+addOrEditLink+"' class='list_link'>继续"+optionName+"</a>]<br>"+
		"<br>[<a href='"+moduleId+".do?actionType=list'  class='list_link'>返回列表</a>]" ;
    } 
    var divFoot ="</div>";    
    newDiv.innerHTML = divHead+divBody+divFoot;
    
    //mask遮罩层
    var newMask = document.createElement("div");
    newMask.id = "maskLayer";
    newMask.style.position = "absolute";
    newMask.style.zIndex = "50";
    _scrollWidth = Math.max(document.body.scrollWidth,document.documentElement.scrollWidth);
    _scrollHeight = Math.max(document.body.scrollHeight,document.documentElement.scrollHeight);
    newMask.style.width = _scrollWidth + "px";
    newMask.style.height = _scrollHeight + "px";
    newMask.style.top = "0px";
    newMask.style.left = "0px";
    newMask.style.background = "ebebeb";
    newMask.style.filter = "alpha(opacity=40)";
    newMask.style.opacity = "0.40";  
    newMask.style.display="block";

    //创建iframe对象，作为div层遮盖界面select元素
    var ifrRef = document.getElementById("DivShim");
    ifrRef.style.width = newDiv.offsetWidth;
    ifrRef.style.height = newDiv.offsetHeight;
    ifrRef.style.top = newDiv.style.top;
    ifrRef.style.left = newDiv.style.left;
    ifrRef.style.zIndex = newDiv.style.zIndex -1;		
    ifrRef.style.display = "block";

    document.body.appendChild(newMask);  
     
    //设置界面select元素不可编辑
	var allElement = document.all;	
	for(var i=0;i<allElement.length;i++){
		if(allElement[i].tagName=="SELECT"){
			allElement[i].disabled=true;
		}
	}
}

//设置提示信息窗口的隐藏
function DivSetVisible(state){
	var DivRef = document.getElementById('PopupDiv');
	var IfrRef = document.getElementById('DivShim');
	var maskLayer = document.getElementById('maskLayer');
	DivRef.style.display = "none";
	IfrRef.style.display = "none";
	maskLayer.style.display = "none";
	var allElement = document.all;	
	
	//恢复界面select元素可编辑
	for(var i=0;i<allElement.length;i++){
		if(allElement[i].tagName=="SELECT"){
			allElement[i].disabled=false;
		}
	}
}

//当select需要常量参数,而没有得到时,给用户提示信息
function beforeSelectPrompt(name){
	var obj = document.getElementsByName("bean."+name)[0];
	if(obj == null){
		obj = document.getElementsByName("@"+name)[0];
	}
	if(obj.selectedIndex < 1){
		var tt = obj.parentNode.parentNode.previousSibling.innerHTML;
		if(undefined==tt){
		  var title = "";
		}else{
		  var title = tt.replaceAll("：","");	
		}
		if(obj.disabled==false){
		    alert('请先选择：'+title);
			obj.focus();
		}
	}
}

/**
 * @param  object  elem : the DOM element to be used
 * @param  string  attr : the attribute to get
 * @return boolean      : the value of the attribute or null on error
 */
function elemGetAttribute(elem,attr) {
   try {
      return eval("elem."+attr);
   } catch (e) {
      return null;
   }
}
/**
 * 创建选择数据弹出层
 */
function createDataScopeDIV(act){
	if(parseInt(act)>1){
		var div= document.createElement("div");
		div.id = "allselect";
		div.innerHTML = "<div class='allselect'>已选中本页数据&nbsp;<a  onClick=MM_showHideLayers('allselect','','hide','1') style='cursor:hand;'>点击选中所有页面数据</a></div>";
		document.body.appendChild(div); 
	}
}

/** ***************************       引入jquery autoComplete  张巧飞	20100924    *******************************************/
//人员信息
var personAutoComplete;
//从库中读取人员数据信息
function getPersonAutoCompleteInfo(unitScope){
	$.getJSON("../person/person.do?actionType=autoComplete&userManageScope="+unitScope+"&date="+new Date(),initPersonInfo);
}

//清除自动完成组件
function cleanPersonAutoComplete(attribName){
	$("input[name='"+attribName+"']").unautocomplete();
	$("input[name='"+attribName+"']").unbind();
}
//绑定自动完成组件
function bindPersonAutoComplete(attribName){
	$("input[name='"+attribName+"']").autocomplete(personAutoComplete, {
		mustMatch:true,
		selectFirst:true,
		scroll:true,
		minChars: 0,
		cacheLength:1,
		max:40,
		width: 400,
		scrollHeight: 250,
		matchContains: "word",
		autoFill: false,
		formatItem: function(row, i, max) {
			return i + "/" + max + ": \"" + row.name + "\" "  + " ["+row.unitName+"] "+ row.spell+" 职工号："+row.account;
		},
		formatMatch: function(row, i, max) {
			return row.spell + " " + row.name+" "+row.unitName;
		},
		formatResult: function(row) {
			return row.name.substr(1,row.name.length);
		}
	});
	
	$("input[name='"+attribName+"']").result(cascadeChangePersonInfo);   
}

/** ***************************       引入jquery autoComplete  结束    ************************ssssssssss*******************/

/** ***************************  引入jquery 动态验证某属性在系统中是否重复出现	 张金辉 20110322 *******************************************/   
/**
例如：检验名称为“test”的项目是否存在，其中columnNames为回显列表的列名，用逗号隔开。 参数传递如下：
objectName :project;
limitProperty:name;
remindContent:项目名称的项目已经存在，如下所示：
columnNames：name,code,chargerName,unitId
**/
function checkPropertyValueSame(objectName,limitProperty,remindContent,columnNames){
 //初始化参数
 var id=document.all["bean.id"].value;
 var limitPropertyValue=$("#"+limitProperty).val();
 var url=document.forms[0].action+"?actionType=checkPropertyValueSame&id="+id+"&objectName="+objectName+"&limitProperty="+limitProperty+"&limitPropertyValue="+limitPropertyValue+"&columnNames="+columnNames;
 //调用服务器端程序 
 $.get(url,function(data){
  if(data!=""){
    //showPrompt('#authorizeSn', '相同项目批准号已经存在,如下所示：',data,false,false,"callbackFunction",0,0,600,200);
    showPrompt("#"+limitProperty, remindContent,data,"callbackFunction");
   }else{
   	$.popup._autoClose();
   }
 });
}
/** *************************** 引入jquery 动态验证某属性在系统中是否重复出现	 张金辉   20110322  *******************************************/
/**
 * 
 * 实现Enter键自动将焦点切换到表单下一个控件对象上
 */
function addEnterEvent(){
	$("form").keyup(function() {
		//判断回车符号
		if(event.keyCode==13){
			var srcElementName=event.srcElement.name;
			//获取当前对象在表单中的位置
			var currentIndex=$("form :input:visible").index(event.srcElement);
			if(currentIndex<$("form :input:visible").size()-1){
				while($("form :input:visible").get(currentIndex).name==$("form :input:visible").get(currentIndex+1).name){
					currentIndex=currentIndex+1;
				}
				while($("form :input:visible").get(currentIndex+1).type=="hidden"){
					currentIndex=currentIndex+1;
				}				
				$("form :input:visible").get(currentIndex+1).focus();
			}
		}
	});
}

/** *************************** 精确计算	 鲁璇   20120229  *******************************************/
//JS 精确计算 乘法
	function FloatMul(arg1,arg2){    
	  var m=0,s1=arg1.toString(),s2=arg2.toString();    
	  try{m+=s1.split(".")[1].length}catch(e){}    
	  try{m+=s2.split(".")[1].length}catch(e){}    
	  return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m);   
   }    
	//JS 精确计算 除法
	function FloatDiv(arg1,arg2){    
	  var t1=0,t2=0,r1,r2;    
      try{t1=arg1.toString().split(".")[1].length}catch(e){}    
      try{t2=arg2.toString().split(".")[1].length}catch(e){}    
	   with(Math){    
	      r1=Number(arg1.toString().replace(".",""));    
	      r2=Number(arg2.toString().replace(".",""));    
	      return (r1/r2)*pow(10,t2-t1);    
	   }    
	}
	//JS 精确计算 加法
	function FloatAdd(arg1,arg2){   
	 var r1,r2,m;   
	 try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0}   
	 try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0}   
	 m=Math.pow(10,Math.max(r1,r2));   
	 return (arg1*m+arg2*m)/m;   
   }   
   //JS 精确计算 减法   
   function FloatSub(arg1,arg2){   
	 var r1,r2,m,n;   
	 try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0}   
	 try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0}   
	 m=Math.pow(10,Math.max(r1,r2));   
	 //动态控制精度长度   
	 n=(r1>=r2)?r1:r2;   
	 return ((arg1*m-arg2*m)/m).toFixed(n);   
   } 
		
	//四舍五入
	function JSRound(fNum,fBit){
	 var i = 1;
	 var m = 1;
	 var tempNum = fNum;
	 for(i=1;i <= fBit;i++)
	  m = m * 10;
	 tempNum = tempNum * m;
	 tempNum = Math.round(tempNum);
	 tempNum = tempNum / m;
	 return tempNum;
	} 
	
   //日期和年度查询切换
   function yearDateChange(attribName,dateType){
     var attribName1 = attribName.replace('.','\\.');
     $("#"+attribName1+"_"+dateType).css("display","");
      //显示年度隐藏日期
     if(dateType=="Select"){
       $("#"+attribName1+"_Input").css("display","none");
       //因为select和input的name相同的话，后台接收有问题，因此在这里处理
       $("input[name='@"+attribName+"&>=']").attr("disabled",true);
       $("input[name='@"+attribName+"&<=']").attr("disabled",true);
       $("select[name='@"+attribName+"&>=']").attr("disabled",false);
       $("select[name='@"+attribName+"&<=']").attr("disabled",false);
	   //如果不是年度范围查询，在切换查询时还原为初始的代码
       $("select[name='@"+attribName+"']").attr("name","@"+attribName+"&>=");
       $("input[name='dateScope_@"+attribName+"']").attr('checked',true);
       $("select[name='@"+attribName+"&<=']").attr('disabled',false);
     }
     //显示日期隐藏年度
     if(dateType=="Input"){
       $("#"+attribName1+"_Select").css("display","none");
       //因为select和input的name相同的话，后台接收有问题，因此在这里处理
       $("select[name='@"+attribName+"&>=']").attr("disabled",true);
       $("select[name='@"+attribName+"&<=']").attr("disabled",true);
       $("input[name='@"+attribName+"&>=']").attr("disabled",false);
       $("input[name='@"+attribName+"&<=']").attr("disabled",false);
     }
      //清空历史数据
      $("select[name='@"+attribName+"&>=']").val("");
      $("select[name='@"+attribName+"&<=']").val("");
      $("input[name='@"+attribName+"&>=']").val("");
      $("input[name='@"+attribName+"&<=']").val("");
   }
   //年度查询和年度范围查询切换
   function changeDateDisplay(target,attribName){
	//如果选中时间范围，两个时间条件均有效。否则仅第一个时间条件有效且其查询条件变为等于某一时间
	var attr1 = $("select[name='"+attribName+"&>=']");
    var attr2 = $("select[name='"+attribName+"&<=']");
	if(target.checked){
		if(attr2!=undefined)
			attr2.attr("disabled",false);
		$("select[name='"+attribName+"']").attr("name",attribName+"&>=");
	}else{
		if(attr2!=undefined){
			attr2.val("");
			attr2.attr("disabled",true);
		}
		if(attr1!=undefined)
		    attr1.attr("name",attribName);
	}
  }