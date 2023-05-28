import type { NextApiRequest, NextApiResponse } from "next";
// import prisma from "@/src/lib/prismadb";
import prisma from "@/lib/prismadb";
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { userId } = req.query;
    if (!userId || Array.isArray(userId)) {
      res.status(400).json({ message: "Invalid parameters" });
      return;
    }
    if (req.method == "PATCH") {
      const user = await prisma.user.findFirst({
        where: {
          id: userId,
        },
      });
      // console.log(user)

      const updatedAmount = await prisma.user.update({
        where: {
          id: userId,
        },
        data: {
          amount: user?.amount + req.body.amount,
        },
      });
      res.status(200).json({ result: updatedAmount });
    } else if (req.method == "GET") {
      const user = await prisma.user.findFirst({
        where: {
          id: userId,
        },
      });
      res.status(200).json({ result: user });
    } else {
      res.status(405).json({ result: "Method not allowed" });
    }
  } catch (err: any) {
    res.status(500).json({ result: err.message });
  }
};

export default handler;
