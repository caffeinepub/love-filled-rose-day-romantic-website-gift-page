import List "mo:core/List";
import Time "mo:core/Time";



actor {
  type Message = {
    name : Text;
    email : Text;
    messageText : Text;
    timestamp : Time.Time;
  };

  let messages = List.empty<Message>();

  public shared ({ caller }) func submitMessage(name : Text, email : Text, messageText : Text) : async () {
    let newMessage : Message = {
      name;
      email;
      messageText;
      timestamp = Time.now();
    };
    messages.add(newMessage);
  };

  public query ({ caller }) func getMessages() : async [Message] {
    messages.toArray();
  };
};
