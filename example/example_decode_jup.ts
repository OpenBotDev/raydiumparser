import { Idl } from "@project-serum/anchor";
import { PublicKey, Connection } from "@solana/web3.js";
import { SolanaParser } from "@debridge-finance/solana-transaction-parser";
import { IDL as JupiterIdl, Jupiter } from "./idl/jupiter"; // idl and types file generated by Anchor

const rpcConnection = new Connection("https://jupiter.genesysgo.net");
const txParser = new SolanaParser([{ idl: JupiterIdl as unknown as Idl, programId: "JUP2jxvXaqu7NQY1GmNF4m1vodw12LVXYxbFL2uJvfo" }]);

(async () => {

    const parsed = await txParser.parseTransaction(
        rpcConnection,
        "5zgvxQjV6BisU8SfahqasBZGfXy5HJ3YxYseMBG7VbR4iypDdtdymvE1jmEMG7G39bdVBaHhLYUHUejSTtuZEpEj",
        false,
    );

    // we can find instruction by name
    const tokenSwapIx = parsed?.find((pix) => pix.name === "tokenSwap");
    // or just use index
    const setTokenLedgerIx = parsed ? [0] as ParsedIdlInstruction<Jupiter, "setTokenLedger">;
})