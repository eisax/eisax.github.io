import Image from "next/image";

import { SectionLabel } from "@/components/primitives/SectionLabel";
import { SocialLink } from "@/components/primitives/SocialLink";
import { socialLinks } from "@/data/social";

export interface GithubProfile {
	avatar_url: string;
	bio: string | null;
	location: string | null;
	html_url: string;
	login: string;
}

interface ContactSectionProps {
	github: GithubProfile;
}

export function ContactSection({ github }: ContactSectionProps) {
	return (
		<div>
			<SectionLabel num="07" />
			<div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(180px,0.45fr)] md:items-center md:gap-12">
				<div>
					<h2 className="font-mono text-[clamp(40px,7vw,96px)] font-bold leading-[0.9] text-terminal-text">
						REACH OUT TO ME!
					</h2>
					<p className="mt-8 max-w-xl font-mono text-sm uppercase leading-relaxed tracking-widest text-terminal-soft">
						Reach out to discuss your custom ERP requirements, enterprise integrations, or autonomous AI systems.
					</p>
					<div className="mt-8 flex flex-wrap items-center gap-4">
						<a
							href={socialLinks.email}
							className="inline-flex border border-terminal-signal px-4 py-2 font-mono text-sm text-terminal-signal transition-colors hover:bg-terminal-signal hover:text-terminal-bg"
						>
							josphatkndhlovu@gmail.com
						</a>
						<a
							href="tel:+263774259097"
							className="inline-flex border border-terminal-border px-4 py-2 font-mono text-sm text-terminal-soft transition-colors hover:border-terminal-signal hover:text-terminal-signal"
						>
							+263 774 259 097
						</a>
					</div>
					<div className="mt-6 flex flex-wrap gap-3">
						<SocialLink
							href={socialLinks.github}
							icon="mdi:github"
							label="GITHUB"
							showLabel
						/>
						<SocialLink
							href={socialLinks.linkedin}
							icon="mdi:linkedin"
							label="LINKEDIN"
							showLabel
						/>
						<SocialLink
							href={socialLinks.instagram}
							icon="mdi:instagram"
							label="INSTAGRAM"
							showLabel
						/>
					</div>
				</div>
				<div className="relative mx-auto aspect-square w-40 shrink-0 overflow-hidden border border-terminal-border bg-terminal-surface sm:w-48 md:ml-auto md:mr-0 md:w-56 lg:w-64">
					<Image
						src="/img/profile.png"
						alt="Josphat K Ndhlovu profile"
						fill
						className="object-cover object-top"
						sizes="(min-width: 1024px) 256px, (min-width: 768px) 224px, (min-width: 640px) 192px, 160px"
						priority
					/>
				</div>
			</div>
		</div>
	);
}
