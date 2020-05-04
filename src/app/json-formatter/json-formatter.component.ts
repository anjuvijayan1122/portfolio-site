import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-json-formatter',
  templateUrl: './json-formatter.component.html',
  styleUrls: ['./json-formatter.component.scss']
})
export class JsonFormatterComponent implements OnInit {
  userInput;
  userOutput;

  constructor() { }

  ngOnInit() {
  }

  format() {
    this.userOutput = JSON.stringify(this.sortByKey(JSON.parse(this.userInput)),null,4);
  }

  sortByKey(jsObj){
    var sortedArray = [];
    var sortedKeys = Object.keys(jsObj).sort();
    var obj = {};

    for (let keyElem in sortedKeys) {
     var value = jsObj[sortedKeys[keyElem]];
      if(this.isJson(value)) {
       value= this.sortByKey(jsObj[sortedKeys[keyElem]])
      }
      obj[sortedKeys[keyElem]]  =value;
    }

    return obj;
    console.log("json", obj);
  }

  isJson(str) {
    console.log("Type of: "+str+" is :"+ typeof(str));
    if(str==null|| str == undefined){
      return false;
    }
    if( typeof(str) === 'object' ) {
      return true; 
    } 
    return false;  
  }
}
