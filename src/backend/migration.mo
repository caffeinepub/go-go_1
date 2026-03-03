import Array "mo:core/Array";

module {
  type ComicStrip = {
    title : Text;
    slideId : Text;
    description : Text;
  };

  type OldActor = {
    comicStrips : [ComicStrip];
  };

  type NewActor = {
    comicStrips : [ComicStrip];
  };

  public func run(old : OldActor) : NewActor {
    let newComics = old.comicStrips.concat([
      {
        title = "Peehead & Butthead";
        slideId = "peehead-butthead";
        description = "Brand new release! The wildest duo hits the streets. Rated PG-13.";
      },
    ]);
    { comicStrips = newComics };
  };
};
