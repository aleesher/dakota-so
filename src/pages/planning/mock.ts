import { TMessage } from "./types";

export const COST_CENTERS = ["AMSTERDAM", "RAALTE", "RIDDERKERK"];

export const MESSAGES: TMessage[] = [
  {
    id: 1,
    type: "DeadlineExpired",
    text:
      "Waarschuwing! Let op! Order W01, bij werknemer dhr. Jansen heeft nog 23 minuten tot startmoment 14:30"
  },
  {
    id: 2,
    type: "DeadlineExpired",
    text:
      "Waarschuwing! Let op! Order W01, bij werknemer dhr. Jansen heeft nog 23 minuten tot startmoment 14:30"
  },
  {
    id: 3,
    type: "Warning",
    text:
      "Waarschuwing! Let op! Order W01, bij werknemer dhr. Jansen heeft nog 23 minuten tot startmoment 14:30"
  },
  {
    id: 4,
    type: "Warning",
    text:
      "Waarschuwing! Let op! Order W01, bij werknemer dhr. Jansen heeft nog 23 minuten tot startmoment 14:30"
  }
];
