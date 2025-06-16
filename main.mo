import Array "mo:base/Array";

actor {
  stable var items: [(Text, Text)] = [];

  public func addItem(id: Text, name: Text): async Text {
    items := Array.append(items, [(id, name)]);
    return "Added item: " # name;
  };

  public query func getItems(): async [(Text, Text)] {
    return items;
  };
}
