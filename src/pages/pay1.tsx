import Link from "next/link";
import Numpad from "@/components/Numpad";
import {useState} from 'react';
const Pay1 = () =>{
	const [focused, setFocused] = useState(false);
	const [amount, setAmount] = useState<number>(0.00);

	return (
		<>
			<div className="bold text-4xl text-center pt-16">
				QR Pay
			</div>
			<div className="flex flex-col h-screen justify-between">
				<div className="flex flex-col justify-center pt-48">
					{/* <div className="ml-4 mt-3"> */}
					<div className="font-bold text-2xl mt-3 ml-7">
						Enter your amount (RM)
					</div>
					<input type="number" id="first_name" onFocus={()=>setFocused(true)} onBlur={()=>setFocused(false)} value={amount} onChange={(e)=>setAmount(parseFloat(parseFloat(e.target.value).toFixed(2)))} step="0.01" className="ml-7 mt-3 bg-white text-gray-900 text-sm rounded-lg block w-8/12 p-2.5" placeholder="0" required />
					{/* </div> */}
					<Link href={{
							pathname: '/pay2',
							query: { amount: amount },
						}} className="self-center mt-3"
					>
						<button type="button" className="text-white bg-[#38aa71] hover:bg-[#66cc99] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 mt-2 focus:outline-none">Next</button>
					</Link>
				</div>
				<div className="justify-self-end">
					{
						focused && (
							<div className="w-full">
								<Numpad />
							</div>
						)
						
					}
				</div>
			</div>
		</>
	)


}



export default Pay1;