import { MessageCircleQuestion, ArrowRight } from "lucide-react";

export default function DoubtBox() {
  return (
    <section className="doubt-box">
      <div className="doubt-box__icon">
        <MessageCircleQuestion size={22} />
      </div>
      <div className="doubt-box__body">
        <h3>Have a doubt?</h3>
        <p>Ask anonymously and get help from your teacher.</p>
      </div>
      <button className="doubt-box__cta">
        Ask a Doubt <ArrowRight size={15} />
      </button>
    </section>
  );
}
