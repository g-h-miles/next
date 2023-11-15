import { usersData } from '@/data/users-data';
import PageHeader from '@/app/shared/page-header';
import ModalButton from '@/app/shared/modal-button';
import RolesGrid from '@/app/shared/roles-permissions/roles-grid';
import UsersTable from '@/app/shared/roles-permissions/users-table';
import CreateRole from '@/app/shared/roles-permissions/create-role';

const pageHeader = {
  title: 'Roles and Permissions ',
  breadcrumb: [
    {
      href: '/',
      name: 'Dashboard',
    },
    {
      name: 'Role Management & Permission',
    },
  ],
};

export default function BlankPage() {
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}>
        <ModalButton label="Add New Role" view={<CreateRole />} />
      </PageHeader>
      <RolesGrid />
      <UsersTable data={usersData} />
    </>
  );
}
