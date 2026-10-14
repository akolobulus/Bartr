import type { Metadata } from 'next';
import Image from 'next/image';
import type { SVGProps } from 'react';

export const metadata: Metadata = {
  title: 'Team | Bartr',
  description: 'The people building Bartr.',
};

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

const members = [
  {
    name: 'Akolo Bulus',
    role: 'Software Engineer',
    note: 'Building practical product experiences that solve real problems for communities, teams, and users.',
    avatar: '/team/akolo-bulus.jpg',
    links: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/akolo-bulus/', Icon: LinkedinIcon },
      { label: 'GitHub', href: 'https://github.com/akolobulus', Icon: GithubIcon },
      { label: 'Instagram', href: 'https://www.instagram.com/heisakolo/', Icon: InstagramIcon },
    ],
  },
  {
    name: 'Ayodeji Adesegun',
    role: 'Software Engineer',
    note: 'Builds the Swift versions of the Bartr apps and sharpens the design of this website.',
    avatar: '/team/ayodeji-adesegun.jpg',
    links: [
      { label: 'LinkedIn', href: 'https://linkedin.com/in/ayodejiades/', Icon: LinkedinIcon },
      { label: 'Instagram', href: 'https://instagram.com/ayodeji.ades', Icon: InstagramIcon },
    ],
  },
];

export default function TeamPage() {
  return (
    <main id="content">
      <section className="team-hero">
        <div className="container">
          <h1 className="h1">The people building Bartr.</h1>
          <p className="lead">
            Software engineers building practical product experiences for communities, teams, and users.
          </p>
        </div>
      </section>

      <section className="container team-grid" aria-label="Team members">
        {members.map((member) => (
          <article className="member" key={member.name}>
            <Image
              src={member.avatar}
              alt={member.name}
              width={420}
              height={420}
              sizes="144px"
              className="member-avatar"
            />
            <div>
              <h2 className="member-name">{member.name}</h2>
              <p className="member-role">{member.role}</p>
            </div>
            <p className="member-note">{member.note}</p>
            {member.links.length > 0 ? (
              <div className="socials">
                {member.links.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on ${label}`}
                  >
                    <Icon width={18} height={18} aria-hidden="true" />
                  </a>
                ))}
              </div>
            ) : null}
          </article>
        ))}
      </section>
    </main>
  );
}
