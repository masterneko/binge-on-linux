let temp = new Date();
temp.setFullYear((new Date()).getFullYear() + 1);

localStorage.setItem('ares-can-use-high-drm', '{ "value": true }');
localStorage.setItem('ares-playback-details', '{ "value": { "all": { "fairPlayAvcHigh": "", "playReadyAvcHigh":"", "playReadyAvcLow":"", "playReadyHevcHigh":"", "playReadyHevcLow":"","widevineAvcHigh":"","widevineAvcLow":"","widevineHevcHigh":"", "widevineHevcLow":""}, "canPlayHighDrm": true,"canPlayHevc": false }, "valueExpiresIn": "' + temp.toJSON() + '" }');

