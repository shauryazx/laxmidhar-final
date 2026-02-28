"use client";

import { useState, useEffect } from "react";
import { answerFaqQuestion } from "@/ai/flows/ai-powered-faq-tool-flow";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { MessageSquare, Send, Loader2, User, Bot, X, Sparkles } from "lucide-react";

type Message = {
  role: "user" | "bot";
  content: string;
};

export function AIChatPopup() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", content: "Hello! I'm your Laxmidhar Polytechnic Assistant. How can I help you with admissions, fees, or engineering branches today?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Automatically open the chat popup when the component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000); // Small delay for better UX
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const result = await answerFaqQuestion({ question: userMessage });
      setMessages(prev => [...prev, { role: "bot", content: result.answer }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: "bot", content: "I'm sorry, I encountered an error. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button 
            size="lg" 
            className="rounded-full h-16 w-16 shadow-2xl bg-primary hover:bg-primary/90 border-4 border-white flex items-center justify-center group transition-all hover:scale-110"
          >
            {isOpen ? <X className="h-8 w-8" /> : <Sparkles className="h-8 w-8 text-accent animate-pulse" />}
            {!isOpen && (
              <span className="absolute -top-2 -left-2 bg-accent text-accent-foreground text-[10px] font-black px-2 py-1 rounded-full shadow-md uppercase tracking-tighter">
                Ask AI
              </span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent side="top" align="end" className="w-[380px] p-0 border-none shadow-2xl mr-4 mb-4 rounded-3xl overflow-hidden">
          <Card className="border-none shadow-none">
            <CardHeader className="bg-primary text-primary-foreground p-6">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-xl">
                  <Bot className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <CardTitle className="text-lg">College Assistant</CardTitle>
                  <CardDescription className="text-primary-foreground/70 text-xs">Powered by Gemini AI</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <ScrollArea className="h-[350px] p-4 bg-muted/10">
                <div className="space-y-4">
                  {messages.map((msg, i) => (
                    <div
                      key={i}
                      className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                    >
                      <div className={`mt-1 p-1.5 rounded-lg h-fit ${msg.role === "user" ? "bg-accent" : "bg-primary text-primary-foreground"}`}>
                        {msg.role === "user" ? <User className="h-3 w-3" /> : <Bot className="h-3 w-3" />}
                      </div>
                      <div
                        className={`max-w-[85%] rounded-2xl px-4 py-2 text-xs leading-relaxed shadow-sm ${
                          msg.role === "user" 
                            ? "bg-primary text-primary-foreground rounded-tr-none" 
                            : "bg-white border border-border rounded-tl-none text-foreground"
                        }`}
                      >
                        {msg.content}
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex gap-3">
                      <div className="mt-1 p-1.5 rounded-lg bg-primary text-primary-foreground">
                        <Bot className="h-3 w-3" />
                      </div>
                      <div className="bg-white border border-border rounded-2xl rounded-tl-none px-4 py-2 shadow-sm">
                        <Loader2 className="h-4 w-4 animate-spin text-primary" />
                      </div>
                    </div>
                  )}
                </div>
              </ScrollArea>
              <form onSubmit={handleSubmit} className="p-4 border-t flex gap-2 bg-white">
                <Input
                  placeholder="Ask about admissions, zero fees..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 bg-muted/30 border-none rounded-xl text-xs h-10"
                  disabled={isLoading}
                />
                <Button type="submit" disabled={isLoading} size="icon" className="bg-primary rounded-xl h-10 w-10">
                  <Send className="h-4 w-4" />
                </Button>
              </form>
              <div className="bg-muted/30 px-4 py-2 text-[9px] text-center text-muted-foreground font-bold uppercase tracking-widest border-t">
                Official AICTE & BTER Information
              </div>
            </CardContent>
          </Card>
        </PopoverContent>
      </Popover>
    </div>
  );
}
