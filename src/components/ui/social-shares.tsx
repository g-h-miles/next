import {
  PiFacebookLogoFill,
  PiInstagramLogoFill,
  PiTwitterLogoFill,
  PiYoutubeLogoFill,
} from 'react-icons/pi';

const socialData = [
  {
    title: 'Facebook',
    icon: <PiFacebookLogoFill className="h-auto w-4" />,
    link: 'https://facebook.com',
  },
  {
    title: 'Twitter',
    icon: <PiTwitterLogoFill className="h-auto w-4" />,
    link: 'https://twitter.com',
  },
  {
    title: 'Instagram',
    icon: <PiInstagramLogoFill className="h-auto w-4" />,
    link: 'https://instagram.com',
  },
  {
    title: 'Youtube',
    icon: <PiYoutubeLogoFill className="h-auto w-4" />,
    link: 'https://youtube.com',
  },
];

export default function SocialItems() {
  return (
    <div className="mt-8 flex items-center justify-center gap-6 py-6 md:mt-10 lg:mt-0 xl:py-8">
      {socialData.map((item) => (
        <a
          key={item.title}
          href={item.link}
          rel="norefferer"
          target="_blank"
          className="social-btn-shadow inline-block rounded-full bg-white p-3 text-gray-500 transition-all duration-300 hover:text-gray-1000 dark:bg-gray-100 dark:text-gray-700 dark:hover:text-gray-1000"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}
