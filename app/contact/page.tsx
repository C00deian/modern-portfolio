'use client';

import Link from 'next/link';
import { Mail, MessageCircle, User, Phone, ArrowLeft, LocateIcon, LocateFixedIcon, LocationEditIcon } from 'lucide-react';
import { FaPhone } from 'react-icons/fa';

export default function Contact() {
  // Details update karein
  const myNumber = "6393654550";
  const myEmail = "ritik.me010@gmail.com";
  const whatsappMsg = encodeURIComponent("Hello Ritik, I saw your portfolio and wanted to connect!");

  return (
    <main className="min-h-screen bg-black text-white font-primary selection:bg-[#E64217]/30">
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-24 space-y-12 md:space-y-16">

        {/* Back Button */}
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300"
        >
          <div className="p-2 rounded-full border border-white/10 group-hover:border-[#E64217] group-hover:bg-[#E64217]/10 transition-all">
            <ArrowLeft size={18} />
          </div>
          <span className="text-sm uppercase tracking-widest font-medium">Back to Home</span>
        </Link>

        <header>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Let's <span className="text-[#E64217]">Connect.</span>
          </h1>
          <p className="text-gray-400 text-md md:text-md max-w-xl leading-relaxed">
          Looking for a full-time position where I can contribute and grow, while also taking on exciting freelance work. If you think my skill set matches your needs, I’d love to hear from you. Let’s make it happen!
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact Info Cards */}
          <div className="space-y-4">
            {/* Name */}
            <div className="flex items-center gap-5 p-6 rounded-4xl bg-white/5 border border-white/10">
              <div className="bg-[#E64217]/20 p-4 rounded-2xl">
                <User className="text-[#E64217]" size={24} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-tighter text-gray-500 font-bold mb-1">Full Name</p>
                <p className="text-lg font-medium">Ritik Kumar</p>
              </div>
            </div>
               <div className="flex items-center gap-5 p-6 rounded-4xl bg-white/5 border border-white/10">
              <div className="bg-[#E64217]/20 p-4 rounded-2xl">
                <FaPhone className="text-[#E64217]" size={24} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-tighter text-gray-500 font-bold mb-1">Contact</p>
                <p className="text-lg font-medium">+91 6393654550</p>
              </div>
            </div>

            {/* Email - Clickable */}
            <a
              href={`mailto:${myEmail}`}
              className="flex items-center gap-5 p-6 rounded-4xl bg-white/5 border border-white/10 hover:border-[#E64217]/40 transition-all group"
            >
              <div className="bg-[#E64217]/20 p-4 rounded-2xl group-hover:scale-110 transition-transform">
                <Mail className="text-[#E64217]" size={24} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-tighter text-gray-500 font-bold mb-1">Email Address</p>
                <p className="text-lg font-medium group-hover:text-[#E64217] transition-colors">{myEmail}</p>
              </div>
            </a>

            {/* Phone */}
            <div className="flex items-center gap-5 p-6 rounded-4xl bg-white/5 border border-white/10">
              <div className="bg-[#E64217]/20 p-4 rounded-2xl">
                <LocateFixedIcon className="text-[#E64217]" size={24} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-tighter text-gray-500 font-bold mb-1">Location</p>
                <p className="text-lg font-medium">Nangloi, New Delhi</p>
              </div>
            </div>
          </div>

          {/* WhatsApp Direct Action */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-linear-to-r from-[#25D366] to-[#E64217] rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative flex flex-col justify-center items-center p-10 h-full rounded-[2.5rem] bg-[#0a0a0a] border border-white/10 text-center">
              <div className="mb-6 relative">
                <MessageCircle size={80} className="text-[#25D366] relative z-10" />
                <div className="absolute inset-0 bg-[#25D366] blur-2xl opacity-20 animate-pulse"></div>
              </div>

              <h3 className="text-2xl font-bold mb-3">Quick Chat?</h3>
              <p className="text-gray-400 mb-8 text-sm">Tap the button below to start a conversation on WhatsApp.</p>

              <a
                href={`https://wa.me/${myNumber}?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-[#25D366] text-black font-extrabold rounded-2xl hover:scale-[1.03] active:scale-95 transition-all duration-300"
              >
                Let's Talk on WhatsApp
                <MessageCircle size={22} />
              </a>
            </div>
          </div>

        </div>

        {/* Simple Footer Text */}
        <p className="text-center text-gray-600 text-sm tracking-widest uppercase">
          © 2026 Ritik Kumar • Coding with Passion
        </p>
      </div>
    </main>
  );
}
