interface Prefrences {
  volume: number;
  subtitles: boolean;
}

interface ChannelPreferences {
  bbc1: Prefrences;
  bbc2: Prefrences;
  bbcNews: Prefrences;
  bbcParliament: Prefrences;
  // ...
}

type Channels = "bbc1" | "bbc2" | "bbcNews";

interface ChannnelPrefrencesDist {
  [channel: string]: Prefrences;
}

const preferenceMap = new Map<Channels, Prefrences>();

// PreferenceMap.has()
