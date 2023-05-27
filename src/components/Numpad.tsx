import { FiDelete } from 'react-icons/fi';
import { BsCheckCircle } from 'react-icons/bs';
const Numpad = () =>{
	return (
		<div className="grid grid-cols-3 place-items-center gap-2 p-5 px-2 bg-[#66cc99]">
			<button className="flex items-center justify-center h-16 w-16 text-2xl">
			1
			</button>
			<button className="flex items-center justify-center h-16 w-16 text-2xl">
			2
			</button>
			<button className="flex items-center justify-center h-16 w-16 text-2xl">
			3
			</button>
			<button className="flex items-center justify-center h-16 w-16 text-2xl">
			4
			</button>
			<button className="flex items-center justify-center h-16 w-16 text-2xl">
			5
			</button>
			<button className="flex items-center justify-center h-16 w-16 text-2xl">
			6
			</button>
			<button className="flex items-center justify-center h-16 w-16 text-2xl">
			7
			</button>
			<button className="flex items-center justify-center h-16 w-16 text-2xl">
			8
			</button>
			<button className="flex items-center justify-center h-16 w-16 text-2xl">
			9
			</button>
			<FiDelete size={25}/>
			<button className="flex items-center justify-center h-16 w-16 text-2xl">
			0
			</button>
			<BsCheckCircle size={25} />
		</div>
	)

}
export default Numpad;