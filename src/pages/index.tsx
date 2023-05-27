import Image from 'next/image'
import { Inter } from 'next/font/google'
import BankActions from '@/components/BankActions'
import Link from 'next/link'
// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
	<div className="text-lg">
		<div className="bg-[#a3bfdb] p-6">
			<div className="flex">
				<img className="w-12 h-12"src="profilepicture.jpg" alt="Profile Picture" />
				<div className="flex flex-col ml-2">
					<div>Hello,</div>
					<div className="font-bold">George</div>
				</div>

			</div>
			<div className="mt-3">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, temporibus magnam. Architecto, temporibus facilis. Quasi assumenda accusantium mollitia odio corrupti ducimus eius quod aut natus minus. A explicabo commodi nobis.
			</div>
		</div>
		<div className="px-6">
			<div className="mt-3 font-bold text-lg">Bank Actions</div>
			<div className="flex gap-2 justify-between mt-2">
				<BankActions actionName={"Deposit"} />
				<BankActions actionName={"Withdraw"} />
				<BankActions actionName={"Transfer"} />
				<Link href="/lindungnow"><BankActions actionName={"LindungNow"} /></Link>
			</div>
		</div>
		{/* <div>
			<img src="mocknews.jpg" alt="Mock News" className="h-max"/>
		</div> */}


	</div>
  )
}
