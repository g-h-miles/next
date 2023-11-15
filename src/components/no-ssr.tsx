import dynamic from 'next/dynamic';
import Spinner from '@/components/ui/spinner';

const NoSSR = ({ children }: { children: React.ReactNode }) => <>{children}</>;

export default dynamic(() => Promise.resolve(NoSSR), {
  ssr: false,
  loading: () => <Spinner size="lg" />,
});
