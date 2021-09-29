gdjs.LoadingRNDFeatCode = {};
gdjs.LoadingRNDFeatCode.GDNewObjectObjects1= [];
gdjs.LoadingRNDFeatCode.GDNewObjectObjects2= [];

gdjs.LoadingRNDFeatCode.conditionTrue_0 = {val:false};
gdjs.LoadingRNDFeatCode.condition0IsTrue_0 = {val:false};
gdjs.LoadingRNDFeatCode.condition1IsTrue_0 = {val:false};


gdjs.LoadingRNDFeatCode.eventsList0 = function(runtimeScene) {

{


gdjs.LoadingRNDFeatCode.condition0IsTrue_0.val = false;
{
gdjs.LoadingRNDFeatCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.LoadingRNDFeatCode.condition0IsTrue_0.val) {
{gdjs.evtTools.firebaseTools.database.getVariable("/featured1", runtimeScene.getVariables().get("ft").getChild("1"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getVariable("/featured2", runtimeScene.getVariables().get("ft").getChild("2"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getVariable("/featured3", runtimeScene.getVariables().get("ft").getChild("3"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getVariable("/featured4", runtimeScene.getVariables().get("ft").getChild("4"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getVariable("/featured5", runtimeScene.getVariables().get("ft").getChild("5"), gdjs.VariablesContainer.badVariable);
}{runtimeScene.getVariables().get("rnd").setNumber(gdjs.randomInRange(1, 5));
}}

}


{


gdjs.LoadingRNDFeatCode.condition0IsTrue_0.val = false;
{
gdjs.LoadingRNDFeatCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("rnd")) == 1;
}if (gdjs.LoadingRNDFeatCode.condition0IsTrue_0.val) {
{gdjs.evtTools.network.sendAsyncRequest("http://10.0.0.196:9162/" + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("ft").getChild("1")) + ".map", "", "GET", "", runtimeScene.getVariables().get("sngunp"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.network.jsonToVariableStructure(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("sngunp")), runtimeScene.getGame().getVariables().get("song"));
}}

}


{


gdjs.LoadingRNDFeatCode.condition0IsTrue_0.val = false;
{
gdjs.LoadingRNDFeatCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("rnd")) == 2;
}if (gdjs.LoadingRNDFeatCode.condition0IsTrue_0.val) {
{gdjs.evtTools.network.sendAsyncRequest("http://10.0.0.196:9162/" + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("ft").getChild("2")) + ".map", "", "GET", "", runtimeScene.getVariables().get("sngunp"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.network.jsonToVariableStructure(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("sngunp")), runtimeScene.getGame().getVariables().get("song"));
}}

}


{


gdjs.LoadingRNDFeatCode.condition0IsTrue_0.val = false;
{
gdjs.LoadingRNDFeatCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("rnd")) == 3;
}if (gdjs.LoadingRNDFeatCode.condition0IsTrue_0.val) {
{gdjs.evtTools.network.sendAsyncRequest("http://10.0.0.196:9162/" + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("ft").getChild("3")) + ".map", "", "GET", "", runtimeScene.getVariables().get("sngunp"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.network.jsonToVariableStructure(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("sngunp")), runtimeScene.getGame().getVariables().get("song"));
}}

}


{


gdjs.LoadingRNDFeatCode.condition0IsTrue_0.val = false;
{
gdjs.LoadingRNDFeatCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("rnd")) == 4;
}if (gdjs.LoadingRNDFeatCode.condition0IsTrue_0.val) {
{gdjs.evtTools.network.sendAsyncRequest("http://10.0.0.196:9162/" + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("ft").getChild("4")) + ".map", "", "GET", "", runtimeScene.getVariables().get("sngunp"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.network.jsonToVariableStructure(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("sngunp")), runtimeScene.getGame().getVariables().get("song"));
}}

}


{


gdjs.LoadingRNDFeatCode.condition0IsTrue_0.val = false;
{
gdjs.LoadingRNDFeatCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("rnd")) == 5;
}if (gdjs.LoadingRNDFeatCode.condition0IsTrue_0.val) {
{gdjs.evtTools.network.sendAsyncRequest("http://10.0.0.196:9162/" + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("ft").getChild("5")) + ".map", "", "GET", "", runtimeScene.getVariables().get("sngunp"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.network.jsonToVariableStructure(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("sngunp")), runtimeScene.getGame().getVariables().get("song"));
}}

}


{


gdjs.LoadingRNDFeatCode.condition0IsTrue_0.val = false;
{
gdjs.LoadingRNDFeatCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 5, "");
}if (gdjs.LoadingRNDFeatCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "pp test", false);
}}

}


};

gdjs.LoadingRNDFeatCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LoadingRNDFeatCode.GDNewObjectObjects1.length = 0;
gdjs.LoadingRNDFeatCode.GDNewObjectObjects2.length = 0;

gdjs.LoadingRNDFeatCode.eventsList0(runtimeScene);
return;

}

gdjs['LoadingRNDFeatCode'] = gdjs.LoadingRNDFeatCode;
