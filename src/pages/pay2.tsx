import { useRouter } from 'next/router'

const Pay2 = () => {
	const router = useRouter();
	const {amount} = router.query;	
	return(
		<div className="flex flex-col h-screen justify-center p-7">
			<div className="flex text-3xl">
				You're paying&nbsp;<span className="font-bold">RM{amount}</span>
			</div>
		</div>
	)

}

export default Pay2;