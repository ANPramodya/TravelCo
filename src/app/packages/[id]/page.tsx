import { notFound } from 'next/navigation';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import PackageDetail from '@/components/packages/PackageDetail';
import { packagesData } from '@/data/packages';
import { Metadata } from 'next';

// Define params type
interface PageParams {
  params: {
    id: string;
  };
}

// Generate static paths for all packages
export async function generateStaticParams() {
  return packagesData.map((pkg) => ({
    id: pkg.id,
  }));
}

// Dynamic metadata for each package with proper typing
export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { id } = await params; // Await params here too!
  
  const packageData = packagesData.find((pkg) => pkg.id === id);
  
  if (!packageData) {
    return {
      title: 'Package Not Found | Avora Odyssey',
    };
  }

  return {
    title: `${packageData.title} | Avora Odyssey`,
    description: packageData.description,
    openGraph: {
      title: `${packageData.title} | Avora Odyssey`,
      description: packageData.description,
      type: 'website',
    },
  };
}

export default async function PackagePage({ params }: PageParams) {
  // IMPORTANT: Await params before using it!
  const { id } = await params;
  
  const packageData = packagesData.find((pkg) => pkg.id === id);

  if (!packageData) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <PackageDetail packageData={packageData} />
      <Footer />
    </div>
  );
}