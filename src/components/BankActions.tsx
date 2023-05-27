import { GiReceiveMoney } from 'react-icons/gi';
import { GiPayMoney } from 'react-icons/gi';
import { GiTakeMyMoney } from 'react-icons/gi';
import { SiSpringsecurity } from 'react-icons/si';
const BankActions = ({actionName}:{actionName:string}) => {
	return (
		<div className="border-2 border-black rounded-md p-3 flex flex-col justify-center items-center w-[115px] h-[110px]">
			{
				actionName=="Deposit"
				? <GiReceiveMoney size={25}/>
				: actionName=="Transfer"
				? <GiPayMoney size={25}/>
				:actionName=="Withdraw"
				? <GiTakeMyMoney size={25}/>
				: <SiSpringsecurity size={25}/>
			}
			{actionName}
		</div>
	)

}


export default BankActions;