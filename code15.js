gdjs.RegisterCode = {};
gdjs.RegisterCode.GDNewObjectObjects1= [];
gdjs.RegisterCode.GDNewObjectObjects2= [];
gdjs.RegisterCode.GDEmailObjects1= [];
gdjs.RegisterCode.GDEmailObjects2= [];
gdjs.RegisterCode.GDPassObjects1= [];
gdjs.RegisterCode.GDPassObjects2= [];
gdjs.RegisterCode.GDUsernameObjects1= [];
gdjs.RegisterCode.GDUsernameObjects2= [];
gdjs.RegisterCode.GDLoginBTNObjects1= [];
gdjs.RegisterCode.GDLoginBTNObjects2= [];
gdjs.RegisterCode.GDFIRStatusObjects1= [];
gdjs.RegisterCode.GDFIRStatusObjects2= [];
gdjs.RegisterCode.GDEmailTXTObjects1= [];
gdjs.RegisterCode.GDEmailTXTObjects2= [];
gdjs.RegisterCode.GDUsernameTXTObjects1= [];
gdjs.RegisterCode.GDUsernameTXTObjects2= [];
gdjs.RegisterCode.GDPassTXTObjects1= [];
gdjs.RegisterCode.GDPassTXTObjects2= [];
gdjs.RegisterCode.GDBGObjects1= [];
gdjs.RegisterCode.GDBGObjects2= [];
gdjs.RegisterCode.GDNewObject2Objects1= [];
gdjs.RegisterCode.GDNewObject2Objects2= [];

gdjs.RegisterCode.conditionTrue_0 = {val:false};
gdjs.RegisterCode.condition0IsTrue_0 = {val:false};
gdjs.RegisterCode.condition1IsTrue_0 = {val:false};
gdjs.RegisterCode.condition2IsTrue_0 = {val:false};
gdjs.RegisterCode.condition3IsTrue_0 = {val:false};
gdjs.RegisterCode.conditionTrue_1 = {val:false};
gdjs.RegisterCode.condition0IsTrue_1 = {val:false};
gdjs.RegisterCode.condition1IsTrue_1 = {val:false};
gdjs.RegisterCode.condition2IsTrue_1 = {val:false};
gdjs.RegisterCode.condition3IsTrue_1 = {val:false};


gdjs.RegisterCode.mapOfGDgdjs_46RegisterCode_46GDPassObjects1Objects = Hashtable.newFrom({"Pass": gdjs.RegisterCode.GDPassObjects1});gdjs.RegisterCode.mapOfGDgdjs_46RegisterCode_46GDEmailObjects1Objects = Hashtable.newFrom({"Email": gdjs.RegisterCode.GDEmailObjects1});gdjs.RegisterCode.mapOfGDgdjs_46RegisterCode_46GDUsernameObjects1Objects = Hashtable.newFrom({"Username": gdjs.RegisterCode.GDUsernameObjects1});gdjs.RegisterCode.mapOfGDgdjs_46RegisterCode_46GDLoginBTNObjects1Objects = Hashtable.newFrom({"LoginBTN": gdjs.RegisterCode.GDLoginBTNObjects1});gdjs.RegisterCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Pass"), gdjs.RegisterCode.GDPassObjects1);

gdjs.RegisterCode.condition0IsTrue_0.val = false;
gdjs.RegisterCode.condition1IsTrue_0.val = false;
{
gdjs.RegisterCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.RegisterCode.mapOfGDgdjs_46RegisterCode_46GDPassObjects1Objects, runtimeScene, true, false);
}if ( gdjs.RegisterCode.condition0IsTrue_0.val ) {
{
gdjs.RegisterCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.RegisterCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Email"), gdjs.RegisterCode.GDEmailObjects1);
gdjs.copyArray(runtimeScene.getObjects("EmailTXT"), gdjs.RegisterCode.GDEmailTXTObjects1);
/* Reuse gdjs.RegisterCode.GDPassObjects1 */
gdjs.copyArray(runtimeScene.getObjects("PassTXT"), gdjs.RegisterCode.GDPassTXTObjects1);
gdjs.copyArray(runtimeScene.getObjects("Username"), gdjs.RegisterCode.GDUsernameObjects1);
gdjs.copyArray(runtimeScene.getObjects("UsernameTXT"), gdjs.RegisterCode.GDUsernameTXTObjects1);
{for(var i = 0, len = gdjs.RegisterCode.GDPassObjects1.length ;i < len;++i) {
    gdjs.RegisterCode.GDPassObjects1[i].setColor("104;104;104");
}
}{for(var i = 0, len = gdjs.RegisterCode.GDEmailObjects1.length ;i < len;++i) {
    gdjs.RegisterCode.GDEmailObjects1[i].setColor("0;0;0");
}
}{for(var i = 0, len = gdjs.RegisterCode.GDUsernameObjects1.length ;i < len;++i) {
    gdjs.RegisterCode.GDUsernameObjects1[i].setColor("0;0;0");
}
}{for(var i = 0, len = gdjs.RegisterCode.GDEmailTXTObjects1.length ;i < len;++i) {
    gdjs.RegisterCode.GDEmailTXTObjects1[i].activate(false);
}
}{for(var i = 0, len = gdjs.RegisterCode.GDPassTXTObjects1.length ;i < len;++i) {
    gdjs.RegisterCode.GDPassTXTObjects1[i].activate(true);
}
}{for(var i = 0, len = gdjs.RegisterCode.GDUsernameTXTObjects1.length ;i < len;++i) {
    gdjs.RegisterCode.GDUsernameTXTObjects1[i].activate(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Email"), gdjs.RegisterCode.GDEmailObjects1);

gdjs.RegisterCode.condition0IsTrue_0.val = false;
gdjs.RegisterCode.condition1IsTrue_0.val = false;
{
gdjs.RegisterCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.RegisterCode.mapOfGDgdjs_46RegisterCode_46GDEmailObjects1Objects, runtimeScene, true, false);
}if ( gdjs.RegisterCode.condition0IsTrue_0.val ) {
{
gdjs.RegisterCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.RegisterCode.condition1IsTrue_0.val) {
/* Reuse gdjs.RegisterCode.GDEmailObjects1 */
gdjs.copyArray(runtimeScene.getObjects("EmailTXT"), gdjs.RegisterCode.GDEmailTXTObjects1);
gdjs.copyArray(runtimeScene.getObjects("Pass"), gdjs.RegisterCode.GDPassObjects1);
gdjs.copyArray(runtimeScene.getObjects("PassTXT"), gdjs.RegisterCode.GDPassTXTObjects1);
gdjs.copyArray(runtimeScene.getObjects("Username"), gdjs.RegisterCode.GDUsernameObjects1);
gdjs.copyArray(runtimeScene.getObjects("UsernameTXT"), gdjs.RegisterCode.GDUsernameTXTObjects1);
{for(var i = 0, len = gdjs.RegisterCode.GDEmailObjects1.length ;i < len;++i) {
    gdjs.RegisterCode.GDEmailObjects1[i].setColor("104;104;104");
}
}{for(var i = 0, len = gdjs.RegisterCode.GDPassObjects1.length ;i < len;++i) {
    gdjs.RegisterCode.GDPassObjects1[i].setColor("0;0;0");
}
}{for(var i = 0, len = gdjs.RegisterCode.GDUsernameObjects1.length ;i < len;++i) {
    gdjs.RegisterCode.GDUsernameObjects1[i].setColor("0;0;0");
}
}{for(var i = 0, len = gdjs.RegisterCode.GDEmailTXTObjects1.length ;i < len;++i) {
    gdjs.RegisterCode.GDEmailTXTObjects1[i].activate(true);
}
}{for(var i = 0, len = gdjs.RegisterCode.GDPassTXTObjects1.length ;i < len;++i) {
    gdjs.RegisterCode.GDPassTXTObjects1[i].activate(false);
}
}{for(var i = 0, len = gdjs.RegisterCode.GDUsernameTXTObjects1.length ;i < len;++i) {
    gdjs.RegisterCode.GDUsernameTXTObjects1[i].activate(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Username"), gdjs.RegisterCode.GDUsernameObjects1);

gdjs.RegisterCode.condition0IsTrue_0.val = false;
gdjs.RegisterCode.condition1IsTrue_0.val = false;
{
gdjs.RegisterCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.RegisterCode.mapOfGDgdjs_46RegisterCode_46GDUsernameObjects1Objects, runtimeScene, true, false);
}if ( gdjs.RegisterCode.condition0IsTrue_0.val ) {
{
gdjs.RegisterCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.RegisterCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Email"), gdjs.RegisterCode.GDEmailObjects1);
gdjs.copyArray(runtimeScene.getObjects("EmailTXT"), gdjs.RegisterCode.GDEmailTXTObjects1);
gdjs.copyArray(runtimeScene.getObjects("Pass"), gdjs.RegisterCode.GDPassObjects1);
gdjs.copyArray(runtimeScene.getObjects("PassTXT"), gdjs.RegisterCode.GDPassTXTObjects1);
/* Reuse gdjs.RegisterCode.GDUsernameObjects1 */
gdjs.copyArray(runtimeScene.getObjects("UsernameTXT"), gdjs.RegisterCode.GDUsernameTXTObjects1);
{for(var i = 0, len = gdjs.RegisterCode.GDEmailObjects1.length ;i < len;++i) {
    gdjs.RegisterCode.GDEmailObjects1[i].setColor("0;0;0");
}
}{for(var i = 0, len = gdjs.RegisterCode.GDPassObjects1.length ;i < len;++i) {
    gdjs.RegisterCode.GDPassObjects1[i].setColor("0;0;0");
}
}{for(var i = 0, len = gdjs.RegisterCode.GDUsernameObjects1.length ;i < len;++i) {
    gdjs.RegisterCode.GDUsernameObjects1[i].setColor("104;104;104");
}
}{for(var i = 0, len = gdjs.RegisterCode.GDEmailTXTObjects1.length ;i < len;++i) {
    gdjs.RegisterCode.GDEmailTXTObjects1[i].activate(false);
}
}{for(var i = 0, len = gdjs.RegisterCode.GDPassTXTObjects1.length ;i < len;++i) {
    gdjs.RegisterCode.GDPassTXTObjects1[i].activate(false);
}
}{for(var i = 0, len = gdjs.RegisterCode.GDUsernameTXTObjects1.length ;i < len;++i) {
    gdjs.RegisterCode.GDUsernameTXTObjects1[i].activate(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LoginBTN"), gdjs.RegisterCode.GDLoginBTNObjects1);

gdjs.RegisterCode.condition0IsTrue_0.val = false;
gdjs.RegisterCode.condition1IsTrue_0.val = false;
gdjs.RegisterCode.condition2IsTrue_0.val = false;
{
gdjs.RegisterCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.RegisterCode.mapOfGDgdjs_46RegisterCode_46GDLoginBTNObjects1Objects, runtimeScene, true, false);
}if ( gdjs.RegisterCode.condition0IsTrue_0.val ) {
{
gdjs.RegisterCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.RegisterCode.condition1IsTrue_0.val ) {
{
{gdjs.RegisterCode.conditionTrue_1 = gdjs.RegisterCode.condition2IsTrue_0;
gdjs.RegisterCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13108716);
}
}}
}
if (gdjs.RegisterCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("EmailTXT"), gdjs.RegisterCode.GDEmailTXTObjects1);
gdjs.copyArray(runtimeScene.getObjects("PassTXT"), gdjs.RegisterCode.GDPassTXTObjects1);
gdjs.copyArray(runtimeScene.getObjects("UsernameTXT"), gdjs.RegisterCode.GDUsernameTXTObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "set");
}{gdjs.evtTools.firebaseTools.auth.createAccountWithEmail((( gdjs.RegisterCode.GDEmailTXTObjects1.length === 0 ) ? "" :gdjs.RegisterCode.GDEmailTXTObjects1[0].getString()), (( gdjs.RegisterCode.GDPassTXTObjects1.length === 0 ) ? "" :gdjs.RegisterCode.GDPassTXTObjects1[0].getString()), runtimeScene.getVariables().get("status"));
}{gdjs.evtTools.firebaseTools.auth.signInWithEmail((( gdjs.RegisterCode.GDEmailTXTObjects1.length === 0 ) ? "" :gdjs.RegisterCode.GDEmailTXTObjects1[0].getString()), (( gdjs.RegisterCode.GDPassTXTObjects1.length === 0 ) ? "" :gdjs.RegisterCode.GDPassTXTObjects1[0].getString()), runtimeScene.getVariables().get("status2"));
}{gdjs.evtTools.firebaseTools.auth.userManagement.setDisplayName((( gdjs.RegisterCode.GDUsernameTXTObjects1.length === 0 ) ? "" :gdjs.RegisterCode.GDUsernameTXTObjects1[0].getString()));
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Email"), gdjs.RegisterCode.GDEmailObjects1);
gdjs.copyArray(runtimeScene.getObjects("EmailTXT"), gdjs.RegisterCode.GDEmailTXTObjects1);
gdjs.copyArray(runtimeScene.getObjects("FIRStatus"), gdjs.RegisterCode.GDFIRStatusObjects1);
gdjs.copyArray(runtimeScene.getObjects("Pass"), gdjs.RegisterCode.GDPassObjects1);
gdjs.copyArray(runtimeScene.getObjects("PassTXT"), gdjs.RegisterCode.GDPassTXTObjects1);
gdjs.copyArray(runtimeScene.getObjects("Username"), gdjs.RegisterCode.GDUsernameObjects1);
gdjs.copyArray(runtimeScene.getObjects("UsernameTXT"), gdjs.RegisterCode.GDUsernameTXTObjects1);
{for(var i = 0, len = gdjs.RegisterCode.GDEmailObjects1.length ;i < len;++i) {
    gdjs.RegisterCode.GDEmailObjects1[i].setString("Email: " + (( gdjs.RegisterCode.GDEmailTXTObjects1.length === 0 ) ? "" :gdjs.RegisterCode.GDEmailTXTObjects1[0].getString()));
}
}{for(var i = 0, len = gdjs.RegisterCode.GDPassObjects1.length ;i < len;++i) {
    gdjs.RegisterCode.GDPassObjects1[i].setString("Password: " + (( gdjs.RegisterCode.GDPassTXTObjects1.length === 0 ) ? "" :gdjs.RegisterCode.GDPassTXTObjects1[0].getString()));
}
}{for(var i = 0, len = gdjs.RegisterCode.GDUsernameObjects1.length ;i < len;++i) {
    gdjs.RegisterCode.GDUsernameObjects1[i].setString("Username: " + (( gdjs.RegisterCode.GDUsernameTXTObjects1.length === 0 ) ? "" :gdjs.RegisterCode.GDUsernameTXTObjects1[0].getString()));
}
}{for(var i = 0, len = gdjs.RegisterCode.GDFIRStatusObjects1.length ;i < len;++i) {
    gdjs.RegisterCode.GDFIRStatusObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("status")));
}
}}

}


{


gdjs.RegisterCode.condition0IsTrue_0.val = false;
{
gdjs.RegisterCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.RegisterCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("EmailTXT"), gdjs.RegisterCode.GDEmailTXTObjects1);
gdjs.copyArray(runtimeScene.getObjects("PassTXT"), gdjs.RegisterCode.GDPassTXTObjects1);
{runtimeScene.getVariables().get("status").setString("");
}{for(var i = 0, len = gdjs.RegisterCode.GDEmailTXTObjects1.length ;i < len;++i) {
    gdjs.RegisterCode.GDEmailTXTObjects1[i].activate(false);
}
}{for(var i = 0, len = gdjs.RegisterCode.GDPassTXTObjects1.length ;i < len;++i) {
    gdjs.RegisterCode.GDPassTXTObjects1[i].activate(false);
}
}}

}


{


gdjs.RegisterCode.condition0IsTrue_0.val = false;
gdjs.RegisterCode.condition1IsTrue_0.val = false;
{
gdjs.RegisterCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("status2")) == "ok";
}if ( gdjs.RegisterCode.condition0IsTrue_0.val ) {
{
gdjs.RegisterCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "set");
}}
if (gdjs.RegisterCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LogMenu", false);
}}

}


};

gdjs.RegisterCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.RegisterCode.GDNewObjectObjects1.length = 0;
gdjs.RegisterCode.GDNewObjectObjects2.length = 0;
gdjs.RegisterCode.GDEmailObjects1.length = 0;
gdjs.RegisterCode.GDEmailObjects2.length = 0;
gdjs.RegisterCode.GDPassObjects1.length = 0;
gdjs.RegisterCode.GDPassObjects2.length = 0;
gdjs.RegisterCode.GDUsernameObjects1.length = 0;
gdjs.RegisterCode.GDUsernameObjects2.length = 0;
gdjs.RegisterCode.GDLoginBTNObjects1.length = 0;
gdjs.RegisterCode.GDLoginBTNObjects2.length = 0;
gdjs.RegisterCode.GDFIRStatusObjects1.length = 0;
gdjs.RegisterCode.GDFIRStatusObjects2.length = 0;
gdjs.RegisterCode.GDEmailTXTObjects1.length = 0;
gdjs.RegisterCode.GDEmailTXTObjects2.length = 0;
gdjs.RegisterCode.GDUsernameTXTObjects1.length = 0;
gdjs.RegisterCode.GDUsernameTXTObjects2.length = 0;
gdjs.RegisterCode.GDPassTXTObjects1.length = 0;
gdjs.RegisterCode.GDPassTXTObjects2.length = 0;
gdjs.RegisterCode.GDBGObjects1.length = 0;
gdjs.RegisterCode.GDBGObjects2.length = 0;
gdjs.RegisterCode.GDNewObject2Objects1.length = 0;
gdjs.RegisterCode.GDNewObject2Objects2.length = 0;

gdjs.RegisterCode.eventsList0(runtimeScene);
return;

}

gdjs['RegisterCode'] = gdjs.RegisterCode;
