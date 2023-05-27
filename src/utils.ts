import { baseUrl } from "./configs/constants";

export const updateUserAmount = async (userId:string,amount:number
) => {
	const response = await fetch(`${baseUrl}/api/user/${userId}`, {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({amount}),
	});
	const data = await response.json();
	return data;
};

export const fetchUser = async (userId:string) => {
	const response = await fetch(`${baseUrl}/api/user/${userId}`);
	const data = await response.json();
	// console.log(data)
	return data;
};