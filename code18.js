gdjs.SettingsCode = {};
gdjs.SettingsCode.GDNewObject2Objects1= [];
gdjs.SettingsCode.GDNewObject2Objects2= [];
gdjs.SettingsCode.GDNewObjectObjects1= [];
gdjs.SettingsCode.GDNewObjectObjects2= [];
gdjs.SettingsCode.GDNewObject3Objects1= [];
gdjs.SettingsCode.GDNewObject3Objects2= [];

gdjs.SettingsCode.conditionTrue_0 = {val:false};
gdjs.SettingsCode.condition0IsTrue_0 = {val:false};
gdjs.SettingsCode.condition1IsTrue_0 = {val:false};
gdjs.SettingsCode.condition2IsTrue_0 = {val:false};


gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDNewObject3Objects1Objects = Hashtable.newFrom({"NewObject3": gdjs.SettingsCode.GDNewObject3Objects1});gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDNewObjectObjects1Objects = Hashtable.newFrom({"NewObject": gdjs.SettingsCode.GDNewObjectObjects1});gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDNewObject2Objects1Objects = Hashtable.newFrom({"NewObject2": gdjs.SettingsCode.GDNewObject2Objects1});gdjs.SettingsCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.SettingsCode.GDNewObject3Objects1);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDNewObject3Objects1Objects, runtimeScene, true, false);
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.SettingsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.SettingsCode.GDNewObjectObjects1);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDNewObjectObjects1Objects, runtimeScene, true, false);
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.SettingsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LogMenu", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.SettingsCode.GDNewObject2Objects1);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDNewObject2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.SettingsCode.condition1IsTrue_0.val) {
}

}


};

gdjs.SettingsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SettingsCode.GDNewObject2Objects1.length = 0;
gdjs.SettingsCode.GDNewObject2Objects2.length = 0;
gdjs.SettingsCode.GDNewObjectObjects1.length = 0;
gdjs.SettingsCode.GDNewObjectObjects2.length = 0;
gdjs.SettingsCode.GDNewObject3Objects1.length = 0;
gdjs.SettingsCode.GDNewObject3Objects2.length = 0;

gdjs.SettingsCode.eventsList0(runtimeScene);
return;

}

gdjs['SettingsCode'] = gdjs.SettingsCode;
