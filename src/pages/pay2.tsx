import { useRouter } from 'next/router'
import ListBox from '@/components/ListBox';
import Link from 'next/link';
import {FcBusinessman} from 'react-icons/fc'
const Pay2 = () => {
	const router = useRouter();
	const {amount} = router.query;	
	let roundedUpAmount:number = 0;
	if (amount && !Array.isArray(amount)){
		roundedUpAmount = parseFloat((Math.ceil(parseFloat(amount))-parseFloat(amount)).toFixed(2))
	}
	return(
		<div className="flex flex-col h-screen justify-between p-7">
			<div className="bold text-center text-4xl">QR Pay</div>
			<div className="flex flex-col justify-center items-center">
				<FcBusinessman size={100}/>
				<div className="mt-4 text-2xl">NICHOLAS TAN CHONG ERN</div>
				<div className="text-xl">1234 567 890</div>
				<div className="flex text-3xl mt-4 bold">
					RM{amount}
				</div>
				<div className="mt-4" />
				<ListBox />
				<div className="mt-4 text-gray-500">
					RM{roundedUpAmount} will be rounded up to LindungNow
				</div>

			</div>
			<Link href={{
					pathname: '/pay3',
					query: { amount: amount, roundedUpAmount:roundedUpAmount },
				}} className="self-center w-full"
			>
				<button type="button" className="w-full text-white bg-[#38aa71] hover:bg-[#66cc99] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none bold">Pay</button>
			</Link>

		</div>
	)

}

export default Pay2;