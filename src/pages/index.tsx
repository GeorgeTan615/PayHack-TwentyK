import Image from 'next/image'
import { Inter } from 'next/font/google'
import BankActions from '@/components/BankActions'
import Link from 'next/link'
// import '../styles/globals.css'
// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
	<div className="text-lg">
		<div className="gradient-div p-6">
			<div className="flex">
				<img className="w-20 h-20 rounded-full"src="profilepicture.jpg" alt="Profile Picture" />
				<div className="flex flex-col ml-2">
					<div>Hello,</div>
					<div className="font-bold text-2xl">George</div>
				</div>

			</div>
			<div className="mt-3">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, temporibus magnam. Architecto, temporibus facilis. Quasi assumenda accusantium mollitia odio corrupti ducimus eius quod aut natus minus. A explicabo commodi nobis.
			</div>
		</div>
		<div className="px-4">
			<div className="mt-3 font-bold text-lg">Bank Actions</div>
			<div className="flex justify-between mt-2 gap-3">
				<BankActions actionName={"Deposit"} />
				<BankActions actionName={"Withdraw"} />
				<BankActions actionName={"Transfer"} />
				<Link href="/lindungnow"><BankActions actionName={"LindungNow"} /></Link>
			</div>
		</div>
		<div>
			<img src="banner.png" alt="Mock News" className="h-max pl-2 pr-4 mt-5"/>
		</div>


	</div>
  )
}
