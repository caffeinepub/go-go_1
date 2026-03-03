import Array "mo:core/Array";

actor {
  type ComicStrip = {
    title : Text;
    slideId : Text;
    description : Text;
  };

  let comicStrips = [
    {
      title = "Legends of the Hidden Butt";
      slideId = "1lWnWT1t5nKmRcQhQdWLtfLf4ew7CCjRie_eVSU363a4";
      description = "The first comic strip in the series.";
    },
  ];

  public query ({ caller }) func getComicStrips() : async [ComicStrip] {
    comicStrips;
  };
};
