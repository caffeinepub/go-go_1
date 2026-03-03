import Array "mo:core/Array";
import Migration "migration";

(with migration = Migration.run)
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
    {
      title = "Peehead & Butthead";
      slideId = "peehead-butthead";
      description = "Brand new release! The wildest duo hits the streets. Rated PG-13.";
    },
  ];

  public query ({ caller }) func getComicStrips() : async [ComicStrip] {
    comicStrips;
  };
};
