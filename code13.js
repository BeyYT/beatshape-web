gdjs.pauseCode = {};
gdjs.pauseCode.GDNewObject3Objects1= [];
gdjs.pauseCode.GDNewObject3Objects2= [];
gdjs.pauseCode.GDNewObject22Objects1= [];
gdjs.pauseCode.GDNewObject22Objects2= [];
gdjs.pauseCode.GDNewObject2Objects1= [];
gdjs.pauseCode.GDNewObject2Objects2= [];
gdjs.pauseCode.GDNewObjectObjects1= [];
gdjs.pauseCode.GDNewObjectObjects2= [];

gdjs.pauseCode.conditionTrue_0 = {val:false};
gdjs.pauseCode.condition0IsTrue_0 = {val:false};
gdjs.pauseCode.condition1IsTrue_0 = {val:false};
gdjs.pauseCode.condition2IsTrue_0 = {val:false};


gdjs.pauseCode.mapOfGDgdjs_46pauseCode_46GDNewObject2Objects1Objects = Hashtable.newFrom({"NewObject2": gdjs.pauseCode.GDNewObject2Objects1});gdjs.pauseCode.mapOfGDgdjs_46pauseCode_46GDNewObject3Objects1Objects = Hashtable.newFrom({"NewObject3": gdjs.pauseCode.GDNewObject3Objects1});gdjs.pauseCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.pauseCode.GDNewObject2Objects1);

gdjs.pauseCode.condition0IsTrue_0.val = false;
gdjs.pauseCode.condition1IsTrue_0.val = false;
{
gdjs.pauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.pauseCode.mapOfGDgdjs_46pauseCode_46GDNewObject2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.pauseCode.condition0IsTrue_0.val ) {
{
gdjs.pauseCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.pauseCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "pp test", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.pauseCode.GDNewObject3Objects1);

gdjs.pauseCode.condition0IsTrue_0.val = false;
gdjs.pauseCode.condition1IsTrue_0.val = false;
{
gdjs.pauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.pauseCode.mapOfGDgdjs_46pauseCode_46GDNewObject3Objects1Objects, runtimeScene, true, false);
}if ( gdjs.pauseCode.condition0IsTrue_0.val ) {
{
gdjs.pauseCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.pauseCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}}

}


};

gdjs.pauseCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.pauseCode.GDNewObject3Objects1.length = 0;
gdjs.pauseCode.GDNewObject3Objects2.length = 0;
gdjs.pauseCode.GDNewObject22Objects1.length = 0;
gdjs.pauseCode.GDNewObject22Objects2.length = 0;
gdjs.pauseCode.GDNewObject2Objects1.length = 0;
gdjs.pauseCode.GDNewObject2Objects2.length = 0;
gdjs.pauseCode.GDNewObjectObjects1.length = 0;
gdjs.pauseCode.GDNewObjectObjects2.length = 0;

gdjs.pauseCode.eventsList0(runtimeScene);
return;

}

gdjs['pauseCode'] = gdjs.pauseCode;
