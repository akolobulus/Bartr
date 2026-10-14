'use client';

import { ArrowRight, Check, ChevronDown, ExternalLink, User, Wrench, X } from 'lucide-react';
import { useEffect, useId, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

const CUSTOMER_APP_URL = 'https://bartr-web-seven.vercel.app/';
const VENDOR_APP_URL = 'https://github.com/akolobulus/Bartr-Vendors-App';

type LaunchModalProps = {
  onClose: () => void;
};

export function LaunchModal({ onClose }: LaunchModalProps) {
  const [vendorOpen, setVendorOpen] = useState(false);
  const titleId = useId();
  const detailsId = useId();
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    panelRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        ref={panelRef}
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" className="modal-close" onClick={onClose} aria-label="Close dialog">
          <X size={18} aria-hidden="true" />
        </button>

        <header className="modal-head">
          <h2 id={titleId}>Choose your profile</h2>
          <p>Pick how you want to use Bartr on the web.</p>
        </header>

        <div className="options">
          <a className="option" href={CUSTOMER_APP_URL} target="_blank" rel="noopener noreferrer">
            <span className="option-icon option-icon--customer">
              <User size={22} aria-hidden="true" />
            </span>
            <span className="option-tag">For customers</span>
            <span className="option-title">I need a service</span>
            <span className="option-body">
              Find trusted technicians and artisans nearby. Describe the job by voice or text, and get matched in
              minutes.
            </span>
            <span className="option-points">
              <span>
                <Check size={16} aria-hidden="true" />
                Ranked local matches
              </span>
              <span>
                <Check size={16} aria-hidden="true" />
                Fair price guidance and chat
              </span>
            </span>
            <span className="option-cta">
              Launch customer app <ArrowRight size={16} aria-hidden="true" />
            </span>
          </a>

          <div className="option">
            <span className="option-icon option-icon--vendor">
              <Wrench size={22} aria-hidden="true" />
            </span>
            <span className="option-tag">For artisans and vendors</span>
            <span className="option-title">I provide services</span>
            <span className="option-body">
              Receive matched jobs near Computer Village and Lagos, accept requests, build your reputation, and get
              paid.
            </span>
            <span className="option-points">
              <span>
                <Check size={16} aria-hidden="true" />
                Job leads without ad spend
              </span>
              <span>
                <Check size={16} aria-hidden="true" />
                Star ratings from completed jobs
              </span>
            </span>
            <button
              type="button"
              className="option-cta"
              aria-expanded={vendorOpen}
              aria-controls={detailsId}
              onClick={() => setVendorOpen((value) => !value)}
            >
              {vendorOpen ? 'Hide vendor details' : 'See vendor details'}
              <ChevronDown size={16} aria-hidden="true" className={cn(vendorOpen && 'is-rotated')} />
            </button>
          </div>
        </div>

        <div id={detailsId} className="vendor-details" hidden={!vendorOpen}>
          <p>
            <strong>Vendor pilot onboarding is in progress.</strong> We are piloting with technicians and artisans in
            Lagos. Open the vendor portal prototype, or contact the pilot team.
          </p>
          <div className="vendor-links">
            <a className="btn btn-sm btn-ghost" href={VENDOR_APP_URL} target="_blank" rel="noopener noreferrer">
              Open vendor portal <ExternalLink size={14} aria-hidden="true" />
            </a>
            <a className="btn btn-sm btn-ghost" href="/team">
              Contact pilot team
            </a>
          </div>
        </div>

        <p className="modal-foot">Runs in your browser. No download required.</p>
      </div>
    </div>
  );
}
