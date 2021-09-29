gdjs.loadCode = {};
gdjs.loadCode.GDNewObjectObjects1= [];
gdjs.loadCode.GDNewObjectObjects2= [];

gdjs.loadCode.conditionTrue_0 = {val:false};
gdjs.loadCode.condition0IsTrue_0 = {val:false};
gdjs.loadCode.condition1IsTrue_0 = {val:false};


gdjs.loadCode.eventsList0 = function(runtimeScene) {

{


gdjs.loadCode.condition0IsTrue_0.val = false;
{
gdjs.loadCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.loadCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.loadCode.GDNewObjectObjects1);
{for(var i = 0, len = gdjs.loadCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.loadCode.GDNewObjectObjects1[i].play();
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "loadin");
}{runtimeScene.getVariables().get("theme_enabled").setNumber(1);
}}

}


{


gdjs.loadCode.condition0IsTrue_0.val = false;
{
gdjs.loadCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "loadin");
}if (gdjs.loadCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}}

}


{


gdjs.loadCode.condition0IsTrue_0.val = false;
{
gdjs.loadCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("theme_enabled")) == 1;
}if (gdjs.loadCode.condition0IsTrue_0.val) {
{gdjs.fileSystem.loadVariableFromJSONFile(runtimeScene.getVariables().get("Theme"), gdjs.fileSystem.getDesktopPath(runtimeScene) + gdjs.fileSystem.getPathDelimiter() + "theme.thm", gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.network.jsonToVariableStructure(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("Theme")), runtimeScene.getGame().getVariables().get("theme"));
}}

}


};

gdjs.loadCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.loadCode.GDNewObjectObjects1.length = 0;
gdjs.loadCode.GDNewObjectObjects2.length = 0;

gdjs.loadCode.eventsList0(runtimeScene);
return;

}

gdjs['loadCode'] = gdjs.loadCode;
