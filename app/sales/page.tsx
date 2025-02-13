'use client';
import React, { ChangeEvent, useState } from 'react'

const Sales = () => {

    const Data =

        [
            { id: 1, dp: "/crackers/bgold_1.png", name: 'BOBY GOLD SPARKLERS 7CM(10pcs)', category: "SPARKLERS", actualprice: 50, discountedprice: 20 },
            { id: 2, dp: "/crackers/bcrackling_2.png", name: 'BOBBY CRACKLINGS SPARKLERS 7CM(10PCS)', category: "SPARKLERS", actualprice: 50, discountedprice: 25 },
            { id: 3, dp: "/crackers/4color_3.png", name: '12CM 4 COLOUR SPARKLERS (10PCS)', category: "SPARKLERS", actualprice: 100, discountedprice: 50 },
            { id: 4, dp: "/crackers/gsparkling_4.png", name: 'GOLD SPARKLERS 15CM(10PCS)', category: "SPARKLERS", actualprice: 150, discountedprice: 75 },
            { id: 5, dp: "/crackers/gsparkler_5.png", name: 'GOLD SPARKLERS 30CM(5PCS)', category: "SPARKLERS", actualprice: 150, discountedprice: 75 },
            { id: 6, dp: "/crackers/rsparklers_6.png", name: 'RED SPARKLERS 15CM(10PCS)', category: "SPARKLERS", actualprice: 160, discountedprice: 80 },
            { id: 7, dp: "/crackers/lsparklers_7.png", name: 'LEMON TREE SPARKLERS 15CM(10PCS)', category: "SPARKLERS", actualprice: 160, discountedprice: 80 },
            { id: 8, dp: "/crackers/csparklers_8.png", name: 'CRACKLING SPARKLERS 15CM(10PCS)', category: "SPARKLERS", actualprice: 170, discountedprice: 85 },
            { id: 9, dp: "/crackers/gsparkling_81.png", name: 'CRACKLING SPARKLERS 30CM(5PCS)', category: "SPARKLERS", actualprice: 170, discountedprice: 85 },
            { id: 10, dp: "/crackers/lavendersparkler_9.png", name: 'LAVENDER SPARKLERS 15CM(10PCS)', category: "SPARKLERS", actualprice: 220, discountedprice: 110 },
            { id: 11, dp: "/crackers/robincolorsparkler_e_11.png", name: 'ROBIN ELECTRIC SPARKLERS 50CM(5PCS)', category: "SPARKLERS", actualprice: 420, discountedprice: 210 },
            { id: 12, dp: "/crackers/robincolorsparkler_11.png", name: 'ROBIN COLOUR SPARKLERS 50CM(5PCS)', category: "SPARKLERS", actualprice: 480, discountedprice: 240 },
            { id: 13, dp: "/crackers/robincolorsparklers_12.png", name: 'ROBIN(5IN1) COLOUR SPARKLERS 75CM(5PCS)', category: "SPARKLERS", actualprice: 750, discountedprice: 375 },
            { id: 14, dp: "/flowerpots/flower1.png", name: 'THE GREAT SPLENDOUR FOUNTAIN (1PC)', category: "FLOWERPOTS", actualprice: 160, discountedprice: 80 },
            { id: 15, dp: "/flowerpots/flower2.png", name: 'FLOWERPOT SMALL(10PCS)', category: "FLOWERPOTS", actualprice: 190, discountedprice: 95 },
            { id: 16, dp: "/flowerpots/flower3.png", name: 'FLOWERPOTS BIG(10PCS)', category: "FLOWERPOTS", actualprice: 320, discountedprice: 160 },
            { id: 17, dp: "/flowerpots/flower4.png", name: 'FLOWERPOTS SPECIAL (10PCS)', category: "FLOWERPOTS", actualprice: 420, discountedprice: 210 },
            { id: 18, dp: "/flowerpots/flower5.png", name: 'CHEERS FOUNTAIN (3PCS)', category: "FLOWERPOTS", actualprice: 460, discountedprice: 230 },
            { id: 19, dp: "/flowerpots/flower6.png", name: 'FLOWERPOTS DELUXE (5PCS)', category: "FLOWERPOTS", actualprice: 560, discountedprice: 280 },
            { id: 20, dp: "/flowerpots/flower7.png", name: 'JADE FLOWERS FOUNTAIN(5PCS)', category: "FLOWERPOTS", actualprice: 600, discountedprice: 300 },
            { id: 21, dp: "/flowerpots/flower8.png", name: 'HAPPINESS FOUNTAIN (5PCS)', category: "FLOWERPOTS", actualprice: 620, discountedprice: 310 },
            { id: 22, dp: "/flowerpots/flower9.png", name: 'JEWEL POTS FOUNTAIN (5PCS)', category: "FLOWERPOTS", actualprice: 620, discountedprice: 310 },
            { id: 23, dp: "/flowerpots/flower10.png", name: 'SUNDROPS FOUNTAIN (5PCS)', category: "FLOWERPOTS", actualprice: 620, discountedprice: 310 },
            { id: 24, dp: "/flowerpots/flower11.png", name: 'MONEY PENNY FOUNTAIN (5PCS)', category: "FLOWERPOTS", actualprice: 620, discountedprice: 310 },
            { id: 25, dp: "/flowerpots/flower12.png", name: 'POPCORN FOUNTAIN (5PCS)', category: "FLOWERPOTS", actualprice: 620, discountedprice: 310 },
            { id: 26, dp: "/flowerpots/flower13.png", name: 'LASER SHOW FOUNTAIN (3PCS)', category: "FLOWERPOTS", actualprice: 620, discountedprice: 310 },
            { id: 27, dp: "/flowerpots/flower14.png", name: 'FLOWERPOTS GIANT (10PCS)', category: "FLOWERPOTS", actualprice: 620, discountedprice: 310 },
            { id: 28, dp: "/flowerpots/flower15.png", name: 'COLOR FOUNTAINS (4PCS)', category: "FLOWERPOTS", actualprice: 620, discountedprice: 310 },

        ]

    const [total, setTotal] = useState(0);

    async function calculatePrice(event: ChangeEvent<HTMLInputElement>, item: any): Promise<void> {
        event.preventDefault;
        let uid = event.target.id.substring(3, event.target.id.length);
        if (Number(uid) === Number(item.id)) {
            let result = Number((document.getElementById("total" + `${item.id}`) as HTMLInputElement)!.value);
            result = Number((document.getElementById("qty" + `${item.id}`) as HTMLInputElement)!.value) * Number(item.discountedprice);

            setTotal(total + Number((document.getElementById("total" + `${item.id}`) as HTMLInputElement)!.value));
        }

        return;
    }

    return (

        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-16 py-3">
                                <span className="sr-only">Image</span>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Product
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Qty
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Actual Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Discounted Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Quantity
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Total amount : ₹ {total}
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            Data.map((item) => (

                                <tr key={item.dp} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="p-4">
                                        <img src={item.dp} className="w-16 md:w-32 max-w-full max-h-full" alt="B" />

                                    </td>
                                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                        {item.name}
                                    </td>
                                    <td className="px-6 py-4">
                                        1 Box
                                    </td>
                                    <td key={item.name} className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                        ₹ {item.actualprice}
                                    </td>
                                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                        ₹ {item.discountedprice}
                                    </td>
                                    <td className="px-6 py-4">
                                        <input
                                            id={"qty" + `${item.id}`}
                                            name={"qty" + `${item.id}`}
                                            type="number"
                                            placeholder="2"
                                            className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                            onChange={(event: ChangeEvent<HTMLInputElement>) => calculatePrice(event, item)}
                                        />
                                    </td>
                                    <td className="px-6 py-4">
                                        <input
                                            id={"total" + `${item.id}`}
                                            name={"total" + `${item.id}`}
                                            type="number"
                                            disabled
                                            className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"

                                        />
                                    </td>
                                </tr>

                            ))}

                    </tbody>
                </table>

            </div>

        </>

    )
}

export default Sales