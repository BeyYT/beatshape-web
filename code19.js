gdjs.fCode = {};
gdjs.fCode.GDNewObject11Objects1= [];
gdjs.fCode.GDNewObject11Objects2= [];
gdjs.fCode.GDNewObject11Objects3= [];
gdjs.fCode.GDNewObject10Objects1= [];
gdjs.fCode.GDNewObject10Objects2= [];
gdjs.fCode.GDNewObject10Objects3= [];
gdjs.fCode.GDNewObject9Objects1= [];
gdjs.fCode.GDNewObject9Objects2= [];
gdjs.fCode.GDNewObject9Objects3= [];
gdjs.fCode.GDNewObject8Objects1= [];
gdjs.fCode.GDNewObject8Objects2= [];
gdjs.fCode.GDNewObject8Objects3= [];
gdjs.fCode.GDNewObject7Objects1= [];
gdjs.fCode.GDNewObject7Objects2= [];
gdjs.fCode.GDNewObject7Objects3= [];
gdjs.fCode.GDNewObject6Objects1= [];
gdjs.fCode.GDNewObject6Objects2= [];
gdjs.fCode.GDNewObject6Objects3= [];
gdjs.fCode.GDNewObject5Objects1= [];
gdjs.fCode.GDNewObject5Objects2= [];
gdjs.fCode.GDNewObject5Objects3= [];
gdjs.fCode.GDNewObject4Objects1= [];
gdjs.fCode.GDNewObject4Objects2= [];
gdjs.fCode.GDNewObject4Objects3= [];
gdjs.fCode.GDNewObject3Objects1= [];
gdjs.fCode.GDNewObject3Objects2= [];
gdjs.fCode.GDNewObject3Objects3= [];
gdjs.fCode.GDNewObject2Objects1= [];
gdjs.fCode.GDNewObject2Objects2= [];
gdjs.fCode.GDNewObject2Objects3= [];
gdjs.fCode.GDNewObjectObjects1= [];
gdjs.fCode.GDNewObjectObjects2= [];
gdjs.fCode.GDNewObjectObjects3= [];
gdjs.fCode.GDNewObject12Objects1= [];
gdjs.fCode.GDNewObject12Objects2= [];
gdjs.fCode.GDNewObject12Objects3= [];

gdjs.fCode.conditionTrue_0 = {val:false};
gdjs.fCode.condition0IsTrue_0 = {val:false};
gdjs.fCode.condition1IsTrue_0 = {val:false};
gdjs.fCode.condition2IsTrue_0 = {val:false};


gdjs.fCode.eventsList0 = function(runtimeScene) {

{


gdjs.fCode.condition0IsTrue_0.val = false;
{
gdjs.fCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.fCode.condition0IsTrue_0.val) {
{gdjs.evtTools.firebaseTools.database.getVariable("/1", runtimeScene.getVariables().get("lead").getChild("1"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getVariable("/2", runtimeScene.getVariables().get("lead").getChild("2"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getVariable("/3", runtimeScene.getVariables().get("lead").getChild("3"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getVariable("/4", runtimeScene.getVariables().get("lead").getChild("4"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getVariable("/5", runtimeScene.getVariables().get("lead").getChild("5"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getVariable("/6", runtimeScene.getVariables().get("lead").getChild("6"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getVariable("/7", runtimeScene.getVariables().get("lead").getChild("7"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getVariable("/8", runtimeScene.getVariables().get("lead").getChild("8"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getVariable("/9", runtimeScene.getVariables().get("lead").getChild("9"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getVariable("/10", runtimeScene.getVariables().get("lead").getChild("10"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.storage.readNumberFromJSONFile("str", "pp", runtimeScene, runtimeScene.getVariables().get("totalpp"));
}{runtimeScene.getVariables().get("name").setString(gdjs.evtTools.firebaseTools.auth.userManagement.getDisplayName());
}}

}


{


gdjs.fCode.condition0IsTrue_0.val = false;
{
gdjs.fCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.fCode.condition0IsTrue_0.val) {
{gdjs.evtTools.firebaseTools.database.getVariable("/user1", runtimeScene.getVariables().get("lead").getChild("user1"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getVariable("/user2", runtimeScene.getVariables().get("lead").getChild("user2"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getVariable("/user3", runtimeScene.getVariables().get("lead").getChild("user3"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getVariable("/user4", runtimeScene.getVariables().get("lead").getChild("user4"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getVariable("/user5", runtimeScene.getVariables().get("lead").getChild("user5"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getVariable("/user6", runtimeScene.getVariables().get("lead").getChild("user6"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getVariable("/user7", runtimeScene.getVariables().get("lead").getChild("user7"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getVariable("/user8", runtimeScene.getVariables().get("lead").getChild("user8"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getVariable("/user9", runtimeScene.getVariables().get("lead").getChild("user9"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getVariable("/user10", runtimeScene.getVariables().get("lead").getChild("user10"), gdjs.VariablesContainer.badVariable);
}}

}


};gdjs.fCode.mapOfGDgdjs_46fCode_46GDNewObject12Objects1Objects = Hashtable.newFrom({"NewObject12": gdjs.fCode.GDNewObject12Objects1});gdjs.fCode.eventsList1 = function(runtimeScene) {

{


{

{ //Subevents
gdjs.fCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject10"), gdjs.fCode.GDNewObject10Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject11"), gdjs.fCode.GDNewObject11Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.fCode.GDNewObject2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.fCode.GDNewObject3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject4"), gdjs.fCode.GDNewObject4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject5"), gdjs.fCode.GDNewObject5Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject6"), gdjs.fCode.GDNewObject6Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject7"), gdjs.fCode.GDNewObject7Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject8"), gdjs.fCode.GDNewObject8Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject9"), gdjs.fCode.GDNewObject9Objects1);
{for(var i = 0, len = gdjs.fCode.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.fCode.GDNewObject2Objects1[i].setString("#1: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("lead").getChild("user1")) + ", " + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("lead").getChild("1")) + "pp");
}
}{for(var i = 0, len = gdjs.fCode.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.fCode.GDNewObject3Objects1[i].setString("#2: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("lead").getChild("user2")) + ", " + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("lead").getChild("2")) + "pp");
}
}{for(var i = 0, len = gdjs.fCode.GDNewObject4Objects1.length ;i < len;++i) {
    gdjs.fCode.GDNewObject4Objects1[i].setString("#3: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("lead").getChild("user3")) + ", " + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("lead").getChild("3")) + "pp");
}
}{for(var i = 0, len = gdjs.fCode.GDNewObject5Objects1.length ;i < len;++i) {
    gdjs.fCode.GDNewObject5Objects1[i].setString("#4: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("lead").getChild("user4")) + ", " + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("lead").getChild("4")) + "pp");
}
}{for(var i = 0, len = gdjs.fCode.GDNewObject6Objects1.length ;i < len;++i) {
    gdjs.fCode.GDNewObject6Objects1[i].setString("#5: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("lead").getChild("user5")) + ", " + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("lead").getChild("5")) + "pp");
}
}{for(var i = 0, len = gdjs.fCode.GDNewObject7Objects1.length ;i < len;++i) {
    gdjs.fCode.GDNewObject7Objects1[i].setString("#6: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("lead").getChild("user6")) + ", " + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("lead").getChild("6")) + "pp");
}
}{for(var i = 0, len = gdjs.fCode.GDNewObject8Objects1.length ;i < len;++i) {
    gdjs.fCode.GDNewObject8Objects1[i].setString("#7: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("lead").getChild("user7")) + ", " + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("lead").getChild("7")) + "pp");
}
}{for(var i = 0, len = gdjs.fCode.GDNewObject9Objects1.length ;i < len;++i) {
    gdjs.fCode.GDNewObject9Objects1[i].setString("#8: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("lead").getChild("user8")) + ", " + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("lead").getChild("8")) + "pp");
}
}{for(var i = 0, len = gdjs.fCode.GDNewObject10Objects1.length ;i < len;++i) {
    gdjs.fCode.GDNewObject10Objects1[i].setString("#9: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("lead").getChild("user9")) + ", " + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("lead").getChild("9")) + "pp");
}
}{for(var i = 0, len = gdjs.fCode.GDNewObject11Objects1.length ;i < len;++i) {
    gdjs.fCode.GDNewObject11Objects1[i].setString("#10: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("lead").getChild("user10")) + ", " + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("lead").getChild("10")) + "pp");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject12"), gdjs.fCode.GDNewObject12Objects1);

gdjs.fCode.condition0IsTrue_0.val = false;
gdjs.fCode.condition1IsTrue_0.val = false;
{
gdjs.fCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.fCode.mapOfGDgdjs_46fCode_46GDNewObject12Objects1Objects, runtimeScene, true, false);
}if ( gdjs.fCode.condition0IsTrue_0.val ) {
{
gdjs.fCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.fCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}}

}


};

gdjs.fCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.fCode.GDNewObject11Objects1.length = 0;
gdjs.fCode.GDNewObject11Objects2.length = 0;
gdjs.fCode.GDNewObject11Objects3.length = 0;
gdjs.fCode.GDNewObject10Objects1.length = 0;
gdjs.fCode.GDNewObject10Objects2.length = 0;
gdjs.fCode.GDNewObject10Objects3.length = 0;
gdjs.fCode.GDNewObject9Objects1.length = 0;
gdjs.fCode.GDNewObject9Objects2.length = 0;
gdjs.fCode.GDNewObject9Objects3.length = 0;
gdjs.fCode.GDNewObject8Objects1.length = 0;
gdjs.fCode.GDNewObject8Objects2.length = 0;
gdjs.fCode.GDNewObject8Objects3.length = 0;
gdjs.fCode.GDNewObject7Objects1.length = 0;
gdjs.fCode.GDNewObject7Objects2.length = 0;
gdjs.fCode.GDNewObject7Objects3.length = 0;
gdjs.fCode.GDNewObject6Objects1.length = 0;
gdjs.fCode.GDNewObject6Objects2.length = 0;
gdjs.fCode.GDNewObject6Objects3.length = 0;
gdjs.fCode.GDNewObject5Objects1.length = 0;
gdjs.fCode.GDNewObject5Objects2.length = 0;
gdjs.fCode.GDNewObject5Objects3.length = 0;
gdjs.fCode.GDNewObject4Objects1.length = 0;
gdjs.fCode.GDNewObject4Objects2.length = 0;
gdjs.fCode.GDNewObject4Objects3.length = 0;
gdjs.fCode.GDNewObject3Objects1.length = 0;
gdjs.fCode.GDNewObject3Objects2.length = 0;
gdjs.fCode.GDNewObject3Objects3.length = 0;
gdjs.fCode.GDNewObject2Objects1.length = 0;
gdjs.fCode.GDNewObject2Objects2.length = 0;
gdjs.fCode.GDNewObject2Objects3.length = 0;
gdjs.fCode.GDNewObjectObjects1.length = 0;
gdjs.fCode.GDNewObjectObjects2.length = 0;
gdjs.fCode.GDNewObjectObjects3.length = 0;
gdjs.fCode.GDNewObject12Objects1.length = 0;
gdjs.fCode.GDNewObject12Objects2.length = 0;
gdjs.fCode.GDNewObject12Objects3.length = 0;

gdjs.fCode.eventsList1(runtimeScene);
return;

}

gdjs['fCode'] = gdjs.fCode;
