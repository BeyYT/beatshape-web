gdjs.Main_32MenuCode = {};
gdjs.Main_32MenuCode.GDNewObject2Objects1= [];
gdjs.Main_32MenuCode.GDNewObject2Objects2= [];
gdjs.Main_32MenuCode.GDNewObject2Objects3= [];
gdjs.Main_32MenuCode.GDNewObjectObjects1= [];
gdjs.Main_32MenuCode.GDNewObjectObjects2= [];
gdjs.Main_32MenuCode.GDNewObjectObjects3= [];
gdjs.Main_32MenuCode.GDNewObject3Objects1= [];
gdjs.Main_32MenuCode.GDNewObject3Objects2= [];
gdjs.Main_32MenuCode.GDNewObject3Objects3= [];
gdjs.Main_32MenuCode.GDNewObject4Objects1= [];
gdjs.Main_32MenuCode.GDNewObject4Objects2= [];
gdjs.Main_32MenuCode.GDNewObject4Objects3= [];
gdjs.Main_32MenuCode.GDNewObject5Objects1= [];
gdjs.Main_32MenuCode.GDNewObject5Objects2= [];
gdjs.Main_32MenuCode.GDNewObject5Objects3= [];
gdjs.Main_32MenuCode.GDBGObjects1= [];
gdjs.Main_32MenuCode.GDBGObjects2= [];
gdjs.Main_32MenuCode.GDBGObjects3= [];

gdjs.Main_32MenuCode.conditionTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition0IsTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition1IsTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition2IsTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition3IsTrue_0 = {val:false};
gdjs.Main_32MenuCode.conditionTrue_1 = {val:false};
gdjs.Main_32MenuCode.condition0IsTrue_1 = {val:false};
gdjs.Main_32MenuCode.condition1IsTrue_1 = {val:false};
gdjs.Main_32MenuCode.condition2IsTrue_1 = {val:false};
gdjs.Main_32MenuCode.condition3IsTrue_1 = {val:false};


gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDNewObject3Objects1Objects = Hashtable.newFrom({"NewObject3": gdjs.Main_32MenuCode.GDNewObject3Objects1});gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDNewObject4Objects1Objects = Hashtable.newFrom({"NewObject4": gdjs.Main_32MenuCode.GDNewObject4Objects1});gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDNewObject5Objects1Objects = Hashtable.newFrom({"NewObject5": gdjs.Main_32MenuCode.GDNewObject5Objects1});gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDNewObjectObjects1Objects = Hashtable.newFrom({"NewObject": gdjs.Main_32MenuCode.GDNewObjectObjects1});gdjs.Main_32MenuCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.Main_32MenuCode.GDNewObjectObjects2);
gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.Main_32MenuCode.GDNewObject3Objects2);
gdjs.copyArray(runtimeScene.getObjects("NewObject4"), gdjs.Main_32MenuCode.GDNewObject4Objects2);
{runtimeScene.getVariables().get("r").add(gdjs.randomInRange(1, 7));
}{runtimeScene.getVariables().get("g").add(gdjs.randomInRange(1, 7));
}{runtimeScene.getVariables().get("b").add(gdjs.randomInRange(1, 7));
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDNewObjectObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDNewObjectObjects2[i].setColor(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("r")) + ";" + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("g")) + ";" + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("b")));
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDNewObject3Objects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDNewObject3Objects2[i].setColor(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("r")) + ";" + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("g")) + ";" + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("b")));
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDNewObject4Objects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDNewObject4Objects2[i].setColor(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("r")) + ";" + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("g")) + ";" + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("b")));
}
}}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("r")) > 225;
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("r").setNumber(0);
}}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("g")) > 225;
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("g").setNumber(0);
}}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("b")) > 225;
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("b").setNumber(0);
}}

}


};gdjs.Main_32MenuCode.eventsList1 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.Main_32MenuCode.GDNewObjectObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.Main_32MenuCode.GDNewObject2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.Main_32MenuCode.GDNewObject3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject4"), gdjs.Main_32MenuCode.GDNewObject4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject5"), gdjs.Main_32MenuCode.GDNewObject5Objects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "pulse");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "");
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDNewObject2Objects1[i].setOpacity(100);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDNewObjectObjects1[i].getBehavior("Tween").addObjectPositionTween("intro", 0, 0, "easeInOutQuad", 350, false);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDNewObject3Objects1[i].getBehavior("Tween").addObjectPositionTween("intro", 2, 681, "easeInOutQuad", 350, false);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDNewObject4Objects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDNewObject4Objects1[i].getBehavior("Tween").addObjectPositionTween("intro", 1226, 681, "easeInOutQuad", 350, false);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDNewObject5Objects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDNewObject5Objects1[i].getBehavior("Tween").addObjectPositionYTween("intro", 684, "easeInOutQuad", 350, false);
}
}{runtimeScene.getVariables().get("name").setString(gdjs.evtTools.firebaseTools.auth.userManagement.getDisplayName());
}{gdjs.fileSystem.loadVariableFromJSONFile(runtimeScene.getVariables().get("theme"), gdjs.fileSystem.getDesktopPath(runtimeScene) + gdjs.fileSystem.getPathDelimiter() + "theme.thm", gdjs.VariablesContainer.badVariable);
}}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32MenuCode.condition1IsTrue_0.val = !(gdjs.evtTools.sound.isMusicOnChannelPlaying(runtimeScene, 1));
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "ITS_THE_SAME.mp3", 1, true, 40, 1);
}}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("protocolresult")) != 0;
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("selectedsongid").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("protocolresult")));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "pp test", false);
}{runtimeScene.getVariables().get("protocolresult").setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.Main_32MenuCode.GDNewObject3Objects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDNewObject3Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "custom level", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject4"), gdjs.Main_32MenuCode.GDNewObject4Objects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDNewObject4Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "BeatShape direct", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject5"), gdjs.Main_32MenuCode.GDNewObject5Objects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDNewObject5Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Settings", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.Main_32MenuCode.GDNewObjectObjects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition2IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDNewObjectObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Main_32MenuCode.condition1IsTrue_0.val ) {
{
gdjs.Main_32MenuCode.condition2IsTrue_0.val = gdjs.evtTools.firebaseTools.auth.isAuthentified();
}}
}
if (gdjs.Main_32MenuCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "f", false);
}}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition2IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "rgb");
}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition1IsTrue_0;
gdjs.Main_32MenuCode.condition0IsTrue_1.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_1.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "LControl");
if( gdjs.Main_32MenuCode.condition0IsTrue_1.val ) {
    gdjs.Main_32MenuCode.conditionTrue_1.val = true;
}
}
{
gdjs.Main_32MenuCode.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "RControl");
if( gdjs.Main_32MenuCode.condition1IsTrue_1.val ) {
    gdjs.Main_32MenuCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.Main_32MenuCode.condition1IsTrue_0.val ) {
{
gdjs.Main_32MenuCode.condition2IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
}}
}
if (gdjs.Main_32MenuCode.condition2IsTrue_0.val) {

{ //Subevents
gdjs.Main_32MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("name")) == "BeyYT";
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("isbey").setNumber(1);
}}

}


{


/*Link should not have any generated code. You probably wrongly used a link in events without a layout.*/
}


{


{
}

}


};

gdjs.Main_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32MenuCode.GDNewObject2Objects1.length = 0;
gdjs.Main_32MenuCode.GDNewObject2Objects2.length = 0;
gdjs.Main_32MenuCode.GDNewObject2Objects3.length = 0;
gdjs.Main_32MenuCode.GDNewObjectObjects1.length = 0;
gdjs.Main_32MenuCode.GDNewObjectObjects2.length = 0;
gdjs.Main_32MenuCode.GDNewObjectObjects3.length = 0;
gdjs.Main_32MenuCode.GDNewObject3Objects1.length = 0;
gdjs.Main_32MenuCode.GDNewObject3Objects2.length = 0;
gdjs.Main_32MenuCode.GDNewObject3Objects3.length = 0;
gdjs.Main_32MenuCode.GDNewObject4Objects1.length = 0;
gdjs.Main_32MenuCode.GDNewObject4Objects2.length = 0;
gdjs.Main_32MenuCode.GDNewObject4Objects3.length = 0;
gdjs.Main_32MenuCode.GDNewObject5Objects1.length = 0;
gdjs.Main_32MenuCode.GDNewObject5Objects2.length = 0;
gdjs.Main_32MenuCode.GDNewObject5Objects3.length = 0;
gdjs.Main_32MenuCode.GDBGObjects1.length = 0;
gdjs.Main_32MenuCode.GDBGObjects2.length = 0;
gdjs.Main_32MenuCode.GDBGObjects3.length = 0;

gdjs.Main_32MenuCode.eventsList1(runtimeScene);
return;

}

gdjs['Main_32MenuCode'] = gdjs.Main_32MenuCode;
