import { useState } from "react";
import { Sparkles, X, Send } from "lucide-react";
import { aiSuggestedQuestions } from "../data/mockData";

export default function AIAssistant() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open ? (
        <div className="ai-panel">
          <div className="ai-panel__head">
            <div className="ai-panel__title">
              <Sparkles size={16} />
              <span>ClassSphere AI</span>
            </div>
            <button
              className="ai-panel__close"
              onClick={() => setOpen(false)}
              aria-label="Close AI assistant"
            >
              <X size={16} />
            </button>
          </div>

          <div className="ai-panel__body">
            <p className="ai-panel__hint">Try asking:</p>
            <div className="ai-panel__suggestions">
              {aiSuggestedQuestions.map((q) => (
                <button className="ai-panel__suggestion" key={q}>
                  {q}
                </button>
              ))}
            </div>
          </div>

          <div className="ai-panel__input">
            <input type="text" placeholder="Ask ClassSphere AI..." />
            <button aria-label="Send message">
              <Send size={15} />
            </button>
          </div>
        </div>
      ) : null}

      <button className="ai-fab" onClick={() => setOpen((v) => !v)}>
        <Sparkles size={16} />
        <span>Ask ClassSphere AI</span>
      </button>
    </>
  );
}
