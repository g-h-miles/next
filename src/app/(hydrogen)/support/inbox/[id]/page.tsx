import { Metadata } from 'next';
import { metaObject } from '@/config/site.config';
import BackButton from '@/app/shared/support/inbox/back-button';
import MessageList from '@/app/shared/support/inbox/message-list';
import MessageDetails from '@/app/shared/support/inbox/message-details';

type Props = {
  params: { id: string };
};

/**
 * for dynamic metadata
 * @link: https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function
 */

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const id = params.id;

  return metaObject(`Message ${id}`);
}

export default function Page() {
  return (
    <>
      <div className="mt-5 items-start @container lg:mt-9 lg:grid lg:grid-cols-[330px_1fr] lg:gap-7 2xl:grid-cols-[400px_1fr]">
        <div className="col-span-full">
          <BackButton />
        </div>

        <MessageList className="lg:hidden" />
        <MessageDetails />
      </div>
    </>
  );
}
