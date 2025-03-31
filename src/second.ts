interface takePhoto {
  cameraMode: string;
  filter: string;
  burst: number;
}

interface Story {
  isPhoto: boolean;
  createStory(): number;
}

class Instagram implements takePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {}
}

class Youtube implements takePhoto, Story {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number,
    public isPhoto: boolean,
    public liveStream: string // added new one
  ) {}

  createStory(): number {
    return 404;
  }
}
