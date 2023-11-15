'use client';

import ExportButton from '@/app/shared/export-button';
import ModalButton from '@/app/shared/modal-button';
import PageHeader from '@/app/shared/page-header';
import { routes } from '@/config/routes';
import { eventData } from '@/data/event-data';
import EventForm from '@/app/shared/event-calendar/event-form';

const pageHeader = {
  title: 'Event Calendar',
  breadcrumb: [
    {
      href: routes.file.dashboard,
      name: 'Home',
    },
    {
      href: routes.eventCalendar,
      name: 'Event Calendar',
    },
  ],
};

function EventPageHeader() {
  // const { createEvent } = useEventCalendar();
  return (
    <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}>
      <div className="mt-4 flex items-center gap-3 @lg:mt-0">
        <ExportButton
          data={eventData}
          fileName="event_data"
          header="ID,Title,Description,Location,Start,end"
        />
        <ModalButton
          label="Create Event"
          view={<EventForm />}
          customSize="900px"
          className="mt-0 w-full hover:bg-gray-700 @lg:w-auto dark:bg-gray-100 dark:text-white dark:hover:bg-gray-200 dark:active:bg-gray-100"
        />
      </div>
    </PageHeader>
  );
}

export default EventPageHeader;
