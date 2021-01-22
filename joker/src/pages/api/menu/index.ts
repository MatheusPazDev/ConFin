import { NextApiRequest, NextApiResponse } from "next";
import { MenuData } from "../../../utils/menu-data";

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(MenuData)) {
      throw new Error("Cannot find user data");
    }

    res.status(200).json(MenuData);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
