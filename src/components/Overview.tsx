import { LinkIcon } from "@heroicons/react/20/solid";
import { projects } from "@/data/projects";
import { socialLinks } from "@/data/socialLinks";

type ProjectCardProps = {
  title: string;
  description: string;
  url: string;
};

type ExternalLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

type SocialLinkProps = {
  href: string;
  Icon: React.ComponentType<{ className: string }>;
};

const ExternalLink = ({
  href,
  children,
  className = "",
}: ExternalLinkProps) => (
  <a
    href={href}
    className={`text-blue-600 hover:text-blue-700 transition-colors ${className}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

const SocialLink = ({ href, Icon }: SocialLinkProps) => (
  <ExternalLink href={href}>
    <Icon className="w-6 h-6 text-gray-700 hover:text-gray-900" />
  </ExternalLink>
);

const ProjectCard = ({ title, description, url }: ProjectCardProps) => (
  <div className="p-3 bg-white/50 rounded-lg hover:bg-white/80 transition-colors">
    <h4 className="font-medium text-gray-800 flex items-center gap-1">
      <LinkIcon className="w-4 h-4 text-blue-600" />
      <ExternalLink
        href={url}
        className="decoration-blue-300 hover:decoration-blue-700"
      >
        {title}
      </ExternalLink>
    </h4>
    <p className="text-sm text-gray-600 mt-1">{description}</p>
  </div>
);

export default function Overview() {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 md:left-8 md:translate-x-0 top-8 w-[calc(100%-2rem)] md:w-[480px] lg:w-[520px] bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-4 md:p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Hi, I'm Brandon Cohen.
      </h2>
      <div className="space-y-4 md:space-y-6">
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          I love maps, and I build geospatial apps. I am the Co-Founder and Head
          of Data at{" "}
          <ExternalLink href="https://www.civilgrid.com">
            CivilGrid
          </ExternalLink>
          , where we are building <i>Google Maps for the Underground.</i>
        </p>

        <div className="flex gap-4">
          {socialLinks.map(({ href, Icon }, index) => (
            <SocialLink key={index} href={href} Icon={Icon} />
          ))}
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-gray-100/80 p-4 md:p-6 rounded-xl shadow-sm">
          <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-gray-800">
            I've also built a few other map projects
          </h3>
          <div className="space-y-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
