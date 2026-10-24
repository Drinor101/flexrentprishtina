import { useState } from 'react';
import { CheckCircle2, ChevronDown } from 'lucide-react';

interface BenefitsAccordionProps {
  benefits: string[];
}

// Each benefit reads "Title - Description"; the title stays visible and the description opens on click
function splitBenefit(text: string) {
  const separator = text.indexOf(' - ');
  if (separator === -1) return { title: text, description: '' };
  return { title: text.slice(0, separator), description: text.slice(separator + 3) };
}

function BenefitsAccordion({ benefits }: BenefitsAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <ul className="divide-y divide-white/10">
      {benefits.map((benefit, index) => {
        const { title, description } = splitBenefit(benefit);
        const isOpen = openIndex === index;
        const buttonId = `benefit-button-${index}`;
        const panelId = `benefit-panel-${index}`;

        return (
          <li key={index}>
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="group flex w-full items-center gap-3 py-3.5 text-left sm:gap-4"
              >
                <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-gold" aria-hidden="true" />
                <span
                  className={`flex-1 text-sm font-medium sm:text-base ${
                    isOpen ? 'text-gold-light' : 'text-bone group-hover:text-gold-light'
                  }`}
                >
                  {title}
                </span>
                <ChevronDown
                  className={`h-4 w-4 flex-shrink-0 text-gold/80 transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-[grid-template-rows,opacity,visibility] duration-300 ease-out motion-reduce:transition-none ${
                isOpen ? 'visible grid-rows-[1fr] opacity-100' : 'invisible grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <p className="pb-4 pl-8 pr-6 text-sm font-light leading-relaxed text-bone/70 sm:pl-9 sm:text-[15px]">
                  {description}
                </p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default BenefitsAccordion;
