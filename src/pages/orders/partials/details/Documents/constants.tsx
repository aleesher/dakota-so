import React from "react";

import ReplyIcon from "@material-ui/icons/Reply";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import GetAppRoundedIcon from "@material-ui/icons/GetAppRounded";

export const ACTIONS = [
  {
    title: "Document delen",
    icon: <ReplyIcon className="replyIcon" />,
    onClick: () => console.log("clicked View")
  },
  {
    title: "Document verwijderen",
    icon: <DeleteRoundedIcon className="replyIcon" />,
    onClick: () => console.log("clicked Edit")
  },
  {
    title: "Document downloaden",
    icon: <GetAppRoundedIcon className="replyIcon" />,
    onClick: () => console.log("clicked Delete")
  }
];
