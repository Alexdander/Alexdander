var APP_DATA = {
  "scenes": [
    {
      "id": "0-",
      "name": "Гардероб",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": -2.0880534783575637,
        "pitch": -0.15290970000582504,
        "fov": 1.3729094996294073
      },
      "linkHotspots": [
        {
          "yaw": -2.0765328172648907,
          "pitch": 0.01346624296051857,
          "rotation": 0,
          "target": "1-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-",
      "name": "Ванная",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.7659354288938847,
          "pitch": -0.0034178698863698287,
          "rotation": 6.283185307179586,
          "target": "0-"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
