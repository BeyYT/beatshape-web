gdjs.failCode = {};
gdjs.failCode.GDNewObject3Objects1= [];
gdjs.failCode.GDNewObject3Objects2= [];
gdjs.failCode.GDNewObject2Objects1= [];
gdjs.failCode.GDNewObject2Objects2= [];
gdjs.failCode.GDNewObjectObjects1= [];
gdjs.failCode.GDNewObjectObjects2= [];

gdjs.failCode.conditionTrue_0 = {val:false};
gdjs.failCode.condition0IsTrue_0 = {val:false};
gdjs.failCode.condition1IsTrue_0 = {val:false};
gdjs.failCode.condition2IsTrue_0 = {val:false};


gdjs.failCode.mapOfGDgdjs_46failCode_46GDNewObject2Objects1Objects = Hashtable.newFrom({"NewObject2": gdjs.failCode.GDNewObject2Objects1});gdjs.failCode.mapOfGDgdjs_46failCode_46GDNewObject3Objects1Objects = Hashtable.newFrom({"NewObject3": gdjs.failCode.GDNewObject3Objects1});gdjs.failCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.failCode.GDNewObject2Objects1);

gdjs.failCode.condition0IsTrue_0.val = false;
gdjs.failCode.condition1IsTrue_0.val = false;
{
gdjs.failCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.failCode.mapOfGDgdjs_46failCode_46GDNewObject2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.failCode.condition0IsTrue_0.val ) {
{
gdjs.failCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.failCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "pp test", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.failCode.GDNewObject3Objects1);

gdjs.failCode.condition0IsTrue_0.val = false;
gdjs.failCode.condition1IsTrue_0.val = false;
{
gdjs.failCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.failCode.mapOfGDgdjs_46failCode_46GDNewObject3Objects1Objects, runtimeScene, true, false);
}if ( gdjs.failCode.condition0IsTrue_0.val ) {
{
gdjs.failCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.failCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}}

}


};

gdjs.failCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.failCode.GDNewObject3Objects1.length = 0;
gdjs.failCode.GDNewObject3Objects2.length = 0;
gdjs.failCode.GDNewObject2Objects1.length = 0;
gdjs.failCode.GDNewObject2Objects2.length = 0;
gdjs.failCode.GDNewObjectObjects1.length = 0;
gdjs.failCode.GDNewObjectObjects2.length = 0;

gdjs.failCode.eventsList0(runtimeScene);
return;

}

gdjs['failCode'] = gdjs.failCode;
