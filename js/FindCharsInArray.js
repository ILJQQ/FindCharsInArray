/**
 * Created by huyiqing on 16/11/17.
 */
var arr = ["a","x","b","d","m","a","k","m","p","j","a"];
var index = new Array();
var max = new Array();
var finalMax = new Array();
var count = 0;
var getCount= 0;
var msg;

//使用双循环对重复次数进行比较通过用重复次数最高的字符替换max得到重复次数最多的字符
//调用方法找到次数最多的字符分别出现的位置并将所有内容按格式整合输出

function getMax() {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                count++;
            }
        }
        if (count >= getCount) {
            getCount = count;
            max.push(arr[i]);
        }
        count = 0;
    }
    getIndex();
    addToFinal(max);
    msg = "出现次数最多的元素有: " + finalMax.length +"个, 共出现了" + getCount +"次, 它(它们)是: " + finalMax + ".  其中: ";
    for(var i =0; i < finalMax.length; i++){
        getIndex(finalMax[i]);
        msg += "元素" + finalMax[i] + "出现的位置是" + index +". ";
        index = new Array();
    }
    document.getElementById("getMax").innerHTML = msg;
    index = new Array();
}

//用单循环查找到分别出现的位置
function getIndex(cha){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == cha){
            index.push(i);
        }
    }
}

function init(){
    index = new Array();
}

//通过筛选项结果数组中添加数据
function addToFinal(newArr){
    var con = 0;
    var maxCon = 0;
    for(var k = 0; k < arr.length; k++){
        if(arr[k] == newArr[newArr.length - 1]){
            maxCon++;
        }
    }
    for(var n = 0; n < newArr.length; n++){
        for(var m = 0; m < arr.length; m++){
            if(arr[m] == newArr[n]){
                con++;
            }
        }
        if(con == maxCon){
            finalMax.push(newArr[n]);
        }
        con = 0;
    }

}

