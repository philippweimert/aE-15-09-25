import React from "react";
import { Button } from "./ui/button";
import { CheckCircle, Clock, Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const quickBenefits = [
    { icon: &lt;CheckCircle className="w-5 h-5" /&gt;, text: "100% digitale Verwaltung" },
    { icon: &lt;Clock className="w-5 h-5" /&gt;, text: "Vollautomatisierte Prozesse" },
    { icon: &lt;Shield className="w-5 h-5" /&gt;, text: "DSGVO-konform &amp; rechtssicher" }
  ];

  return (
    &lt;section className="relative bg-gradient-to-b from-acencia via-acencia via-acencia to-acencia-light min-h-[80vh] flex items-center overflow-hidden"&gt;
      {/* Subtle geometric background */}
      &lt;div className="absolute inset-0"&gt;
        &lt;div className="absolute inset-0 opacity-[0.07]"&gt;
          &lt;svg className="absolute top-20 right-0 w-96 h-96 animate-pulse" viewBox="0 0 400 400"&gt;
            &lt;polygon points="200,50 350,150 350,250 200,350 50,250 50,150" 
                     fill="none" stroke="white" strokeWidth="2"/&gt;
            &lt;polygon points="150,100 250,100 300,173 250,247 150,247 100,173" 
                     fill="none" stroke="white" strokeWidth="1"/&gt;
          &lt;/svg&gt;
          &lt;svg className="absolute bottom-20 left-0 w-64 h-64 animate-bounce" viewBox="0 0 300 300" style={{animationDuration: '3s'}}&gt;
            &lt;polygon points="150,30 270,120 270,180 150,270 30,180 30,120" 
                     fill="none" stroke="white" strokeWidth="1"/&gt;
          &lt;/svg&gt;
        &lt;/div&gt;
        &lt;div className="absolute top-1/2 right-10 opacity-[0.08]"&gt;
          &lt;svg className="w-32 h-32" viewBox="0 0 100 100"&gt;
            &lt;polygon points="50,5 85,25 85,75 50,95 15,75 15,25" 
                     fill="currentColor" className="text-acencia-blue animate-float" /&gt;
          &lt;/svg&gt;
        &lt;/div&gt;
      &lt;/div&gt;

      &lt;div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"&gt;
        &lt;div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"&gt;
          {/* Left content */}
          &lt;div className="text-left animate-fade-in"&gt;
            &lt;div className="mb-8"&gt;
              &lt;span className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300 inline-flex items-center space-x-2"&gt;
                &lt;span className="w-2 h-2 bg-white rounded-full animate-pulse"&gt;&lt;/span&gt;
                &lt;span&gt;Digitale bAV-Lösung&lt;/span&gt;
              &lt;/span&gt;
            &lt;/div&gt;
            
            &lt;h1 className="text-3xl lg:text-5xl font-bold text-white mb-8 leading-tight font-heading"&gt;
              Wir machen&lt;br /&gt;
              &lt;span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent animate-gradient-x"&gt;
                bAV einfach!
              &lt;/span&gt;
            &lt;/h1&gt;
            
            &lt;p className="text-lg text-slate-200 mb-8 max-w-lg leading-relaxed font-body"&gt;
              Entlasten Sie Ihr HR-Team mit unserer vollautomatisierten, 
              digitalen All-in-One-Plattform für die betriebliche Altersvorsorge.
            &lt;/p&gt;
            
            {/* Benefits */}
            &lt;div className="space-y-4 mb-10"&gt;
              {quickBenefits.map((benefit, index) =&gt; (
                &lt;div 
                  key={index} 
                  className="flex items-center space-x-3 group hover:translate-x-2 transition-all duration-300"
                  style={{animationDelay: `${index * 200}ms`}}
                &gt;
                  &lt;div className="text-orange-400 group-hover:text-orange-300 transition-colors duration-300 group-hover:scale-110 transform"&gt;
                    {benefit.icon}
                  &lt;/div&gt;
                  &lt;span className="text-slate-200 font-medium group-hover:text-white transition-colors duration-300"&gt;
                    {benefit.text}
                  &lt;/span&gt;
                &lt;/div&gt;
              ))}
            &lt;/div&gt;

            &lt;div className="flex flex-col sm:flex-row gap-4"&gt;
              &lt;Button 
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg group"
                onClick={() =&gt; window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
              &gt;
                &lt;span&gt;Jetzt starten&lt;/span&gt;
                &lt;ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" /&gt;
              &lt;/Button&gt;
            &lt;/div&gt;
          &lt;/div&gt;

          {/* Right content - Unsere Lösungen (replaces video) */}
          &lt;div className="flex justify-center lg:justify-end"&gt;
            &lt;div className="w-full max-w-lg"&gt;
              &lt;div className="mb-4"&gt;
                &lt;span className="text-slate-300 text-sm tracking-wide uppercase"&gt;Unsere Lösungen&lt;/span&gt;
              &lt;/div&gt;

              &lt;div className="space-y-4"&gt;
                {/* bAV */}
                &lt;Link to="/die-bav" className="block group focus:outline-none"&gt;
                  &lt;div className="relative rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm p-5 hover:border-orange-400/60 transition-all duration-300 hover:-translate-y-0.5"&gt;
                    &lt;div className="flex items-start gap-4"&gt;
                      &lt;div className="shrink-0 w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center"&gt;
                        &lt;img src="/bav-icon.png" alt="bAV" className="w-7 h-7" /&gt;
                      &lt;/div&gt;
                      &lt;div className="flex-1"&gt;
                        &lt;h3 className="text-white font-semibold text-lg mb-1"&gt;Betriebliche Altersvorsorge (bAV)&lt;/h3&gt;
                        &lt;p className="text-slate-300 text-sm mb-3"&gt;Digitale Verwaltung und Prozesse – rechtskonform und einfach.&lt;/p&gt;
                        &lt;span className="inline-flex items-center text-orange-300 font-medium group-hover:text-orange-200 transition-colors"&gt;
                          Mehr erfahren &lt;ArrowRight className="w-4 h-4 ml-1 translate-x-0 group-hover:translate-x-0.5 transition-transform" /&gt;
                        &lt;/span&gt;
                      &lt;/div&gt;
                    &lt;/div&gt;
                  &lt;/div&gt;
                &lt;/Link&gt;

                {/* bKV */}
                &lt;Link to="/bkv" className="block group focus:outline-none"&gt;
                  &lt;div className="relative rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm p-5 hover:border-orange-400/60 transition-all duration-300 hover:-translate-y-0.5"&gt;
                    &lt;div className="flex items-start gap-4"&gt;
                      &lt;div className="shrink-0 w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center"&gt;
                        &lt;img src="/bkv-icon.png" alt="bKV" className="w-7 h-7" /&gt;
                      &lt;/div&gt;
                      &lt;div className="flex-1"&gt;
                        &lt;h3 className="text-white font-semibold text-lg mb-1"&gt;Betriebliche Krankenversicherung (bKV)&lt;/h3&gt;
                        &lt;p className="text-slate-300 text-sm mb-3"&gt;Mitarbeiter binden mit smarten Gesundheitsleistungen.&lt;/p&gt;
                        &lt;span className="inline-flex items-center text-orange-300 font-medium group-hover:text-orange-2 00 transition-colors"&gt;
                          Mehr erfahren &lt;ArrowRight className="w-4 h-4 ml-1 translate-x-0 group-hover:translate-x-0.5 transition-transform" /&gt;
                        &lt;/span&gt;
                      &lt;/div&gt;
                    &lt;/div&gt;
                  &lt;/div&gt;
                &lt;/Link&gt;

                {/* bUV */}
                &lt;Link to="/buv" className="block group focus:outline-none"&gt;
                  &lt;div className="relative rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm p-5 hover:border-orange-400/60 transition-all duration-300 hover:-translate-y-0.5"&gt;
                    &lt;div className="flex items-start gap-4"&gt;
                      &lt;div className="shrink-0 w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center"&gt;
                        &lt;img src="/buv-icon.png" alt="bUV" className="w-7 h-7" /&gt;
                      &lt;/div&gt;
                      &lt;div className="flex-1"&gt;
                        &lt;h3 className="text-white font-semibold text-lg mb-1"&gt;Berufsunfähigkeitsvorsorge (bUV)&lt;/h3&gt;
                        &lt;p className="text-slate-300 text-sm mb-3"&gt;Absicherung für Mitarbeitende – transparent und effizient.&lt;/p&gt;
                        &lt;span className="inline-flex items-center text-orange-300 font-medium group-hover:text-orange-200 transition-colors"&gt;
                          Mehr erfahren &lt;ArrowRight className="w-4 h-4 ml-1 translate-x-0 group-hover:translate-x-0.5 transition-transform" /&gt;
                        &lt;/span&gt;
                      &lt;/div&gt;
                    &lt;/div&gt;
                  &lt;/div&gt;
                &lt;/Link&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;

        {/* Scroll indicator */}
        &lt;div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"&gt;
          &lt;div className="flex flex-col items-center text-slate-400 hover:text-orange-400 transition-colors duration-300 cursor-pointer"&gt;
            &lt;span className="text-sm font-medium mb-2"&gt;Mehr erfahren&lt;/span&gt;
            &lt;div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center"&gt;
              &lt;div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-bounce"&gt;&lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;

      &lt;div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-acencia-light to-transparent"&gt;&lt;/div&gt;
    &lt;/section&gt;
  );
};

export default HeroSection;