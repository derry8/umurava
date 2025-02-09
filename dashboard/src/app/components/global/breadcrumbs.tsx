'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

type BreadcrumbItem = {
  label: string;
  href: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  const router = useRouter();

  return (
    <nav className="flex bg-white border-[#E4E7EC] border-[1px] w-full h-[62px] py-[12px] px-[36px] items-center text-sm text-gray-500">
      <button
        onClick={() => router.back()}
        className="flex items-center text-gray-700 hover:text-gray-900"
      >
        ← Go Back
      </button>
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          <div className='mx-2' >/</div>
          <Link href={item.href} className={`${index === items.length - 1 ? 'text-blue-600' : ''} hover:underline`}>
            {item.label}
          </Link>
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumb;
