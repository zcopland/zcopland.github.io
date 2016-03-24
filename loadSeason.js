// START OF DATA GET CODE

/**
 * Maps the spreadsheet cells into a dataframe, consisting of an array of rows (i.e. a 2d array)
 * In many cases we have empty rows or incomplete rows, so you can skip those by including 
 * the realrowlength parameter - it will skip any rows that don't have this length.
 * Alternatively, you can just choose to skip the first 'n' rows by setting the skip parameter.
 */
function mapEntries(json, realrowlength, skip){
  if (!skip) skip = 0;
  var dataframe = [ ];
  
  var row = [ ];
  for (var i=0; i < json.feed.entry.length; i++) {
    var entry = json.feed.entry[i];
    if (entry.gs$cell.col == '1') {
      if (row !== null) {
        if ((!realrowlength || row.length === realrowlength) && (skip  === 0)){
           dataframe.push(row);
        } else {
           if (skip > 0) skip--;
        }
      }
      row = [ ];
    }
    row.push(entry.content.$t);
  } 
  dataframe.push(row);
  return dataframe;
}


//Do Something with Data Tree
function doSomethingWithDataTree(root){

	var output = document.createElement('div');
    output.id = 'output';

	for(i=1; i<root.children.length;i++){
		output.innerHTML += '</br>' + root.children[i].name + '  ' + root.children[i].score + ' points';
	}
   
    document.body.appendChild(output);
}


function onGoogleSheetReady(data){
  //
  // Convert the JSON into a nice array
  //
  var dataframe = mapEntries(data,null,1);
  //
  // Build a "tree" from each of the data rows 
  //
  // Each leaf in the tree has a name, price and exchange
  //
  var root =  {};
    root.name = "Player Data";
    root.children = [ ];
    for (i=0;i<dataframe.length;i++){
      var item = {};
      item.name = dataframe[i][0];
      item.score = Number(dataframe[i][1]); // we must use "value" instead of price since that is what the layout requires
      root.children.push(item);
    }
  console.log(root); 
    
  //
  // Do something with the data tree
  //
  doSomethingWithDataTree(root);
}



function getScoreData(){
  if (container) {
     container.parentNode.removeChild(container);
    }
  var o = document.getElementById("output");
  if (o) {
     o.parentNode.removeChild(o);
    }
  var container = document.createElement('div');
  document.body.appendChild(container);
  var googleSSI = document.createElement('script');
  googleSSI.src = "https://spreadsheets.google.com/feeds/cells/1bcYp3oPVOTTxuOhUgGB6_ss0xxNCkTBHImhOA7Z2UAs/od6/public/values?alt=json-in-script&callback=onGoogleSheetReady";
  container.appendChild(googleSSI);
    
}
