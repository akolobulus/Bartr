'use client';

import React, { useEffect, useState } from 'react';
import {
  User,
  Wrench,
  X,
  ExternalLink,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  ChevronRight,
  Smartphone,
  CheckCircle2,
} from 'lucide-react';

const CUSTOMER_APP_URL = 'https://bartr-web-seven.vercel.app/';
const VENDOR_APP_URL = 'https://github.com/akolobulus/Bartr-Vendors-App';

export default function LaunchModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [vendorExpanded, setVendorExpanded] = useState(false);

  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const trigger = target.closest<HTMLElement>('.launch-web-trigger, [data-action="launch-web"]');
      if (trigger) {
        e.preventDefault();
        e.stopPropagation();
        setVendorExpanded(false);
        setIsOpen(true);
      }
    };

    const handleCustomOpen = () => {
      setVendorExpanded(false);
      setIsOpen(true);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleDocumentClick);
    window.addEventListener('open-bartr-launch-modal', handleCustomOpen);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
      window.removeEventListener('open-bartr-launch-modal', handleCustomOpen);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCustomerLaunch = () => {
    window.open(CUSTOMER_APP_URL, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  const handleVendorLaunch = () => {
    window.open(VENDOR_APP_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className={`bartr-modal-backdrop ${isOpen ? 'is-open' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="bartr-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setIsOpen(false);
        }
      }}
    >
      <div className="bartr-modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          type="button"
          className="bartr-modal-close-btn"
          onClick={() => setIsOpen(false)}
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="bartr-modal-header">
          <div className="bartr-modal-kicker">
            <Sparkles className="w-4 h-4 text-[#0067f5]" />
            <span>Bartr Web Experience</span>
          </div>
          <h2 id="bartr-modal-title" className="bartr-modal-title">
            Choose your profile
          </h2>
          <p className="bartr-modal-subtitle">
            Select how you would like to use Bartr Web to get started right away.
          </p>
        </div>

        {/* Options Grid */}
        <div className="bartr-modal-options">
          {/* Customer Choice Card */}
          <div
            className="bartr-role-card bartr-role-card--customer group"
            onClick={handleCustomerLaunch}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleCustomerLaunch();
              }
            }}
          >
            <div>
              <div className="bartr-role-icon-wrap bartr-role-icon-wrap--customer">
                <User className="w-6 h-6" />
              </div>
              <span className="bartr-role-badge">For Customers</span>
              <h3 className="bartr-role-name">I Need a Service</h3>
              <p className="bartr-role-desc">
                Find trusted technicians and artisans nearby. Post requests by voice or text and match in minutes.
              </p>
              <ul className="bartr-role-features">
                <li>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0067f5] shrink-0" />
                  <span>Ranked local artisan matches</span>
                </li>
                <li>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0067f5] shrink-0" />
                  <span>Fair price guidance & real-time chat</span>
                </li>
              </ul>
            </div>

            <a
              href={CUSTOMER_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bartr-role-action-btn bartr-role-action-btn--customer"
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
              }}
            >
              <span>Launch Customer App</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Vendor Choice Card */}
          <div
            className={`bartr-role-card bartr-role-card--vendor group ${
              vendorExpanded ? 'is-selected' : ''
            }`}
            onClick={() => setVendorExpanded((prev) => !prev)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setVendorExpanded((prev) => !prev);
              }
            }}
          >
            <div>
              <div className="bartr-role-icon-wrap bartr-role-icon-wrap--vendor">
                <Wrench className="w-6 h-6" />
              </div>
              <span className="bartr-role-badge">For Artisans & Vendors</span>
              <h3 className="bartr-role-name">I Provide Services</h3>
              <p className="bartr-role-desc">
                Receive matched jobs near Computer Village & Lagos, accept requests, build your reputation, and earn.
              </p>
              <ul className="bartr-role-features">
                <li>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0a2e65] shrink-0" />
                  <span>Direct job leads without ad waste</span>
                </li>
                <li>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0a2e65] shrink-0" />
                  <span>Star ratings & verified skill badge</span>
                </li>
              </ul>
            </div>

            <button
              type="button"
              className="bartr-role-action-btn bartr-role-action-btn--vendor"
              onClick={(e) => {
                e.stopPropagation();
                setVendorExpanded((prev) => !prev);
              }}
            >
              <span>{vendorExpanded ? 'Hide Vendor Details' : 'Select Vendor'}</span>
              <ChevronRight
                className={`w-4 h-4 transition-transform duration-200 ${
                  vendorExpanded ? 'rotate-90' : ''
                }`}
              />
            </button>
          </div>
        </div>

        {/* Vendor Expanded Info */}
        {vendorExpanded && (
          <div className="bartr-modal-vendor-detail animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#0a2e65] mt-0.5 shrink-0" />
              <div className="space-y-1">
                <p className="font-semibold text-[#0a2e65] text-sm">
                  Vendor Pilot Onboarding in Progress
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We are actively piloting with technicians and artisans in Lagos. You can explore the interactive Vendor Portal prototype or connect with our team.
                </p>
                <div className="pt-2 flex flex-wrap gap-2">
                  <a
                    href={VENDOR_APP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-[#0a2e65] rounded-lg hover:bg-[#17243c] transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleVendorLaunch();
                    }}
                  >
                    <span>Launch Vendor Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="/team"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors"
                  >
                    Contact Pilot Team
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modal Footer */}
        <div className="bartr-modal-footer">
          <div className="bartr-modal-footer-note">
            <Smartphone className="w-4 h-4 text-slate-400" />
            <span>Runs directly in your mobile or desktop browser</span>
          </div>
          <span className="text-xs text-slate-400">No download required</span>
        </div>
      </div>
    </div>
  );
}
