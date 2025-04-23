"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Loader2, Copy, Trash2 } from "lucide-react";

import { TeamSection } from "@/components/team-section";

export default function Home() {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [activeTab, setActiveTab] = useState("summarize");

  // Load history from localStorage on component mount
  useEffect(() => {
    const savedHistory = localStorage.getItem("summaryHistory");
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, []);

  //nanti di ganti kalo misal make cloud *mongo?
  useEffect(() => {
    localStorage.setItem("summaryHistory", JSON.stringify(history));
  }, [history]);

  const handleSummarize = async () => {
    if (!text.trim()) return;

    setLoading(true);
    try {
      const result = await generateSummary(text);
      setSummary(result);

      const newHistoryItem: HistoryItem = {
        id: Date.now().toString(),
        originalText: text,
        summary: result,
        timestamp: new Date().toISOString(),
      };

      setHistory((prev) => [newHistoryItem, ...prev]);
    } catch (error) {
      console.error("Error generating summary:", error);
      setSummary("Failed to generate summary. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const clearHistory = () => {
    setHistory([]);
  };

  const deleteHistoryItem = (id: string) => {
    setHistory((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <main className="container mx-auto py-8 px-4 max-w-4xl">
      <h1 className="text-3xl font-bold text-center mb-8">Brevity</h1>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="summarize">Summarize</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>

        <TabsContent value="summarize" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Input Text</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Paste or type the text you want to summarize..."
                className="min-h-[200px]"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <Button
                className="mt-4 w-full"
                onClick={handleSummarize}
                disabled={loading || !text.trim()}
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Summarizing...
                  </>
                ) : (
                  "Summarize"
                )}
              </Button>
            </CardContent>
          </Card>

          {summary && (
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Summary</CardTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => copyToClipboard(summary)}
                  title="Copy to clipboard"
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent>
                <div className="p-4 bg-muted rounded-md whitespace-pre-wrap">
                  {summary}
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="history">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Your Summaries</h2>
              {history.length > 0 && (
                <Button variant="destructive" size="sm" onClick={clearHistory}>
                  Clear All
                </Button>
              )}
            </div>

            {history.length === 0 ? (
              <Card>
                <CardContent className="p-6 text-center text-muted-foreground">
                  No summaries yet. Start by summarizing some text!
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                {history.map((item) => (
                  <Card key={item.id} className="relative">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-base">
                          {new Date(item.timestamp).toLocaleString()}
                        </CardTitle>
                        <div className="flex space-x-1">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => copyToClipboard(item.summary)}
                            title="Copy summary"
                          >
                            <Copy className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => deleteHistoryItem(item.id)}
                            title="Delete"
                          >
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="text-sm text-muted-foreground line-clamp-2 mb-2">
                        {item.originalText}
                      </div>
                      <div className="p-3 bg-muted rounded-md text-sm">
                        {item.summary}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>

      <TeamSection />
    </main>
  );
}
