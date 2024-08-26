import html2pdf from 'html2pdf.js';
import React, { useEffect, useRef, useState } from 'react';

const Output = ({ data }) => {
  const pageRef = useRef();
  const [total, setTotal] = useState(0);
  const [cgst, setCgst] = useState(0);
  const [sgst, setSgst] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);
  const dataArr = data?.itemData || [];

  let heading = [
    {
      srNo: 'Sr No',
      itemCode: 'Item Code',
      description: 'Description',
      quantity: 'QTY',
      rate: 'Rate',
      amount: 'Amount',
    },
  ];

  useEffect(() => {


    let newTotal = 0;
    const totalAmtArr = dataArr.filter(item => item.hasOwnProperty('amount'));
    totalAmtArr.forEach(item => {
      newTotal += parseInt(item.amount);
    });

    let cgst = (newTotal * data?.cgst) / 100;
    let sgst = (newTotal * data?.sgst) / 100;
    let newGrandTotal = newTotal + cgst + sgst;
    setCgst(cgst)
    setSgst(sgst)
    setTotal(newTotal);
    setGrandTotal(newGrandTotal);

  }, [data]);



  const handleGenerate = () => {
    const element = pageRef.current;
    const options = {
      margin: 1,
      filename: 'my-document.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'cm', format: 'a4', orientation: 'portrait' },
    };
    html2pdf().set(options).from(element).save();
  };

  return (
    <div className='h-full relative m-6' ref={pageRef}>
      <div className='h-full m-6'>
        <div className='flex flex-col items-center'>
          <h2>CHALLAN CUM INVOICE</h2>
          <h1 className='text-2xl font-semibold'>THOMSON ELECTRONICS</h1>
          <p className='px-14 text-base mt-4'>
            98/94, BAKHRAHAT ROAD, THAKURPUKUR, GSTIN NO.- 19AGCPB3171D1ZX{' '}
            <br />
            KOLKATA – 700 063, MOBILE- 9330160361 CUSTOMER CODE - 50006858
          </p>
        </div>

        <div className='border border-b-0 mt-8 border-black flex'>
          <div className='border-r w-[50%] p-4 border-black'>
            To, <br />
            <h1>{data?.customerName}</h1>
            <p>{data?.customerAddress}</p>
          </div>
          <div className='w-full '>
            <h1 className='border-b  p-2  w-full  border-black '>Date : </h1>
            <h1 className='border-b p-2   w-full  border-black '>your order number </h1>
            <h1 className='border-b  p-2  w-full  border-black '>Invoice number</h1>
            <h1 className='border-b  p-2  w-full  border-black '> GRN no. </h1>
            <h1 className='border-b  p-2  w-full  border-black '>vehical number</h1>
          </div>
        </div>

        <div className='border-b border-black'>
          <div>
            {dataArr.length >= 0 && heading.length >= 0 && (
              <table
                className='border border-black w-full'
                border='1'
                cellPadding='10'
                cellSpacing='0'
              >
                <thead className='w-full border-b border-black'>
                  {heading.map((item, index) => (
                    <tr key={index}>
                      {Object.values(item).map((key, idx) => (
                        <th className='border-r border-black' key={idx}>
                          {key}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody className='w-full'>
                  {dataArr.map((item, index) => (
                    <tr className='border-b border-black' key={index}>
                      {Object.values(item).map((value, idx) => (
                        <td className='border-r border-black' key={idx}>
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            <div className='border-x border-black'>
              <div className='flex px-2 py-2 justify-between'>
                <div>
                  <p>CGST {data?.cgst}%</p>
                  <p>SGST {data?.sgst}%</p>
                </div>
                <div className='flex flex-col items-end'>
                  <p>Rs. {cgst}</p>
                  <p>Rs. {sgst}</p>

                </div>
              </div>
              <div className='flex py-2 justify-end border-t border-black'>
                <h1 className='mr-2'>Total: Rs. {total} </h1>
              </div>
              <div className='flex py-2 justify-end border-t border-black'>
                <h1 className='mr-2'>Grand Total Rs. {grandTotal} </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <button
          onClick={handleGenerate}
          className='bg-blue-600 fixed bottom-8 right-10 flex items-center justify-center px-4 py-2 text-lg rounded-lg text-white'
        >
          Generate PDF
        </button>
      </div>
    </div>
  );
};

export default Output;