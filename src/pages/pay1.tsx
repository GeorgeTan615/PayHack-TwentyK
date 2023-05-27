import Link from "next/link";
import Numpad from "@/components/Numpad";
import {useState} from 'react';
const Pay1 = () =>{
	const [focused, setFocused] = useState(false);
	const [amount, setAmount] = useState(0.00);

	return (
		<div className="flex flex-col h-screen justify-center p-7">
			<div className="font-bold text-4xl text-center">
				QR Pay
			</div>
			<div className="font-bold text-2xl">
				Enter your amount (RM)
			</div>
			<input type="number" id="first_name" onFocus={()=>setFocused(true)} onBlur={()=>setFocused(false)} value={amount} onChange={(e)=>setAmount(parseFloat(parseFloat(e.target.value).toFixed(2)))} step="0.01" className="mt-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0" required />
			<Link href={{
					pathname: '/pay2',
					query: { amount: amount },
				}} className="self-center"
			>
		  		<button type="button" className="mt-5 text-white bg-[#2f5597] hover:bg-[#1b7bbf] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none">Next</button>
			</Link>
			{
				focused && (<Numpad />)
				
			}
		</div>
	)


}



export default Pay1;