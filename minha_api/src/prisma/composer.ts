import { pnContract } from "@prisma/composer-prisma-cloud/prisma-next";

import type { Contract } from "./generated/contract.d.ts";
import contractJson from "./generated/contract.json" with { type: "json" };

export const appContract = pnContract<Contract>(contractJson);
