gdjs.evtsExt__URLFN__PlaySND = {};

gdjs.evtsExt__URLFN__PlaySND.conditionTrue_0 = {val:false};
gdjs.evtsExt__URLFN__PlaySND.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__URLFN__PlaySND.userFunc0xc01040 = function(runtimeScene, eventsFunctionContext) {
"use strict";
var url = eventsFunctionContext.getArgument("URL");
var vol = eventsFunctionContext.getArgument("Volume");
var pt = eventsFunctionContext.getArgument("Pitch");
var channel = eventsFunctionContext.getArgument("Channel");
var sound_manager = runtimeScene.getGame().getSoundManager(); 
// get the sound manager 
sound_manager.playSoundOnChannel(url, channel, false, vol, pt); 
// play random sound, channel = 0, loop = false, volume = 100, pitch = 1
};
gdjs.evtsExt__URLFN__PlaySND.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__URLFN__PlaySND.userFunc0xc01040(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__URLFN__PlaySND.func = function(runtimeScene, URL, Volume, Pitch, Channel, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "URL") return URL;
if (argName === "Volume") return Volume;
if (argName === "Pitch") return Pitch;
if (argName === "Channel") return Channel;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__URLFN__PlaySND.eventsList0(runtimeScene, eventsFunctionContext);
return;
}

