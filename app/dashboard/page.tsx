// import CardWrapper from '@/app/ui/dashboard/cards';
// import { Card } from '@/app/ui/dashboard/cards';
// import RevenueChart from '@/app/ui/dashboard/revenue-chart';
// import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
// import { lusitana } from '@/app/ui/fonts';
// import {
//   fetchRevenue,
//   fetchLatestInvoices,
//   fetchCardData,
// } from '@/app/lib/data';
// import {
//   RevenueChartSkeleton,
//   LatestInvoicesSkeleton,
//   CardsSkeleton,
// } from '@/app/ui/skeletons';

// import { Suspense } from 'react';

// export default async function Page() {
//   const revenue = await fetchRevenue();
//   const latestInvoices = await fetchLatestInvoices();
//   const {
//     numberOfInvoices,
//     numberOfCustomers,
//     totalPaidInvoices,
//     totalPendingInvoices,
//   } = await fetchCardData();

//   return (
//     <main>
//       <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
//         Dashboard
//       </h1>
//       <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//       <Suspense fallback={<CardsSkeleton />}>
//           <CardWrapper />
//         </Suspense>
//       </div>
//       <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
//         {/* <RevenueChart revenue={revenue} />
//         <LatestInvoices latestInvoices={latestInvoices} /> */}
//       </div>
//     </main>
//   );
// }
/**
 * Sample for Pareto chart
 */
// import * as React from "react";
// import {
//     ChartComponent,
//     SeriesCollectionDirective,
//     SeriesDirective,
//     Inject,
//     ILoadedEventArgs,
//     Category,
//     ColumnSeries,
//     Legend,
//     Tooltip,
//     ChartTheme,
//     ParetoSeries,
//     LineSeries,
//     Highlight
//   } from '@syncfusion/ej2-react-charts';
  
// import { Browser } from '@syncfusion/ej2-base';
// const SAMPLE_CSS = `
//     .control-fluid {
//         padding: 0px !important;
//     }`;
// export let data1: any[] = [
//     { x: 'Button Defect', y: 23 }, { x: 'Pocket Defect', y: 16 },
//     { x: 'Collar Defect ', y: 10 }, { x: 'Cuff Defect', y: 7 },
//     { x: 'Sleeve Defect', y: 6 }, { x: 'Other Defect', y: 2}
// ];
// const ParetoChart = () => {

//     const onChartLoad = (args: ILoadedEventArgs): void => {
//         let chart: Element = document.getElementById('charts');
//         chart.setAttribute('title', '');
//     };
//     const load = (args: ILoadedEventArgs): void => {
//         let selectedTheme: string = location.hash.split('/')[1];
//         selectedTheme = selectedTheme ? selectedTheme : 'Material';
//         args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i,'Contrast') as ChartTheme;
//         if (selectedTheme === 'material3') {
//             args.chart.series[0].paretoOptions.fill = '#F7523F';
//             args.chart.series[0].paretoOptions.marker.fill = '#F7523F';
//         }
//         else {
//             args.chart.series[0].paretoOptions.fill = null;
//             args.chart.series[0].paretoOptions.marker.fill = null;
//         }
//     };
//     return (
//         <div className='control-pane'>
//             <style>{SAMPLE_CSS}</style>
//             <div className='control-section'>
//                 <ChartComponent id='charts' style={{ textAlign: "center" }} primaryXAxis={{ interval: 1, valueType: 'Category', majorGridLines: { width: 0 }, labelIntersectAction: Browser.isDevice ? 'None' : 'Rotate45', labelRotation: Browser.isDevice ? -45 : 0, minorGridLines: { width: 0 }, majorTickLines: { width: 0 }, minorTickLines: { width: 0 }, lineStyle: { width: 0 }, }} primaryYAxis={{ title: 'Frequency of Occurence', minimum: 0, maximum: 25, interval: 5, lineStyle: { width: 0 }, majorTickLines: { width: 0 }, majorGridLines: { width: 1 }, minorGridLines: { width: 1 }, minorTickLines: { width: 0 } }} chartArea={{ border: { width: 0 } }} load={load.bind(this)} title='Defects in Shirts' loaded={onChartLoad.bind(this)} legendSettings={{ visible: true, enableHighlight: true }} width={Browser.isDevice ? '100%' : '75%'} tooltip={{ enable: true, shared: true, format: '${series.name} : <b>${point.y}</b>' }}>
//                     <Inject services={[Category, ColumnSeries, Legend, LineSeries, Tooltip, ParetoSeries, Highlight]} />
//                     <SeriesCollectionDirective>
//                         <SeriesDirective dataSource={data1} xName='x' yName='y' name='Defect' type='Pareto' width={2} opacity= {0.75} columnWidth= {0.4} cornerRadius= {{ topLeft: Browser.isDevice? 4 : 6, topRight: Browser.isDevice ? 4 : 6 }} paretoOptions={{ marker: { visible: true, isFilled: true, width: 7, height: 7 }, dashArray: '3,2', width: 2 }} />
//                     </SeriesCollectionDirective>
//                 </ChartComponent>
//                 <div style={{ float: 'right', marginRight: '10px' }}></div>
//             </div>
//         </div>
//     )
// }
// export default ParetoChart;
{/* <Fishbone
        items={{
        "name": "Flaws",
        "children": [
            {
                "name": "Machines",
                "children": [
                    {"name": "Speed"},
                    {"name": "Bits"},
                    {"name": "Sockets"}
                ]
            },
            {
                "name": "Personel",
                "children": [
                    {"name": "Shifts"},
                    {"name": "Training"},
                    {"name": "Operators"}
                ]
            },
            {
                "name": "Methods",
                "children": [
                    {"name": "Brake"},
                    {"name": "Angle"},
                ]
            },
            {
                "name": "Material",
                "children": [
                    {
                        "name": "Quality",
                        "children": [
                            {"name": "Delivery"},
                        ]
                    },
                ]
            }
        ]
    }}
    wrapperStyle={{ 
        width: '100%', 
        height: 500,
    }}
    /> */}