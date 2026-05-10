import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Calendar, Mail, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const VIDEO_SRC =
  "https://cdn.coverr.co/videos/coverr-a-man-talking-to-the-camera-2584/1080p.mp4";
const WHATSAPP_URL = "https://wa.me/0000000000";
const CALENDLY_URL = "https://calendly.com/your-handle/discovery";
const EMAIL_URL = "mailto:mehdi@brandbounce.com";

export function AsyncVideoWidget() {
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();
  const size = isMobile ? 64 : 84;

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 12 }}
            transition={{ type: "spring", stiffness: 320, damping: 24 }}
            className="absolute right-0 mb-3 w-[280px] max-w-[calc(100vw-2rem)] rounded-2xl border border-border/50 bg-background/60 p-5 shadow-2xl backdrop-blur-xl"
            style={{ bottom: size + 12 }}
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-2 top-2 rounded-md p-1 text-muted-foreground hover:bg-accent/40 hover:text-foreground transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
            <h3 className="font-display font-bold text-sm pr-6 mb-4">
              Let's start your project
            </h3>
            <div className="flex flex-col gap-2">
              <Button asChild size="sm" className="w-full justify-start font-medium">
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                  <MessageCircle className="mr-1" />
                  Message on WhatsApp
                </a>
              </Button>
              <Button asChild size="sm" variant="outline" className="w-full justify-start font-medium">
                <a href={CALENDLY_URL} target="_blank" rel="noreferrer">
                  <Calendar className="mr-1" />
                  Book a discovery call
                </a>
              </Button>
              <Button asChild size="sm" variant="ghost" className="w-full justify-start font-medium">
                <a href={EMAIL_URL}>
                  <Mail className="mr-1" />
                  Email Mehdi
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="group relative">
        <span className="hidden md:block pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap rounded-full border border-border/50 bg-background/80 px-3 py-1.5 text-xs font-medium text-foreground shadow-md backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
          Ask me anything! 👋
        </span>
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Open contact options"
          style={{ width: size, height: size }}
          className="relative overflow-hidden rounded-full border-[3px] border-primary shadow-2xl backdrop-blur-md bg-background/40 transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <video
            src={VIDEO_SRC}
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          />
        </button>
      </div>
    </div>
  );
}
