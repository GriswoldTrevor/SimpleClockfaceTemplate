import document from "document";
import { preferences } from "user-settings";

import * as util from "../common/utils";

//Setup handles for commonly used UI elements 
let timeElement = null;

//Continually used settings
let use24HourTime = null;

export function initClockface(savedSettings) {
  timeElement = document.getElementById("timeText");
 
  //Initialize the settings
  loadSettings(savedSettings);
  
  //Make sure to start with a filled clockface
  updateClockface();
}

export function updateClockface() {
  const time = new Date();
  let timeHours = time.getHours();
  const timeMins = time.getMinutes();
  
  if (!use24HourTime) {
    if (timeHours == 0) {
      timeHours = 12;
    } else if (timeHours > 12) {
      timeHours = timeHours - 12;
    }
  }
  
  const timeText = util.convertToMonospaceDigits(util.zeroPadNumber(timeHours) + ":" + util.zeroPadNumber(timeMins));
  timeElement.text = `${timeText}`;
}

export function loadSettings(savedSettings) {
  //Load any saved settings from the filesystem
  const settings = parseSettings(savedSettings);
  
  use24HourTime = settings["use24HourTime"];
}

function parseSettings(savedSettings) {
  //Initialize with default settings
  let settings = {};
  settings["use24HourTime"] = preferences.clockDisplay === "24h";
  
  //Load saved settings
  for (const key in savedSettings) {
    //Insert any validation or cleanup here
    settings[key] = savedSettings[key];
  }
  
  return settings;
}