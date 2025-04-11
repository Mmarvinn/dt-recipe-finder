import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white mt-auto">
      <div className="container mx-auto px-4">
        <hr className="border-t border-gray-200" />
        <div className="py-6">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <Link href="/" className="text-gray-800 flex items-center">
              <Image
                src="/logo.svg"
                alt="Recipe Finder Logo"
                width={80}
                height={80}
                className="rounded-full"
              />
              <span className="text-xl font-semibold">Recipe Finder</span>
            </Link>
          </div>
          <div className="text-center text-sm text-gray-600">
            © {currentYear} Developed by{' '}
            <Link
              href="https://www.linkedin.com/in/anatolii-tserkunyk/"
              className="text-blue-600 hover:text-blue-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mmarvinn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
