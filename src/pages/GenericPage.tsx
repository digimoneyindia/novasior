import { useParams, useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, FileText, RotateCcw, Mail, ArrowRight, Clock } from 'lucide-react';

interface LegalDoc {
  title: string;
  subtitle: string;
  lastUpdated: string;
  icon: typeof ShieldCheck;
  sections: {
    heading: string;
    linesCount: number;
  }[];
}

const legalDocs: Record<string, LegalDoc> = {
  privacy: {
    title: 'Privacy Policy',
    subtitle: 'Official Privacy Policy documentation template.',
    lastUpdated: 'August 10, 2026',
    icon: ShieldCheck,
    sections: [
      {
        heading: '1. Information Collection',
        linesCount: 4
      },
      {
        heading: '2. Data Usage & Processing',
        linesCount: 4
      },
      {
        heading: '3. Data Security & Storage',
        linesCount: 3
      },
      {
        heading: '4. Cookies & Local Storage',
        linesCount: 3
      },
      {
        heading: '5. User Rights & Contact',
        linesCount: 3
      }
    ]
  },
  terms: {
    title: 'Terms of Service',
    subtitle: 'Official Terms of Service documentation template.',
    lastUpdated: 'August 10, 2026',
    icon: FileText,
    sections: [
      {
        heading: '1. Acceptance of Terms',
        linesCount: 3
      },
      {
        heading: '2. Digital Product Fulfillment',
        linesCount: 4
      },
      {
        heading: '3. Intellectual Property Rights',
        linesCount: 3
      },
      {
        heading: '4. Prohibited Activities',
        linesCount: 4
      },
      {
        heading: '5. Limitation of Liability',
        linesCount: 3
      }
    ]
  },
  refund: {
    title: 'Refund Policy',
    subtitle: 'Official Refund Policy documentation template.',
    lastUpdated: 'August 10, 2026',
    icon: RotateCcw,
    sections: [
      {
        heading: '1. Digital Goods Return Terms',
        linesCount: 3
      },
      {
        heading: '2. Technical Resolution & File Delivery',
        linesCount: 3
      },
      {
        heading: '3. Duplicate Order Adjustments',
        linesCount: 3
      },
      {
        heading: '4. Billing Inquiries',
        linesCount: 3
      }
    ]
  }
};

export default function GenericPage() {
  const { page } = useParams<{ page: string }>();
  const location = useLocation();
  const pathKey = page || location.pathname.replace(/^\//, '');
  const activeKey = legalDocs[pathKey] ? pathKey : 'privacy';
  const doc = legalDocs[activeKey];
  const Icon = doc.icon;

  const tabs = [
    { key: 'privacy', label: 'Privacy Policy' },
    { key: 'terms', label: 'Terms of Service' },
    { key: 'refund', label: 'Refund Policy' }
  ];

  return (
    <div className="w-full bg-transparent text-brand-text min-h-screen pt-32 pb-24 font-sans">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Navigation Tabs */}
        <div className="flex items-center justify-center gap-2 md:gap-3 flex-wrap mb-12">
          {tabs.map((tab) => {
            const isActive = tab.key === activeKey;
            return (
              <Link
                key={tab.key}
                to={`/${tab.key}`}
                className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-bold tracking-wider uppercase transition-all duration-200 border ${
                  isActive
                    ? 'bg-brand-text text-white border-brand-text shadow-sm'
                    : 'bg-white/80 backdrop-blur-sm text-brand-text-muted border-brand-border hover:border-brand-text hover:text-brand-text'
                }`}
              >
                {tab.label}
              </Link>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeKey}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="bg-white/80 backdrop-blur-sm border border-brand-border rounded-3xl p-8 md:p-12 mb-10 shadow-sm"
          >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-brand-border mb-10">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/90 border border-brand-border rounded-2xl text-brand-text shrink-0">
                <Icon size={28} />
              </div>
              <div>
                <h1 className="text-3xl md:text-5xl font-serif font-bold uppercase tracking-tight text-brand-text mb-2">
                  {doc.title}
                </h1>
                <p className="text-brand-text-muted text-sm md:text-base font-normal">
                  {doc.subtitle}
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 border border-brand-border rounded-full text-xs font-semibold text-brand-text-muted shrink-0 self-start md:self-auto">
              <Clock size={14} className="text-brand-accent" />
              <span>Last Updated: {doc.lastUpdated}</span>
            </div>
          </div>

          {/* Document Content Sections with Clean Single Fillable Lines */}
          <div className="space-y-10">
            {doc.sections.map((section, idx) => (
              <div key={idx} className="space-y-4">
                {/* Section Title with Fillable Line */}
                <div className="flex items-center gap-3">
                  <span className="text-base md:text-lg font-serif font-bold text-brand-text uppercase tracking-wide shrink-0">
                    {idx + 1}.
                  </span>
                  <div className="grow border-b-2 border-neutral-800 h-6"></div>
                </div>

                {/* Section Body Fillable Lines (1 clean line per row) */}
                <div className="space-y-3 pt-1">
                  {Array.from({ length: section.linesCount }).map((_, lineIdx) => (
                    <div 
                      key={lineIdx} 
                      className="w-full border-b border-neutral-300 h-6 transition-colors hover:border-neutral-500" 
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Contact Help Bar */}
          <div className="mt-14 pt-8 border-t border-brand-border flex flex-col sm:flex-row items-center justify-between gap-4 bg-white/60 border border-brand-border/60 rounded-2xl p-6">
            <div>
              <h3 className="font-bold text-sm uppercase text-brand-text mb-1">Need help with {doc.title}?</h3>
              <p className="text-xs text-brand-text-muted">Our support team is available to assist you with any questions.</p>
            </div>
            <Link
              to="/support"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-text text-white font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-neutral-800 transition-colors shrink-0"
            >
              <Mail size={14} />
              <span>Contact Support</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </motion.div>
      </AnimatePresence>
      </div>
    </div>
  );
}

