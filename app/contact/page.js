import { Instagram, Facebook, Youtube, Linkedin, Mail } from 'lucide-react';
import ContactForm from './ContactForm';

export const metadata = { title: 'Contact — ArtisanAI' };

const emails = [
  { label: 'Customer Support', value: 'support@artisanai.com' },
  { label: 'Artisan Support', value: 'artisans@artisanai.com' },
  { label: 'Business', value: 'business@artisanai.com' },
];

export default function ContactPage() {
  return (
    <div className="container-page py-16 lg:py-20">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <p className="text-terracotta text-sm mb-3">Let's Connect</p>
          <h1 className="font-display text-4xl text-brown leading-tight text-balance">
            Have a question?
            <br />
            We're here to help.
          </h1>

          <div className="mt-10 space-y-5">
            {emails.map((e) => (
              <div key={e.value} className="flex items-center gap-3">
                <Mail size={17} className="text-terracotta" strokeWidth={1.6} />
                <div>
                  <p className="text-sm text-brown/50">{e.label}</p>
                  <a href={`mailto:${e.value}`} className="text-brown hover:text-terracotta transition-colors">{e.value}</a>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-3 mt-10">
            {[Instagram, Facebook, Linkedin, Youtube].map((Icon, i) => (
              <a key={i} href="#" aria-label="Social link" className="w-10 h-10 rounded-full border hairline flex items-center justify-center hover:border-terracotta hover:text-terracotta transition-colors">
                <Icon size={16} strokeWidth={1.6} />
              </a>
            ))}
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
