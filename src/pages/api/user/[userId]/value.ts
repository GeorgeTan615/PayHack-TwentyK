import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prismadb";
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { userId } = req.query;
    if (!userId || Array.isArray(userId)) {
      res.status(400).json({ message: "Invalid parameters" });
      return;
    }
    if (req.method == "PATCH") {
      const updatedSlider = await prisma.user.update({
        where: {
          id: userId,
        },
        data: {
          slider: req.body.value,
        },
      });
      res.status(200).json({ result: updatedSlider });
    } else {
      res.status(405).json({ result: "Method not allowed" });
    }
  } catch (err: any) {
    res.status(500).json({ result: err.message });
  }
};

export default handler;
