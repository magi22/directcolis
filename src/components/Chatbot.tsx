import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, ChevronRight, Headset } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const WHATSAPP_NUMBER = '221785421733';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Bonjour%20Direct%20Colis%2C%20je%20souhaite%20parler%20%C3%A0%20un%20Charg%C3%A9%20de%20client%C3%A8le.`;

interface Message {
  id: number;
  from: 'bot' | 'user';
  text: string;
  isLink?: boolean;
  linkUrl?: string;
  linkLabel?: string;
}

const FAQ: { q: string; a: string; linkUrl?: string; linkLabel?: string }[] = [
  {
    q: 'Comment suivre mon colis ?',
    a: 'Rendez-vous dans la section "Suivi" en haut de la page. Entrez votre numéro de suivi pour consulter le statut en temps réel.',
  },
  {
    q: 'Quelles zones livrez-vous ?',
    a: 'Direct Colis couvre les principaux axes du Sénégal : Dakar, Thiès, Mbour, Saint-Louis, Kaolack et bien d\'autres régions. Contactez-nous pour une zone spécifique.',
  },
  {
    q: 'Quels sont vos délais ?',
    a: 'Les livraisons intra-Dakar sont effectuées sous 24h. Pour les autres régions, le délai est de 24 à 72h selon la zone.',
  },
  {
    q: 'Comment créer un envoi ?',
    a: 'Contactez-nous via le formulaire ou WhatsApp. Notre équipe vous proposera un devis adapté et vous accompagnera dans la mise en place du service.',
  },
  {
    q: 'Comment est confirmée la livraison ?',
    a: 'Chaque livraison est validée par un code OTP, une photo et/ou une signature électronique du destinataire. Une preuve géolocalisée est générée.',
  },
  {
    q: 'Parler à un Chargé de clientèle',
    a: 'Je vous redirige vers un Chargé de clientèle sur WhatsApp.',
    linkUrl: WHATSAPP_URL,
    linkLabel: 'Ouvrir WhatsApp →',
  },
];

export default function Chatbot() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      from: 'bot',
      text: 'Bonjour 👋 Je suis l\'assistant Direct Colis. Comment puis-je vous aider ?',
    },
  ]);
  const [showQuestions, setShowQuestions] = useState(true);
  const [hasGreeted, setHasGreeted] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 60_000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleQuestion = (faq: typeof FAQ[0]) => {
    const userMsg: Message = {
      id: Date.now(),
      from: 'user',
      text: faq.q,
    };
    const botMsg: Message = {
      id: Date.now() + 1,
      from: 'bot',
      text: faq.a,
      isLink: !!faq.linkUrl,
      linkUrl: faq.linkUrl,
      linkLabel: faq.linkLabel,
    };
    setMessages((prev) => [...prev, userMsg, botMsg]);
    setShowQuestions(false);
    setTimeout(() => setShowQuestions(true), 400);
  };

  const handleOpen = () => {
    setOpen(true);
    if (!hasGreeted) setHasGreeted(true);
  };

  return (
    <>
      {/* Floating button — shown after 60s */}
      <AnimatePresence>
        {visible && (
          <motion.button
            onClick={() => (open ? setOpen(false) : handleOpen())}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-6 right-6 z-[200] w-14 h-14 rounded-full bg-red-600 text-white shadow-[0_0_24px_rgba(220,38,38,0.5)] flex items-center justify-center"
            aria-label="Ouvrir le chat"
          >
            <AnimatePresence mode="wait">
              {open ? (
                <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div key="chat" initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.7, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <MessageSquare className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
            {!open && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse" />
            )}
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 right-6 z-[199] w-[340px] max-w-[calc(100vw-2rem)] rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.2)] flex flex-col"
            style={{ maxHeight: '75vh' }}
          >
            {/* Header */}
            <div className="bg-blue-950 px-5 py-4 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-red-600 flex items-center justify-center shadow-[0_0_12px_rgba(220,38,38,0.5)]">
                <MessageSquare className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="font-bold text-white text-sm">Assistant Direct Colis</p>
                <p className="text-green-400 text-xs flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block"></span>
                  En ligne
                </p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto bg-white px-4 py-4 space-y-3" style={{ maxHeight: '42vh' }}>
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[82%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      msg.from === 'user'
                        ? 'bg-red-600 text-white rounded-br-sm'
                        : 'bg-slate-100 text-slate-800 rounded-bl-sm'
                    }`}
                  >
                    {msg.text}
                    {msg.isLink && msg.linkUrl && (
                      <a
                        href={msg.linkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 flex items-center gap-1.5 text-green-600 font-bold hover:underline text-xs"
                      >
                        <Headset className="w-3.5 h-3.5" />
                        {msg.linkLabel}
                      </a>
                    )}
                  </div>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Quick questions */}
            <div className="bg-slate-50 border-t border-slate-100 px-4 py-3">
              <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-2">Questions fréquentes</p>
              <div className="space-y-1.5 overflow-y-auto" style={{ maxHeight: '180px' }}>
                {FAQ.map((faq, i) => (
                  <button
                    key={i}
                    onClick={() => handleQuestion(faq)}
                    className={`w-full text-left text-sm px-3 py-2 rounded-xl flex items-center justify-between gap-2 transition-all duration-200 font-medium group ${
                      faq.linkUrl
                        ? 'bg-green-50 text-green-700 hover:bg-green-100 border border-green-100'
                        : 'bg-white text-slate-700 hover:bg-blue-950 hover:text-white border border-slate-100'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {faq.linkUrl && <Headset className="w-3.5 h-3.5 shrink-0" />}
                      {faq.q}
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 shrink-0 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
