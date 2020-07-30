## [1] Overview
This mini project was a Single-Page Application (SPA) that shows:
Details and locations of traffic incidents that took place in Victoria state using API provided by Victoria state government.


## [2] Preview
- For Desktop view:
desktopview.PNG, desktopview_markerclicked.PNG

![alt text](https://github.com/kaiyoo/Traffic-Map-App/blob/master/desktopview.PNG?raw=true)

- When marker was clicked:
![alt text](https://github.com/kaiyoo/Traffic-Map-App/blob/master/desktopview_markerclicked.PNG?raw=true)

- For mobile view:
mobileview_list.PNG, mobileview_map.PNG


## [3] Building environment
-	Angular2, Typescript, Lite-server

## [4] Building instruction

1.	Please use the security-disabled-chrome for this app by either way of the following. (see the Issue-Access Control Allow Original)
  a.	Chrome extension: https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi
  b.	Chrome –disable-web-security 
    b-1. Copy the shortcut icon of Chrome in Desktop
    b-2. Rename it differently. 
    b-3. Right click => properties
    b-4. in [Shortcut]=>Target, set it to 
         "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --disable-web-security --user-data-dir="C:/ChromeDevSession"
2.	Extract the folder (TrafficMapApp) to your favourable location. (i.e. D://).
3.	Open CMD and go to the directory location (i.e. D://trafficMapApp).
4.	Enter “ng serve” or “npm start”. 
5.	Open the Security disabled Chrome browser or Chrome browser with Allow-Control-Allow-Origin extension, and type “localhost:4200”
  
[Issue]
Access Control Allow Origin
-	Could not fetch the data from the API address provided because of Access Control Allow Origin policy issue. 
-	Tried proxy configuration, enabling CORS in the setting file, and using JSONP instead of HTTP, but did not work. 

Desktop and Mobile screen views images can be seen here:
  
  https://drive.google.com/open?id=0B5KkAdCYDZb2aS1CLXdGTzRyejQ  
  https://drive.google.com/open?id=0B5KkAdCYDZb2MWY5ZUpueThGdUk 
    
  https://drive.google.com/open?id=0B5KkAdCYDZb2N0lEYkF5dm8tc3M  
  https://drive.google.com/open?id=0B5KkAdCYDZb2Zi1NUHhUcE9jT2s 
