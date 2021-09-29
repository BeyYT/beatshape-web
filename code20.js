gdjs.modsCode = {};
gdjs.modsCode.GDNewObjectObjects1= [];
gdjs.modsCode.GDNewObjectObjects2= [];
gdjs.modsCode.GDNewObject3Objects1= [];
gdjs.modsCode.GDNewObject3Objects2= [];
gdjs.modsCode.GDNewObject2Objects1= [];
gdjs.modsCode.GDNewObject2Objects2= [];
gdjs.modsCode.GDNewObject4Objects1= [];
gdjs.modsCode.GDNewObject4Objects2= [];

gdjs.modsCode.conditionTrue_0 = {val:false};
gdjs.modsCode.condition0IsTrue_0 = {val:false};
gdjs.modsCode.condition1IsTrue_0 = {val:false};
gdjs.modsCode.condition2IsTrue_0 = {val:false};
gdjs.modsCode.condition3IsTrue_0 = {val:false};
gdjs.modsCode.conditionTrue_1 = {val:false};
gdjs.modsCode.condition0IsTrue_1 = {val:false};
gdjs.modsCode.condition1IsTrue_1 = {val:false};
gdjs.modsCode.condition2IsTrue_1 = {val:false};
gdjs.modsCode.condition3IsTrue_1 = {val:false};


gdjs.modsCode.mapOfGDgdjs_46modsCode_46GDNewObject2Objects1Objects = Hashtable.newFrom({"NewObject2": gdjs.modsCode.GDNewObject2Objects1});gdjs.modsCode.mapOfGDgdjs_46modsCode_46GDNewObject3Objects1Objects = Hashtable.newFrom({"NewObject3": gdjs.modsCode.GDNewObject3Objects1});gdjs.modsCode.mapOfGDgdjs_46modsCode_46GDNewObject4Objects1Objects = Hashtable.newFrom({"NewObject4": gdjs.modsCode.GDNewObject4Objects1});gdjs.modsCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.modsCode.GDNewObject2Objects1);

gdjs.modsCode.condition0IsTrue_0.val = false;
gdjs.modsCode.condition1IsTrue_0.val = false;
gdjs.modsCode.condition2IsTrue_0.val = false;
{
gdjs.modsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.modsCode.mapOfGDgdjs_46modsCode_46GDNewObject2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.modsCode.condition0IsTrue_0.val ) {
{
gdjs.modsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.modsCode.condition1IsTrue_0.val ) {
{
{gdjs.modsCode.conditionTrue_1 = gdjs.modsCode.condition2IsTrue_0;
gdjs.modsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13173908);
}
}}
}
if (gdjs.modsCode.condition2IsTrue_0.val) {
/* Reuse gdjs.modsCode.GDNewObject2Objects1 */
gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.modsCode.GDNewObject3Objects1);
{for(var i = 0, len = gdjs.modsCode.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.modsCode.GDNewObject2Objects1[i].setString("DoubleTime: x");
}
}{for(var i = 0, len = gdjs.modsCode.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.modsCode.GDNewObject3Objects1[i].setString("Hardrock:");
}
}{runtimeScene.getGame().getVariables().get("doubletime").setNumber(1);
}{runtimeScene.getGame().getVariables().get("hardrock").setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.modsCode.GDNewObject3Objects1);

gdjs.modsCode.condition0IsTrue_0.val = false;
gdjs.modsCode.condition1IsTrue_0.val = false;
gdjs.modsCode.condition2IsTrue_0.val = false;
{
gdjs.modsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.modsCode.mapOfGDgdjs_46modsCode_46GDNewObject3Objects1Objects, runtimeScene, true, false);
}if ( gdjs.modsCode.condition0IsTrue_0.val ) {
{
gdjs.modsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.modsCode.condition1IsTrue_0.val ) {
{
{gdjs.modsCode.conditionTrue_1 = gdjs.modsCode.condition2IsTrue_0;
gdjs.modsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13176060);
}
}}
}
if (gdjs.modsCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.modsCode.GDNewObject2Objects1);
/* Reuse gdjs.modsCode.GDNewObject3Objects1 */
{for(var i = 0, len = gdjs.modsCode.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.modsCode.GDNewObject2Objects1[i].setString("DoubleTime:");
}
}{for(var i = 0, len = gdjs.modsCode.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.modsCode.GDNewObject3Objects1[i].setString("Hardrock: x");
}
}{runtimeScene.getGame().getVariables().get("doubletime").setNumber(0);
}{runtimeScene.getGame().getVariables().get("hardrock").setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject4"), gdjs.modsCode.GDNewObject4Objects1);

gdjs.modsCode.condition0IsTrue_0.val = false;
gdjs.modsCode.condition1IsTrue_0.val = false;
gdjs.modsCode.condition2IsTrue_0.val = false;
{
gdjs.modsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.modsCode.mapOfGDgdjs_46modsCode_46GDNewObject4Objects1Objects, runtimeScene, true, false);
}if ( gdjs.modsCode.condition0IsTrue_0.val ) {
{
gdjs.modsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.modsCode.condition1IsTrue_0.val ) {
{
{gdjs.modsCode.conditionTrue_1 = gdjs.modsCode.condition2IsTrue_0;
gdjs.modsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13178612);
}
}}
}
if (gdjs.modsCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};

gdjs.modsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.modsCode.GDNewObjectObjects1.length = 0;
gdjs.modsCode.GDNewObjectObjects2.length = 0;
gdjs.modsCode.GDNewObject3Objects1.length = 0;
gdjs.modsCode.GDNewObject3Objects2.length = 0;
gdjs.modsCode.GDNewObject2Objects1.length = 0;
gdjs.modsCode.GDNewObject2Objects2.length = 0;
gdjs.modsCode.GDNewObject4Objects1.length = 0;
gdjs.modsCode.GDNewObject4Objects2.length = 0;

gdjs.modsCode.eventsList0(runtimeScene);
return;

}

gdjs['modsCode'] = gdjs.modsCode;
