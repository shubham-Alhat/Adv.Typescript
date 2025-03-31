"use strict";
class Instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
class Youtube {
    constructor(cameraMode, filter, burst, isPhoto, liveStream // added new one
    ) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.isPhoto = isPhoto;
        this.liveStream = liveStream;
    }
    createStory() {
        return 404;
    }
}
