import Form from '@/app/ui/invoices/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';
import { invoices } from '@/app/lib/placeholder-data';
 
export default async function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Асуудлын бүртгэл', href: '/dashboard/invoices' },
          {
            label: 'Өөрчлөлт хийх',
            href: `/dashboard/invoices/id/edit`,
            active: true,
          },
        ]}
      />
      {/* <Form invoice={invoices} customers={customers} /> */}
    </main>
  );
}