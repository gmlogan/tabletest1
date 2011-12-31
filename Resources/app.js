// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');
var screenWidth = Titanium.Platform.displayCaps.platformWidth;
var rightSide = screenWidth*0.25;
var leftSide = screenWidth*0.1;
// create tab group
var tabGroup = Titanium.UI.createTabGroup();

//at startup only
function executeOnlyFirstTime() 
{
    Ti.App.Properties.setBool('didRun', true);
    //rest of the code
    alertDialog = Titanium.UI.createAlertDialog({
    title: 'Hello',
    message: 'You got a suprise',
    buttonNames: ['OK','Doh!']});
   	alertDialog.show; 
    
        }
 


//




//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'#fff'
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Tab 1',
    window:win1
});

var label1 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 1',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});
//table test code
//Data structure for array of rows
var myRows = [];
//Add 200 rows
//Each row has a 'classname' so it can be referanced later 'test'+iLoop
//add 2 labels one 1left and other right hand side
for (var iLoop =0; iLoop <200; iLoop++){
	myRows[iLoop] = Titanium.UI.createTableViewRow();
	myRows[iLoop].add(Titanium.UI.createLabel({text:'Update '+iLoop, left:leftSide}));
	myRows[iLoop].add(Titanium.UI.createLabel({text:'Row '+iLoop,right:rightSide}));
}
//create table and an the array of row data to it
var tableView = Titanium.UI.createTableView({data:myRows});
win1.add(tableView);

var tempRowHolder;
//add listener event for a row touch
//read the row data pointer to temp
//overwrite a value
//
tableView.addEventListener('click',function(e){
	tempRowHolder = e.row;
	tempRowHolder.children[0].text ='updated';
})
//
//win1.add(label1);

//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({  
    title:'Tab 2',
    backgroundColor:'#fff'
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Tab 2',
    window:win2
});

var label2 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 2',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win2.add(label2);



//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  


// open tab group
tabGroup.open();
var didRun = Ti.App.Properties.getBool('didRun');
 
if (1==1) {
    executeOnlyFirstTime();
}