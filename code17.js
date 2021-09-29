gdjs.LogMenuCode = {};
gdjs.LogMenuCode.GDNewObjectObjects1= [];
gdjs.LogMenuCode.GDNewObjectObjects2= [];
gdjs.LogMenuCode.GDNewObject3Objects1= [];
gdjs.LogMenuCode.GDNewObject3Objects2= [];
gdjs.LogMenuCode.GDNewObject2Objects1= [];
gdjs.LogMenuCode.GDNewObject2Objects2= [];
gdjs.LogMenuCode.GDNewObject4Objects1= [];
gdjs.LogMenuCode.GDNewObject4Objects2= [];

gdjs.LogMenuCode.conditionTrue_0 = {val:false};
gdjs.LogMenuCode.condition0IsTrue_0 = {val:false};
gdjs.LogMenuCode.condition1IsTrue_0 = {val:false};
gdjs.LogMenuCode.condition2IsTrue_0 = {val:false};


gdjs.LogMenuCode.mapOfGDgdjs_46LogMenuCode_46GDNewObject4Objects1Objects = Hashtable.newFrom({"NewObject4": gdjs.LogMenuCode.GDNewObject4Objects1});gdjs.LogMenuCode.mapOfGDgdjs_46LogMenuCode_46GDNewObject2Objects1Objects = Hashtable.newFrom({"NewObject2": gdjs.LogMenuCode.GDNewObject2Objects1});gdjs.LogMenuCode.mapOfGDgdjs_46LogMenuCode_46GDNewObject3Objects1Objects = Hashtable.newFrom({"NewObject3": gdjs.LogMenuCode.GDNewObject3Objects1});gdjs.LogMenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewObject4"), gdjs.LogMenuCode.GDNewObject4Objects1);

gdjs.LogMenuCode.condition0IsTrue_0.val = false;
gdjs.LogMenuCode.condition1IsTrue_0.val = false;
{
gdjs.LogMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LogMenuCode.mapOfGDgdjs_46LogMenuCode_46GDNewObject4Objects1Objects, runtimeScene, true, false);
}if ( gdjs.LogMenuCode.condition0IsTrue_0.val ) {
{
gdjs.LogMenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.LogMenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Settings", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.LogMenuCode.GDNewObject2Objects1);

gdjs.LogMenuCode.condition0IsTrue_0.val = false;
gdjs.LogMenuCode.condition1IsTrue_0.val = false;
{
gdjs.LogMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LogMenuCode.mapOfGDgdjs_46LogMenuCode_46GDNewObject2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.LogMenuCode.condition0IsTrue_0.val ) {
{
gdjs.LogMenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.LogMenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Login", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.LogMenuCode.GDNewObject3Objects1);

gdjs.LogMenuCode.condition0IsTrue_0.val = false;
gdjs.LogMenuCode.condition1IsTrue_0.val = false;
{
gdjs.LogMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LogMenuCode.mapOfGDgdjs_46LogMenuCode_46GDNewObject3Objects1Objects, runtimeScene, true, false);
}if ( gdjs.LogMenuCode.condition0IsTrue_0.val ) {
{
gdjs.LogMenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.LogMenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Register", false);
}}

}


{


gdjs.LogMenuCode.condition0IsTrue_0.val = false;
{
gdjs.LogMenuCode.condition0IsTrue_0.val = gdjs.evtTools.firebaseTools.auth.isAuthentified();
}if (gdjs.LogMenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.LogMenuCode.GDNewObjectObjects1);
{for(var i = 0, len = gdjs.LogMenuCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.LogMenuCode.GDNewObjectObjects1[i].setString("Logged In As: " + gdjs.evtTools.firebaseTools.auth.userManagement.getDisplayName());
}
}}

}


};

gdjs.LogMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LogMenuCode.GDNewObjectObjects1.length = 0;
gdjs.LogMenuCode.GDNewObjectObjects2.length = 0;
gdjs.LogMenuCode.GDNewObject3Objects1.length = 0;
gdjs.LogMenuCode.GDNewObject3Objects2.length = 0;
gdjs.LogMenuCode.GDNewObject2Objects1.length = 0;
gdjs.LogMenuCode.GDNewObject2Objects2.length = 0;
gdjs.LogMenuCode.GDNewObject4Objects1.length = 0;
gdjs.LogMenuCode.GDNewObject4Objects2.length = 0;

gdjs.LogMenuCode.eventsList0(runtimeScene);
return;

}

gdjs['LogMenuCode'] = gdjs.LogMenuCode;
