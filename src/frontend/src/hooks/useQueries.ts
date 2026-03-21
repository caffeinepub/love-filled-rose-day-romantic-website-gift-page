import { useMutation } from "@tanstack/react-query";
import { useActor } from "./useActor";

export function useSubmitMessage() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (data: {
      name: string;
      email: string;
      messageText: string;
    }) => {
      if (!actor) throw new Error("Not connected");
      return actor.submitMessage(data.name, data.email, data.messageText);
    },
  });
}
