import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp, Mail } from "lucide-react";
import { useState } from "react";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

interface RevealLetterProps {
  senderName: string;
}

export default function RevealLetter({ senderName }: RevealLetterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <Card className="bg-gradient-to-br from-ivory via-rose-cream to-ivory backdrop-blur-sm border-rose-accent/30 shadow-xl">
      <CardContent className="p-8 md:p-12">
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <div className="text-center mb-6">
            <Mail className="w-12 h-12 mx-auto text-rose-accent mb-4" />
            <h2 className="font-serif text-3xl md:text-4xl text-rose-deep mb-4">
              A Special Letter For You
            </h2>

            <CollapsibleTrigger asChild>
              <Button
                variant="outline"
                className="bg-rose-accent/10 border-rose-accent text-rose-deep hover:bg-rose-accent hover:text-white transition-all duration-300"
              >
                {isOpen ? (
                  <>
                    Close Letter <ChevronUp className="ml-2 w-4 h-4" />
                  </>
                ) : (
                  <>
                    Open Letter <ChevronDown className="ml-2 w-4 h-4" />
                  </>
                )}
              </Button>
            </CollapsibleTrigger>
          </div>

          <CollapsibleContent
            className={`space-y-4 ${!prefersReducedMotion ? "transition-all duration-500" : ""}`}
          >
            <div className="prose prose-lg max-w-none text-rose-text">
              <p className="text-center italic mb-6">
                "A rose speaks of love silently, in a language known only to the
                heart."
              </p>

              <div className="space-y-4 text-left">
                <p>My Beloved,</p>

                <p>
                  On this special Rose Day, I want you to know that you are the
                  most precious gift life has ever given me. Like a rose that
                  blooms with grace and beauty, you have brought color and
                  fragrance into my world.
                </p>

                <p>
                  Every petal of every rose reminds me of the countless reasons
                  I love you. Your smile is my sunshine, your laughter is my
                  favorite melody, and your presence is my greatest comfort. You
                  make ordinary moments extraordinary and turn simple days into
                  cherished memories.
                </p>

                <p>
                  Just as roses need care and attention to flourish, I promise
                  to nurture our love with patience, understanding, and
                  devotion. Through every season of life, I will be by your
                  side, celebrating your joys and supporting you through
                  challenges.
                </p>

                <p>
                  Thank you for being you – for your kindness, your strength,
                  your beautiful soul. You are my forever rose, blooming
                  eternally in the garden of my heart.
                </p>

                <p className="text-right mt-8">
                  With all my love,
                  <br />
                  <span className="font-serif text-xl text-rose-deep">
                    {senderName}
                  </span>
                </p>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  );
}
