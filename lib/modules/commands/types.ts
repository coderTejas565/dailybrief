export type Command =
  | {
      type: "BRIEF";
    }
  | {
      type: "DONE";
      index: number;
    }
  | {
      type: "NONE";
    };
