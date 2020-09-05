# day-planner

#Description
A day planner for scheduling work appointments. The user can save events for each hour of the day. 

#Functionality
The app displays the current day at the top and has blocks of time for standard business hours (9am-5pm).
The user can type appointments and events directly into each time block and click the save button to save
    the event in that time block for the day. Input saves to local storage and can be updated by the user.
Time blocks are color-coded to indicate whether each block is prior to the current time, in the future, or
indicates the current hour. 
Users cannot schedule events for any time block that is earlier than the current hour. 
If the user refreshes the page, saved appointments will remain visible on the scheduler until 5pm, at 
which point the app refreshes local storage to clear the scheduler for the next day. 
The app also has a clear button in case the user needs to clear all events for the day prior to 5pm. 

#Technologies
This app was created with dynamically updated HTML and CSS.
The app uses Bootstrap CDN and the Moment.js library.  
The app content and styles are powered by jQuery and JavaScript.
This app will run in the browser.

#Created by
Rudi Kraeher
September 2020
  