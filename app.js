(function () {
    "use strict";
    var el = function (element) {
        if (element.charAt(0) === "#") {
            return document.querySelector(element);
        }
        return document.querySelectorAll(element);
    };
    var viewer = el("#space"),
        equals = el("#equal"),
        nums = el(".button"),
        ops = el(".operators"),
        theNum = "",
        oldNum = "",
        resultNum,
        operator;
    var setNum = function () {
        if (resultNum) {
            theNum = this.getAttribute("data-num");
            resultNum = "";
        } else {
            theNum += this.getAttribute("data-num");
        }
        console.log(theNum + " is clicked");
        viewer.innerHTML = theNum;
    };
    var moveNum = function () {
        oldNum = theNum;
        theNum = "";
        operator = this.getAttribute("data-ops");
        console.log(operator + " is clicked");
    };
    var displayNum = function () {
        oldNum = parseFloat(oldNum);
        theNum = parseFloat(theNum);
        switch (operator) {
            case "plus":
                resultNum = oldNum + theNum;
                break;
            case "minus":
                resultNum = oldNum - theNum;
                break;
            case "times":
                resultNum = oldNum * theNum;
                break;
            case "divided by":
                resultNum = oldNum / theNum;
                break;
            default:
                resultNum = theNum;
        }
        if (!isFinite(resultNum)) {
            if (isNaN(resultNum)) {
                resultNum = "0";
            } else {
                resultNum = "Undefined";
            }
        }
        viewer.innerHTML = resultNum;
        equals.setAttribute("data-result", resultNum);
        oldNum = 0;
        theNum = resultNum;
    };
    var clearAll = function () {
        oldNum = "";
        theNum = "";
        viewer.innerHTML = "0";
        equals.setAttribute("data-result", resultNum);
    };
    for (var i = 0, l = nums.length; i < l; i++) {
        nums[i].onclick = setNum;
    }
    for (var i = 0, l = ops.length; i < l; i++) {
        ops[i].onclick = moveNum;
    }
    equals.onclick = displayNum;
    equals.onclick(console.log(" =  is clicked"));
    el("#ac").onclick = clearAll;
})();
