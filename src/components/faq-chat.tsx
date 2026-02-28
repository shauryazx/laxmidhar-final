
"use client";

import { useState } from "react";
import { answerFaqQuestion } from "@/ai/flows/ai-powered-faq-tool-flow";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageSquare, Send, Loader2, User, Bot } from "lucide-react";

type Message = {
  role: "user" | "bot";
  content: string;
};

export function FaqChat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", content: "Hello! I'm your Laxmidhar College Assistant. How can I help you today regarding admissions, programs, or general info?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);

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
    <Card className="w-full max-w-2xl mx-auto border-primary/20 shadow-xl">
      <CardHeader className="bg-primary text-primary-foreground">
        <div className="flex items-center gap-3">
          <MessageSquare className="h-6 w-6 text-accent" />
          <div>
            <CardTitle>AI Support Assistant</CardTitle>
            <CardDescription className="text-primary-foreground/70">Ask me anything about Laxmidhar College</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-[400px] p-4">
          <div className="space-y-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
              >
                <div className={`mt-1 p-2 rounded-full ${msg.role === "user" ? "bg-accent" : "bg-primary text-primary-foreground"}`}>
                  {msg.role === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                </div>
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm leading-relaxed ${
                    msg.role === "user" 
                      ? "bg-muted text-foreground" 
                      : "bg-primary/5 border border-primary/10"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-3">
                <div className="mt-1 p-2 rounded-full bg-primary text-primary-foreground">
                  <Bot className="h-4 w-4" />
                </div>
                <div className="bg-primary/5 border border-primary/10 rounded-2xl px-4 py-2">
                  <Loader2 className="h-4 w-4 animate-spin text-primary" />
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
        <form onSubmit={handleSubmit} className="p-4 border-t flex gap-2 bg-muted/30">
          <Input
            placeholder="Type your question here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-white"
            disabled={isLoading}
          />
          <Button type="submit" disabled={isLoading} className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
