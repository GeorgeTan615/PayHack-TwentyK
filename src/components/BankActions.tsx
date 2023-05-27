import { GiReceiveMoney } from 'react-icons/gi';
import { GiPayMoney } from 'react-icons/gi';
import { GiTakeMyMoney } from 'react-icons/gi';
import { SiSpringsecurity } from 'react-icons/si';
import Image from 'next/image';
const BankActions = ({actionName}:{actionName:string}) => {
	return (
		<div className="flex flex-col justify-center items-center">
			{
				actionName=="Deposit"
				? <img className="" src="depositlogo.png" alt="Deposit logo"/>
				: actionName=="Transfer"
				? <img src="transferlogo.png" alt="Transfer logo"/>
				:actionName=="Withdraw"
				? <img src="withdrawlogo.png" alt="Withdraw logo"/>
				: <img src="lindungnowlogo.png" alt="LindungNow logo"/>
			}
		</div>
	)

}


export default BankActions;