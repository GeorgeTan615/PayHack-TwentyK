import { useRouter } from 'next/router'
import { BsCheck2Circle } from "react-icons/bs";
import { IconContext } from "react-icons";
const Pay3 = () => {
	const router = useRouter();
	const {amount, roundedUpAmount} = router.query;	
	return (
		<div className="flex flex-col h-screen justify-between p-7 pt-16">
			<div className="bold text-center text-4xl">QR Pay</div>
			<div className="w-full flex flex-col items-center gap-3">
				<div className="text-lg">Payment Succeeded</div>
				<IconContext.Provider value={{ color: "#66cc99", className: "global-class-name" }}>
					<BsCheck2Circle size={100}/>
				</IconContext.Provider>
				{/* <BsCheck2Circle  size={100}/> 66cc99 */}
				<div className="text-3xl bold">
					RM{typeof amount == "string" && typeof roundedUpAmount == "string" ? 
					(parseFloat(amount) + parseFloat(roundedUpAmount)).toFixed(2) : 
					"0.00"}
				</div>
				<div>NICHOLAS TAN CHONG ERN</div>
				<div className="flex text-xs justify-center items-center rounded-2xl tube">
					<div className='text-white mr-1'>Protected by LindungNow</div>
					<img src="shield.png" alt="LingdungNow Shield" className="w-4" />
				</div>

				<div className="flex justify-between mt-10 w-full">
					<div>Reference ID:</div>
					<div>73528263</div> 
				</div>
				<div className="flex justify-between w-full">
					<div>Date & Time:</div>
					<div>29/5/2023</div> 
				</div>

			</div>
			<div className="w-full">
				<button type="button" className="bold text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 w-full">Share Receipt</button>
				<button type="button" className="bold text-white bg-[#38aa71] hover:bg-[#66cc99] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none w-full">Done</button>
			</div>

		</div>
	)

}

export default Pay3;