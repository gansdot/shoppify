'use client';
import React, { ChangeEvent, useState } from 'react'
import Data from '../data/page';

const Sales = () => {


    const [total, setTotal] = useState(0);

    async function calculatePrice(event: ChangeEvent<HTMLInputElement>, item: any): Promise<void> {
        event.preventDefault;
        let uid = event.target.id.substring(3, event.target.id.length);
        if (Number(uid) === Number(item.id)) {
            document.getElementById("total" + `${item.id}`).value = Number(document.getElementById("qty" + `${item.id}`).value) * Number(item.discountedprice);

            setTotal(total + Number(document.getElementById("total" + `${item.id}`).value));
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
                                            onChange={() => calculatePrice(event, item)}
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