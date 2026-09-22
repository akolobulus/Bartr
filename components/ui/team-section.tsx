import * as React from 'react';
import { cn } from '@/lib/utils';

export interface SocialLink {
  icon: React.ElementType;
  href: string;
}

export interface TeamMember {
  name: string;
  designation: string;
  imageSrc: string;
  socialLinks?: SocialLink[];
}

export interface TeamSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  members: TeamMember[];
  registerLink?: string;
  logo?: React.ReactNode;
  socialLinksMain?: SocialLink[];
}

export const TeamSection = React.forwardRef<HTMLDivElement, TeamSectionProps>(
  (
    { title, description, members, registerLink, logo, socialLinksMain, className, ...props },
    ref,
  ) => {
    return (
      <section
        ref={ref}
        className={cn('relative w-full overflow-hidden bg-white py-12 md:py-24 lg:py-32', className)}
        {...props}
      >
        <div className="container relative mx-auto grid items-center justify-center gap-8 px-4 text-center md:px-6">
          <div className="absolute inset-0 z-0 opacity-5">
            <svg className="h-full w-full" fill="none">
              <defs>
                <pattern id="grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M20 0L0 0 0 20" fill="none" stroke="#0a2e65" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="relative z-10 flex w-full flex-col items-center justify-between gap-4 md:flex-row md:items-start md:text-left lg:gap-8">
            <div className="grid gap-2 text-center md:text-left">
              <h1 className="text-4xl font-bold tracking-tighter text-slate-800 sm:text-5xl md:text-6xl">
                <span className="block text-xl font-medium text-[#0067f5] sm:text-2xl md:text-3xl">O U R</span>
                {title}
              </h1>
              <p className="max-w-[700px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {description}
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 md:items-end">
              {logo && <div className="text-2xl font-bold text-[#0a2e65]">{logo}</div>}
              {registerLink && (
                <a
                  href={registerLink}
                  className="inline-flex h-10 items-center justify-center rounded-full bg-[#0067f5] px-8 text-sm font-medium text-white shadow-[0_12px_24px_rgba(0,103,245,0.25)] transition-all duration-200 hover:bg-[#0055d4] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  REGISTER NOW
                </a>
              )}
            </div>
          </div>

          {socialLinksMain && socialLinksMain.length > 0 && (
            <div className="relative z-10 flex w-full items-center justify-center gap-4 py-4 md:justify-center">
              {socialLinksMain.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eaf4ff] text-[#0a2e65] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#dfeeff] hover:text-[#0067f5]"
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
              <span className="text-sm font-medium text-slate-500">akolobulus.dev</span>
            </div>
          )}

          <div className="relative z-10 mx-auto grid w-full max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12">
            {members.map((member, index) => (
              <div
                key={`${member.name}-${index}`}
                className="group relative flex flex-col items-center justify-end overflow-hidden rounded-[28px] border border-slate-200 bg-white p-6 text-center shadow-[0_18px_45px_rgba(17,24,39,0.08)] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(17,24,39,0.12)]"
                style={{
                  background:
                    index === 0
                      ? 'linear-gradient(180deg, rgba(0,103,245,0.08), rgba(255,255,255,1))'
                      : index === 1
                        ? 'linear-gradient(180deg, rgba(14,116,144,0.06), rgba(255,255,255,1))'
                        : 'linear-gradient(180deg, rgba(255,196,18,0.12), rgba(255,255,255,1))',
                  color: '#0f172a',
                }}
              >
                <div
                  className="absolute bottom-0 left-0 right-0 h-1/2 origin-bottom scale-y-0 transform rounded-t-[120%] bg-gradient-to-t from-[#dfeeff] to-transparent transition-transform duration-500 ease-out group-hover:scale-y-100"
                  style={{ transitionDelay: `${index * 50}ms` }}
                />

                <div
                  className="relative z-10 h-36 w-36 overflow-hidden rounded-full border-4 border-[#dfeeff] bg-white shadow-[0_10px_25px_rgba(0,103,245,0.12)] transition-all duration-500 ease-out group-hover:scale-105"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <img
                    src={member.imageSrc}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>

                <h3 className="relative z-10 mt-5 text-xl font-semibold text-slate-900">{member.name}</h3>
                <p className="relative z-10 mt-1 text-sm text-slate-600">{member.designation}</p>

                {member.socialLinks && member.socialLinks.length > 0 && (
                  <div className="relative z-10 mt-5 flex gap-3 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                    {member.socialLinks.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#0a2e65] shadow-sm ring-1 ring-slate-200 transition-colors hover:text-[#0067f5]"
                      >
                        <link.icon className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  },
);

TeamSection.displayName = 'TeamSection';

export default TeamSection;
