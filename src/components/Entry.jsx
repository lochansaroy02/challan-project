import React, { useState } from 'react'


const Entry = ({ setData }) => {
    const [customerName, setCustomerName] = useState('')
    const [customerAddress, setCustomerAddress] = useState('')
    const [itemCode, setItemCode] = useState('')
    const [description, setDescription] = useState('')
    const [quantity, setQuantity] = useState('')
    const [rate, setRate] = useState('')
    const [amount, setAmount] = useState('')
    const [cgst, setCgst] = useState('')
    const [sgst, setSgst] = useState('')
    const [itemData, setItemData] = useState([])
    const customerData = {
        customerName: customerName,
        customerAddress: customerAddress,
        cgst: cgst,
        sgst: sgst,
        itemData: []
    }




    const handleData = () => {
        customerData.itemData = [...itemData]
        console.log(customerData)
        setData(customerData)
        setCustomerName('')
        setCustomerAddress('')
    }
    const handleAddItem = () => {
        setItemData(
            [...itemData, {
                srNo: itemData.length + 1,
                itemCode: itemCode,
                description: description,
                quantity: quantity,
                rate: rate,
                amount: amount,
            }])


        setItemCode('')
        setDescription('')
        setQuantity('')
        setRate('')
        setAmount('')

    }

    return (
        <div className='  pt-16 border-r border-black flex flex-col items-center '>
            <div className=' flex flex-col items-center '>
                <div className='flex gap-5 pt-6 justify-center '>
                    <div className='flex flex-col'>
                        <label className='text-base ' htmlFor="">Customer Name</label>
                        <input onChange={(e) => {
                            setCustomerName(e.target.value)
                        }} value={customerName} className='p-2 border-b  text-neutral-800 focus:outline-none focus:border-b-2 border-black   ' type="text" name="" id="" placeholder='enter Customer name' />
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-base ' htmlFor="">Customer Address</label>
                        <input onChange={(e) => {
                            setCustomerAddress(e.target.value)
                        }} value={customerAddress} className='p-2  text-neutral-800  focus:outline-none focus:border  border-black rounded-lg  ' type="text" name="" id="" placeholder='enter Customer name' />
                    </div>
                </div>

                <div className='bg-red mt-6    gap-6 '>
                    <div className=' flex-col  w-full  flex ' >
                        <label className='text-sm ' htmlFor="">item code</label>
                        <input onChange={(e) => {
                            setItemCode(e.target.value)
                        }} value={itemCode} placeholder='enter item code ' type="text" className='p-2  text-neutral-800  focus:outline-none focus:border  border-black rounded-lg ' />
                    </div>
                    <div className=' flex-col  flex ' >
                        <label className='text-sm ' htmlFor=""> Descripton </label>
                        <input onChange={(e) => {
                            setDescription(e.target.value)
                        }} value={description} placeholder='enter item code ' type="text" className='p-2  text-neutral-800  focus:outline-none focus:border  border-black rounded-lg ' />
                    </div>
                    <div className=' flex-col  flex ' >
                        <label className='text-sm ' htmlFor="">Quantity</label>
                        <input onChange={(e) => {
                            setQuantity(e.target.value)
                        }} value={quantity} placeholder='enter item code ' type="text" className='p-2  text-neutral-800  focus:outline-none focus:border  border-black rounded-lg ' />
                    </div>
                    <div className=' flex-col  flex ' >
                        <label className='text-sm ' htmlFor="">Rate</label>
                        <input onChange={(e) => {
                            setRate(e.target.value)
                        }} value={rate} placeholder='enter item code ' type="text" className='p-2  text-neutral-800  focus:outline-none focus:border  border-black rounded-lg ' />
                    </div>
                    <div className=' flex-col  flex ' >
                        <label className='text-sm' htmlFor="">Amount</label>
                        <input onChange={(e) => {
                            setAmount(e.target.value)
                        }} value={amount} placeholder='enter item code ' type="text" className='p-2  text-neutral-800  focus:outline-none focus:border  border-black rounded-lg ' />
                    </div>
                    <div className=' flex-col  flex ' >
                        <label className='text-sm' htmlFor="">cgst</label>
                        <input onChange={(e) => {
                            setCgst(e.target.value)
                        }} value={cgst} placeholder='enter item code ' type="text" className='p-2  text-neutral-800  focus:outline-none focus:border  border-black rounded-lg ' />
                    </div>
                    <div className=' flex-col  flex ' >
                        <label className='text-sm' htmlFor="">sgst</label>
                        <input onChange={(e) => {
                            setSgst(e.target.value)
                        }} value={sgst} placeholder='enter item code ' type="text" className='p-2  text-neutral-800  focus:outline-none focus:border  border-black rounded-lg ' />
                    </div>
                </div>
                <div className='flex  gap-6 text-white '>

                    <button onClick={handleAddItem} className='bg-blue-700 border border-blue-900 "  p-2 mt-4 rounded-lg'>add item</button>
                    <button onClick={handleData} className='bg-blue-700 border border-blue-900"  p-2 mt-4 rounded-lg'>enter data</button>
                </div>


            </div>

        

        </div>


    )
}

export default Entry