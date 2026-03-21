import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Heart } from "lucide-react";
import { useState } from "react";
import FloatingPetals from "../components/rose-day/FloatingPetals";
import PersonalizationControls from "../components/rose-day/PersonalizationControls";
import RevealLetter from "../components/rose-day/RevealLetter";

export default function RoseDayGiftPage() {
  const [recipientName, setRecipientName] = useState("");
  const [senderName, setSenderName] = useState("");
  const [loveMessage, setLoveMessage] = useState("");

  const displayRecipient = recipientName || "My Dearest Love";
  const displaySender = senderName || "Your Forever Admirer";
  const displayMessage =
    loveMessage ||
    "Every moment with you is a beautiful memory in the making. You are the rose in my garden of life, bringing color, fragrance, and endless joy to my days.";

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-cream via-ivory to-rose-cream relative overflow-hidden">
      <FloatingPetals />

      {/* Hero Section */}
      <header className="relative z-10 pt-12 pb-8 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-8 animate-fade-in">
            <img
              src="/assets/generated/rose-icon-line.dim_256x256.png"
              alt="Rose"
              className="w-16 h-16 mx-auto mb-4 opacity-80"
            />
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-rose-deep mb-4 tracking-tight">
              Happy Rose Day
            </h1>
            <p className="text-xl md:text-2xl text-rose-muted font-light">
              To {displayRecipient}
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8 animate-slide-up">
            <img
              src="/assets/generated/rose-bouquet-hero.dim_1600x900.png"
              alt="Beautiful rose bouquet"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-rose-deep/30 to-transparent" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 pb-16 px-4">
        <div className="container max-w-4xl mx-auto space-y-12">
          {/* Personalization Controls */}
          <section className="animate-fade-in-delay-1">
            <PersonalizationControls
              recipientName={recipientName}
              senderName={senderName}
              loveMessage={loveMessage}
              onRecipientChange={setRecipientName}
              onSenderChange={setSenderName}
              onMessageChange={setLoveMessage}
            />
          </section>

          {/* Love Message Section */}
          <section className="animate-fade-in-delay-2">
            <Card className="bg-ivory/80 backdrop-blur-sm border-rose-soft shadow-xl">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-center justify-center mb-6">
                  <Separator className="flex-1 bg-rose-soft" />
                  <Heart className="mx-4 text-rose-accent fill-rose-accent w-6 h-6" />
                  <Separator className="flex-1 bg-rose-soft" />
                </div>

                <h2 className="font-serif text-3xl md:text-4xl text-rose-deep text-center mb-6">
                  A Message From My Heart
                </h2>

                <p className="text-lg text-rose-text leading-relaxed text-center mb-8">
                  {displayMessage}
                </p>

                <div className="flex items-center justify-center">
                  <Separator className="flex-1 bg-rose-soft" />
                  <img
                    src="/assets/generated/rose-icon-line.dim_256x256.png"
                    alt="Rose divider"
                    className="w-8 h-8 mx-4 opacity-60"
                  />
                  <Separator className="flex-1 bg-rose-soft" />
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Reveal Letter Section */}
          <section className="animate-fade-in-delay-3">
            <RevealLetter senderName={displaySender} />
          </section>

          {/* Wishes Section */}
          <section className="animate-fade-in-delay-4">
            <Card className="bg-gradient-to-br from-rose-accent/10 to-gold-accent/10 backdrop-blur-sm border-gold-accent/30 shadow-xl">
              <CardContent className="p-8 md:p-12">
                <h2 className="font-serif text-3xl md:text-4xl text-rose-deep text-center mb-8">
                  My Wishes For You
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center space-y-3">
                    <div className="w-12 h-12 mx-auto bg-rose-accent/20 rounded-full flex items-center justify-center">
                      <Heart className="w-6 h-6 text-rose-accent fill-rose-accent" />
                    </div>
                    <h3 className="font-serif text-xl text-rose-deep">
                      Endless Love
                    </h3>
                    <p className="text-rose-text text-sm">
                      May our love bloom like roses, forever fresh and beautiful
                    </p>
                  </div>

                  <div className="text-center space-y-3">
                    <div className="w-12 h-12 mx-auto bg-rose-accent/20 rounded-full flex items-center justify-center">
                      <Heart className="w-6 h-6 text-rose-accent fill-rose-accent" />
                    </div>
                    <h3 className="font-serif text-xl text-rose-deep">
                      Eternal Joy
                    </h3>
                    <p className="text-rose-text text-sm">
                      May every day bring you happiness and sweet moments
                    </p>
                  </div>

                  <div className="text-center space-y-3">
                    <div className="w-12 h-12 mx-auto bg-rose-accent/20 rounded-full flex items-center justify-center">
                      <Heart className="w-6 h-6 text-rose-accent fill-rose-accent" />
                    </div>
                    <h3 className="font-serif text-xl text-rose-deep">
                      Forever Together
                    </h3>
                    <p className="text-rose-text text-sm">
                      May we walk hand in hand through all of life's seasons
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-4 border-t border-rose-soft/30">
        <div className="container max-w-4xl mx-auto text-center">
          <p className="text-rose-muted text-sm flex items-center justify-center gap-2">
            © 2026. Built with{" "}
            <Heart className="w-4 h-4 text-rose-accent fill-rose-accent inline" />{" "}
            using{" "}
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-accent hover:text-rose-deep transition-colors underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
