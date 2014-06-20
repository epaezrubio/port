var List = function () {

    if (!(this instanceof List))
        return new List();

}
List.prototype.list = [1];
List.prototype.get = function (n) {
    return this.list[n];
}

var SortedList = function () {

    if (!(this instanceof SortedList))
        return new SortedList();
    
    var a = List.call(SortedList);

}

//
//SortedList.prototype.set = function (item) {
//    this.list.push(item);
//}


var myList = new List();
var myNewList = new SortedList();


    console.log(List())
    console.log(List.call(List))
