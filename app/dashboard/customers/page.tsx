
// import Table from '@/app/ui/invoices/table';
// import { CreateInvoice } from '@/app/ui/invoices/buttons';
// import { lusitana } from '@/app/ui/fonts';
// import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
// import { Suspense } from 'react';
// import { fetchInvoicesPages } from '@/app/lib/data';

// export default async function Page({
//   searchParams,
// }: {
//   searchParams?: {
//     query?: string;
//     page?: string;
//   };
// }) {

//   return (
//     <div className="w-full">
//       <div className="flex w-full items-center justify-between">
//         <h1 className={`${lusitana.className} text-2xl`}>Асуудлын бүртгэл</h1>
//       </div>
//       <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
       
//         <CreateInvoice />
//       {/* </div>
//        <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
//         <Table query={query} currentPage={currentPage} />
//       </Suspense>
//       <div className="mt-5 flex w-full justify-center">
//         <Pagination totalPages={totalPages} />
//       </div> */}
//     </div>
//     </div>
//   );
  
// }

// import React from 'react';
// import ParetoChart from 'pareto-chart';

// const Example = () => {
// return (
//     <ParetoChart
//         width={100}
//         height={50}
//         lineLabel='Cumulative percentage'
//         data={{
//         'Customer complaints': {
//             'Difficult parking': 40,
//             'Rude sales person': 13,
//             'Poor lighting': 10,
//             'Confusing layout': 27,
//             'Limited sizes': 15
//         },
//         'Complaints about documents': {
//             'Certificate error': 20,
//             'Certificate missing': 40,
//             'Invoice error': 10,
//             'Packaging error': 5,
//             'Wrong quantity': 3,
//             'Others': 2
//         },
//         'Defects by discipline': {
//             'Tests': 20,
//             'Codification': 40,
//             'Release': 10,
//             'Analysis': 5,
//             'Planning': 15
//         }
//         }}
//     />
//     );
// };

// export default Example;
