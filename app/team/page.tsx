import type { SVGProps } from 'react';
import TeamSection, { type SocialLink } from '@/components/ui/team-section';

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 10.5V17M8 7.6V7.5M12.5 17V13.2C12.5 11.8 13.2 10.8 14.5 10.8C15.7 10.8 16.3 11.7 16.3 13.2V17" strokeLinecap="round" />
    </svg>
  );
}

function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M9 19c-4 1.5-4-2-5-3m10 6v-3.9c0-1 .1-1.4-.5-2.1 2.8-.3 5.5-1.4 5.5-6.3A4.8 4.8 0 0 0 18.4 5a4.5 4.5 0 0 0-.1-3.2s-1.2-.4-3.9 1.5a13.4 13.4 0 0 0-7 0C6.7 1.4 5.5 1.8 5.5 1.8A4.5 4.5 0 0 0 5.4 5a4.8 4.8 0 0 0-1.1 3.4c0 4.9 2.7 6 5.5 6.3-.6.7-.6 1.2-.5 2.1V19" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const mainSocialLinks: SocialLink[] = [
  { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/akolo-bulus/' },
  { icon: GithubIcon, href: 'https://github.com/akolobulus' },
  { icon: InstagramIcon, href: 'https://www.instagram.com/heisakolo/' },
];

const teamMembers = [
  {
    name: 'Akolo Bulus',
    designation: 'Software Engineer',
    imageSrc: '/akolo-bulus-avatar.svg',
    socialLinks: mainSocialLinks,
  },
];

export default function TeamPage() {
  return (
    <TeamSection
      title="CREATIVE TEAM"
      description="Software engineer building practical product experiences and shipping ideas that solve real problems for communities, teams, and users.
      "
      members={teamMembers}
      registerLink="/"
      logo={<span>AKOLO</span>}
      socialLinksMain={mainSocialLinks}
    />
  );
}
