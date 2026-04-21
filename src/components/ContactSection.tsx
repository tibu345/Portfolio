import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin } from 'lucide-react';
import { cn } from '../lib/utils';
import { CONTACT_INFO } from '../constants';

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSendMessage = async () => {
    const { name, email, subject, message } = formData;
    if (!name || !email || !message) {
      alert("Please fill in all required fields.");
      return;
    }
    
    setIsSubmitting(true);

    const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfdIO3ner8iKOtF68KoANxdT6F7vWgYRhmmDkrN6zKOCHc3xw/formResponse";
    
    const entryIds = {
      name: "entry.985518816",
      email: "entry.1289129577",
      subject: "entry.378830934",
      message: "entry.1255744465"
    };

    const formBody = new URLSearchParams();
    formBody.append(entryIds.name, name);
    formBody.append(entryIds.email, email);
    formBody.append(entryIds.subject, subject);
    formBody.append(entryIds.message, message);

    try {
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: formBody.toString()
      });
      
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error("Submission error:", error);
      alert("Submission failed. Please check your connection or contact me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-black">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[200px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-primary font-serif italic text-xs uppercase tracking-[0.4em] font-bold mb-6 block">Collaboration</span>
          <h2 className="text-4xl md:text-7xl font-display font-bold max-w-4xl mx-auto leading-tight">
            Ready to spark a <span className="text-primary italic font-serif">conversation?</span>
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto glass p-10 md:p-20 rounded-[3rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] border-white/5">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-muted-foreground mb-10 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-white/5 text-primary">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Email</p>
                    <p className="font-medium">{CONTACT_INFO.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-white/5 text-primary">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">LinkedIn</p>
                    <p className="font-medium">{CONTACT_INFO.linkedin}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Name</label>
                  <input 
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    placeholder="John Doe" 
                    className="w-full bg-white/5 border border-white/10 h-12 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors text-white text-sm" 
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-email" className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Email</label>
                  <input 
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    placeholder="john@example.com" 
                    className="w-full bg-white/5 border border-white/10 h-12 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors text-white text-sm" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-subject" className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Subject</label>
                <input 
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleFormChange}
                  placeholder="Project Inquiry" 
                  className="w-full bg-white/5 border border-white/10 h-12 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors text-white text-sm" 
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-message" className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Message</label>
                <textarea 
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  placeholder="Tell me about your project..." 
                  className="w-full bg-white/5 border border-white/10 min-h-[150px] rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors text-white text-sm resize-none" 
                />
              </div>
              <button 
                onClick={handleSendMessage}
                disabled={isSubmitting}
                className={cn(
                  "w-full h-16 rounded-[1.5rem] font-bold text-xl shadow-[0_0_20px_rgba(0,242,255,0.3)] transition-all duration-300 flex items-center justify-center",
                  isSubmitted 
                    ? "bg-green-500 hover:bg-green-600 text-white shadow-green-500/20" 
                    : "bg-primary text-black hover:bg-white shadow-[0_10px_20px_-10px_rgba(0,242,255,1)]"
                )}
              >
                {isSubmitting ? "Sending..." : isSubmitted ? "Message Sent!" : "Send Message"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
