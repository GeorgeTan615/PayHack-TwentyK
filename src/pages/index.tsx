import Image from "next/image";
import { Inter } from "next/font/google";
import BankActions from "@/components/BankActions";
import Link from "next/link";

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // const data = fetch("http://localhost:3000/transactions")

  return (
    <div className="text-lg">
      <div className="gradient-div p-6">
        <div className="flex">
          <img
            className="w-16 h-16 rounded-full"
            src="profilepicture.jpg"
            alt="Profile Picture"
          />
          <div className="flex flex-col ml-4">
            <div>Hello,</div>
            <div className="bold font-bold text-2xl">George Tan</div>
          </div>
        </div>
        <div className="mt-3">
          Welcome to PayBank, where your financial goals take center stage,
          backed by cutting-edge technology and expertise.
        </div>
      </div>
      <div className="px-4">
        <div className="mt-5 text-lg bold">Quick Actions</div>
        <div className="flex justify-between mt-2 gap-3">
          <BankActions actionName={"Deposit"} />
          <BankActions actionName={"Withdraw"} />
          <BankActions actionName={"Transfer"} />
          <Link href="/qr">
            <BankActions actionName={"QRPay"} />
          </Link>
        </div>
      </div>
      <div>
        <div className="px-4 mt-5 text-lg bold">Newest Features</div>
        <img
          src="banner.png"
          alt="Mock News"
          className="h-max pl-2 pr-4 mt-2"
        />
      </div>
      <div>
        <div className="px-4 mt-5 text-lg bold">Spending Summary</div>
        <img
          src="banner.png"
          alt="Mock News"
          className="h-max pl-2 pr-4 mt-2"
        />
      </div>
    </div>
  );
}
