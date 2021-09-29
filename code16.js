gdjs.LoginCode = {};
gdjs.LoginCode.GDNewObjectObjects1= [];
gdjs.LoginCode.GDNewObjectObjects2= [];
gdjs.LoginCode.GDPassObjects1= [];
gdjs.LoginCode.GDPassObjects2= [];
gdjs.LoginCode.GDEmailObjects1= [];
gdjs.LoginCode.GDEmailObjects2= [];
gdjs.LoginCode.GDLoginBTNObjects1= [];
gdjs.LoginCode.GDLoginBTNObjects2= [];
gdjs.LoginCode.GDFIRStatusObjects1= [];
gdjs.LoginCode.GDFIRStatusObjects2= [];
gdjs.LoginCode.GDEmailTXTObjects1= [];
gdjs.LoginCode.GDEmailTXTObjects2= [];
gdjs.LoginCode.GDPassTXTObjects1= [];
gdjs.LoginCode.GDPassTXTObjects2= [];

gdjs.LoginCode.conditionTrue_0 = {val:false};
gdjs.LoginCode.condition0IsTrue_0 = {val:false};
gdjs.LoginCode.condition1IsTrue_0 = {val:false};
gdjs.LoginCode.condition2IsTrue_0 = {val:false};


gdjs.LoginCode.mapOfGDgdjs_46LoginCode_46GDPassObjects1Objects = Hashtable.newFrom({"Pass": gdjs.LoginCode.GDPassObjects1});gdjs.LoginCode.mapOfGDgdjs_46LoginCode_46GDEmailObjects1Objects = Hashtable.newFrom({"Email": gdjs.LoginCode.GDEmailObjects1});gdjs.LoginCode.mapOfGDgdjs_46LoginCode_46GDEmailObjects1Objects = Hashtable.newFrom({"Email": gdjs.LoginCode.GDEmailObjects1});gdjs.LoginCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Pass"), gdjs.LoginCode.GDPassObjects1);

gdjs.LoginCode.condition0IsTrue_0.val = false;
gdjs.LoginCode.condition1IsTrue_0.val = false;
{
gdjs.LoginCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LoginCode.mapOfGDgdjs_46LoginCode_46GDPassObjects1Objects, runtimeScene, true, false);
}if ( gdjs.LoginCode.condition0IsTrue_0.val ) {
{
gdjs.LoginCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.LoginCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Email"), gdjs.LoginCode.GDEmailObjects1);
gdjs.copyArray(runtimeScene.getObjects("EmailTXT"), gdjs.LoginCode.GDEmailTXTObjects1);
/* Reuse gdjs.LoginCode.GDPassObjects1 */
gdjs.copyArray(runtimeScene.getObjects("PassTXT"), gdjs.LoginCode.GDPassTXTObjects1);
{for(var i = 0, len = gdjs.LoginCode.GDPassObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDPassObjects1[i].setColor("104;104;104");
}
}{for(var i = 0, len = gdjs.LoginCode.GDEmailObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDEmailObjects1[i].setColor("0;0;0");
}
}{for(var i = 0, len = gdjs.LoginCode.GDEmailTXTObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDEmailTXTObjects1[i].activate(false);
}
}{for(var i = 0, len = gdjs.LoginCode.GDPassTXTObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDPassTXTObjects1[i].activate(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Email"), gdjs.LoginCode.GDEmailObjects1);

gdjs.LoginCode.condition0IsTrue_0.val = false;
gdjs.LoginCode.condition1IsTrue_0.val = false;
{
gdjs.LoginCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LoginCode.mapOfGDgdjs_46LoginCode_46GDEmailObjects1Objects, runtimeScene, true, false);
}if ( gdjs.LoginCode.condition0IsTrue_0.val ) {
{
gdjs.LoginCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.LoginCode.condition1IsTrue_0.val) {
/* Reuse gdjs.LoginCode.GDEmailObjects1 */
gdjs.copyArray(runtimeScene.getObjects("EmailTXT"), gdjs.LoginCode.GDEmailTXTObjects1);
gdjs.copyArray(runtimeScene.getObjects("Pass"), gdjs.LoginCode.GDPassObjects1);
gdjs.copyArray(runtimeScene.getObjects("PassTXT"), gdjs.LoginCode.GDPassTXTObjects1);
{for(var i = 0, len = gdjs.LoginCode.GDEmailObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDEmailObjects1[i].setColor("104;104;104");
}
}{for(var i = 0, len = gdjs.LoginCode.GDPassObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDPassObjects1[i].setColor("0;0;0");
}
}{for(var i = 0, len = gdjs.LoginCode.GDEmailTXTObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDEmailTXTObjects1[i].activate(true);
}
}{for(var i = 0, len = gdjs.LoginCode.GDPassTXTObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDPassTXTObjects1[i].activate(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Email"), gdjs.LoginCode.GDEmailObjects1);

gdjs.LoginCode.condition0IsTrue_0.val = false;
gdjs.LoginCode.condition1IsTrue_0.val = false;
{
gdjs.LoginCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LoginCode.mapOfGDgdjs_46LoginCode_46GDEmailObjects1Objects, runtimeScene, true, false);
}if ( gdjs.LoginCode.condition0IsTrue_0.val ) {
{
gdjs.LoginCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.LoginCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("EmailTXT"), gdjs.LoginCode.GDEmailTXTObjects1);
gdjs.copyArray(runtimeScene.getObjects("PassTXT"), gdjs.LoginCode.GDPassTXTObjects1);
{gdjs.evtTools.firebaseTools.auth.signInWithEmail((( gdjs.LoginCode.GDEmailTXTObjects1.length === 0 ) ? "" :gdjs.LoginCode.GDEmailTXTObjects1[0].getString()), (( gdjs.LoginCode.GDPassTXTObjects1.length === 0 ) ? "" :gdjs.LoginCode.GDPassTXTObjects1[0].getString()), runtimeScene.getVariables().get("status"));
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Email"), gdjs.LoginCode.GDEmailObjects1);
gdjs.copyArray(runtimeScene.getObjects("EmailTXT"), gdjs.LoginCode.GDEmailTXTObjects1);
gdjs.copyArray(runtimeScene.getObjects("FIRStatus"), gdjs.LoginCode.GDFIRStatusObjects1);
gdjs.copyArray(runtimeScene.getObjects("Pass"), gdjs.LoginCode.GDPassObjects1);
gdjs.copyArray(runtimeScene.getObjects("PassTXT"), gdjs.LoginCode.GDPassTXTObjects1);
{for(var i = 0, len = gdjs.LoginCode.GDEmailObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDEmailObjects1[i].setString("Email: " + (( gdjs.LoginCode.GDEmailTXTObjects1.length === 0 ) ? "" :gdjs.LoginCode.GDEmailTXTObjects1[0].getString()));
}
}{for(var i = 0, len = gdjs.LoginCode.GDPassObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDPassObjects1[i].setString("Password: " + (( gdjs.LoginCode.GDPassTXTObjects1.length === 0 ) ? "" :gdjs.LoginCode.GDPassTXTObjects1[0].getString()));
}
}{for(var i = 0, len = gdjs.LoginCode.GDFIRStatusObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDFIRStatusObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("status")));
}
}}

}


{


gdjs.LoginCode.condition0IsTrue_0.val = false;
{
gdjs.LoginCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.LoginCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("EmailTXT"), gdjs.LoginCode.GDEmailTXTObjects1);
gdjs.copyArray(runtimeScene.getObjects("PassTXT"), gdjs.LoginCode.GDPassTXTObjects1);
{runtimeScene.getVariables().get("status").setString("");
}{for(var i = 0, len = gdjs.LoginCode.GDEmailTXTObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDEmailTXTObjects1[i].activate(false);
}
}{for(var i = 0, len = gdjs.LoginCode.GDPassTXTObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDPassTXTObjects1[i].activate(false);
}
}}

}


{


gdjs.LoginCode.condition0IsTrue_0.val = false;
{
gdjs.LoginCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("status")) == "ok";
}if (gdjs.LoginCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LogMenu", false);
}}

}


};

gdjs.LoginCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LoginCode.GDNewObjectObjects1.length = 0;
gdjs.LoginCode.GDNewObjectObjects2.length = 0;
gdjs.LoginCode.GDPassObjects1.length = 0;
gdjs.LoginCode.GDPassObjects2.length = 0;
gdjs.LoginCode.GDEmailObjects1.length = 0;
gdjs.LoginCode.GDEmailObjects2.length = 0;
gdjs.LoginCode.GDLoginBTNObjects1.length = 0;
gdjs.LoginCode.GDLoginBTNObjects2.length = 0;
gdjs.LoginCode.GDFIRStatusObjects1.length = 0;
gdjs.LoginCode.GDFIRStatusObjects2.length = 0;
gdjs.LoginCode.GDEmailTXTObjects1.length = 0;
gdjs.LoginCode.GDEmailTXTObjects2.length = 0;
gdjs.LoginCode.GDPassTXTObjects1.length = 0;
gdjs.LoginCode.GDPassTXTObjects2.length = 0;

gdjs.LoginCode.eventsList0(runtimeScene);
return;

}

gdjs['LoginCode'] = gdjs.LoginCode;
