import { useRouter } from 'next/router'
import ListBox from '@/components/ListBox';
const Pay2 = () => {
	const router = useRouter();
	const {amount} = router.query;	
	let roundedUpAmount:number = 0;
	if (amount && !Array.isArray(amount)){
		roundedUpAmount = parseFloat((Math.ceil(parseFloat(amount))-parseFloat(amount)).toFixed(2))
	}
	return(
		<div className="flex flex-col h-screen justify-between p-7">
			<div>
				<div className="flex text-3xl mb-4">
					You're paying&nbsp;<span className="font-bold">RM{amount}</span>
				</div>
				<ListBox />
				<div className="mt-4">
					RM{roundedUpAmount} will be rounded up for insurance.
				</div>

			</div>
			<button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Pay</button>

		</div>
	)

}

export default Pay2;