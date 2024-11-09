export enum VoiceId {
  alloy = "alloy",
  ash = "ash",
  ballad = "ballad",
  coral = "coral",
  echo = "echo",
  sage = "sage",
  shimmer = "shimmer",
  verse = "verse",
}

export interface Voice {
  id: VoiceId;
  name: string;
}

export const voices: Voice[] = [
  {
    id: VoiceId.alloy,
    name: "Alloy",
  },
  {
      id: VoiceId.ash,
      name: "Ash",
  },
  {
    id: VoiceId.ballad,
    name: "Ballad",
  },
  {
    id: VoiceId.coral,
    name: "Coral",
  },
  {
    id: VoiceId.echo,
    name: "Echo",
  },
  {
      id: VoiceId.sage,
      name: "Sage",
  },
  {
    id: VoiceId.shimmer,
    name: "Shimmer",
  },
  {
      id: VoiceId.verse,
      name: "Verse",
  },
];
