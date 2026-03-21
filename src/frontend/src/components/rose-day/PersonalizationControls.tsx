import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Settings } from "lucide-react";

interface PersonalizationControlsProps {
  recipientName: string;
  senderName: string;
  loveMessage: string;
  onRecipientChange: (value: string) => void;
  onSenderChange: (value: string) => void;
  onMessageChange: (value: string) => void;
}

export default function PersonalizationControls({
  recipientName,
  senderName,
  loveMessage,
  onRecipientChange,
  onSenderChange,
  onMessageChange,
}: PersonalizationControlsProps) {
  return (
    <Card className="bg-ivory/90 backdrop-blur-sm border-rose-soft shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-rose-deep">
          <Settings className="w-5 h-5" />
          Personalize Your Message
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="recipient" className="text-rose-text">
              To (Recipient Name)
            </Label>
            <Input
              id="recipient"
              placeholder="My Dearest Love"
              value={recipientName}
              onChange={(e) => onRecipientChange(e.target.value)}
              className="bg-white/80 border-rose-soft focus:border-rose-accent focus:ring-rose-accent"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="sender" className="text-rose-text">
              From (Your Name)
            </Label>
            <Input
              id="sender"
              placeholder="Your Forever Admirer"
              value={senderName}
              onChange={(e) => onSenderChange(e.target.value)}
              className="bg-white/80 border-rose-soft focus:border-rose-accent focus:ring-rose-accent"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-rose-text">
            Your Love Message
          </Label>
          <Textarea
            id="message"
            placeholder="Every moment with you is a beautiful memory in the making..."
            value={loveMessage}
            onChange={(e) => onMessageChange(e.target.value)}
            rows={4}
            className="bg-white/80 border-rose-soft focus:border-rose-accent focus:ring-rose-accent resize-none"
          />
        </div>
      </CardContent>
    </Card>
  );
}
