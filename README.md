# SamBundler - Pumpfun bundler
![image](https://github.com/user-attachments/assets/96af6fdd-a8a1-424a-9738-a1903034a90b)

## Overview

This is the best, fastest, and most efficient self-bundling script for PumpFun, allowing you to:

- Create a coin
- Snipe
- Create and buy
- Comment
- Spam transactions

## Installation
1 - Download the code
2 - Open a cmd in the same folder and type ```npm i ``` to install the libraries
3 - Run ```node index.js```

## Usage Example

First you need to set a private key if you want to snipe, so start the bot and press the option 6.

Then you need to fund an account with atleast 0.004 SOL to start sniping. 

### Crating a token

When selecting create a token you will be asked to input 

- name
- ticker
- image
- description

  ![image2](https://github.com/user-attachments/assets/4b95bbab-d786-469b-8f42-2854b85eb4f9)

After you will have to wait 30 seconds untill the token will be crated.

#### createAndBuy

```typescript
async createAndBuy(
  creator: Keypair,
  mint: Keypair,
  createTokenMetadata: CreateTokenMetadata,
  buyAmountSol: bigint,
  slippageBasisPoints: bigint = 500n,
  priorityFees?: PriorityFee,
  commitment: Commitment = DEFAULT_COMMITMENT,
  finality: Finality = DEFAULT_FINALITY
): Promise<TransactionResult>
```

- Creates a new token and buys it.
- **Parameters**:
  - `creator`: The keypair of the token creator.
  - `mint`: The keypair of the mint account.
  - `createTokenMetadata`: Metadata for the token.
  - `buyAmountSol`: Amount of SOL to buy.
  - `slippageBasisPoints`: Slippage in basis points (default: 500).
  - `priorityFees`: Priority fees (optional).
  - `commitment`: Commitment level (default: DEFAULT_COMMITMENT).
  - `finality`: Finality level (default: DEFAULT_FINALITY).
- **Returns**: A promise that resolves to a `TransactionResult`.



## Contributing

We welcome contributions! Please submit a pull request or open an issue to discuss any changes.

## License

This project is licensed under the MIT License

---


