import html2pdf from 'html2pdf.js';
import React, { useRef, useState } from 'react';

const Output = ({ data }) => {
  const pageRef = useRef();
  const [srNo, setSrNo] = useState(1);
  const [itemCode, setItemCode] = useState('');
  const [description, setDescription] = useState('');
  const [qty, setQty] = useState('');
  const [rate, setRate] = useState(null);
  const [state, setState] = useState(false);


  const heading = ["code", "Description", "QTY", "RATE"];




  const dataArr = data?.itemData;


  const handleGenerate = () => {

    const element = pageRef.current;
    const options = {
      margin: 1,               // Margin in cm
      filename: 'my-document.pdf', // Name of the PDF file
      image: { type: 'jpeg', quality: 0.98 },  // Image type and quality
      html2canvas: { scale: 2 },    // High resolution for images
      jsPDF: { unit: 'cm', format: 'a4', orientation: 'portrait' } // PDF format
    };
    html2pdf()
      .set(options)
      .from(element)
      .save();
  }


  return (
    <div className='h-full w-[50%] m-6' ref={pageRef}>


      <div div className='h-full  m-6 '>
        <div className='flex flex-col items-center' >
          <h2>CHALLAN CUM INVOICE</h2>
          <h1 className='text-2xl font-semibold'>
            THOMSON ELECTRONICS
          </h1>
          <p className='px-14 text-base mt-4'>
            98/94, BAKHRAHAT ROAD, THAKURPUKUR, GSTIN NO.- 19AGCPB3171D1ZX <br />
            KOLKATA – 700 063, MOBILE- 9330160361 CUSTOMER CODE - 50006858
          </p>
        </div >


        <div className='border border-black flex'>
          <div className='border-r w-[50%] p-4  border-black'>
            TO, <br />
            <h1>
              {data?.customerName}
            </h1>
            <p>
              {data?.customerAddress}
            </p>
          </div>

        </div>


        <div className='border-b border-black'>


          <div className='flex border  border-black justify-between'>
            {heading.map((item, index) => (
              <div key={index} className='w-full  '>

                <h1 className='p-2 border w-full border-black'>{item}</h1>
              </div>
            ))}


          </div>
          <div>
            {
              dataArr?.map((item) => {
                return (
                  <div className='flex justify-between   '>

                    <h1 className='border-x px-2  border-black  w-full'>{item.itemCode}</h1>
                    <h1 className='border-x px-2  border-black  w-full'>{item.description}</h1>
                    <h1 className='border-x px-2  border-black  w-full'>{item.itemCode}</h1>
                    <h1 className='border-x px-2  border-black  w-full'>{item.rate}</h1>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      <div className='flex justify-center  '>
        <button onClick={handleGenerate} className='bg-blue-600 px-4 py-2 text-lg rounded-lg text-white '>
          pdf
        </button>
      </div>
    </div>
  );
}

export default Output;
