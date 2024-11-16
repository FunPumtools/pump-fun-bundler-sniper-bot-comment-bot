# 🚀 **SamBundler - Pumpfun Bundler** 🚀

![SamBundler Logo](https://github.com/user-attachments/assets/96af6fdd-a8a1-424a-9738-a1903034a90b)

## 📖 **Overview**

Welcome to **SamBundler** — the ultimate, fastest, and most efficient **self-bundling script** for **PumpFun**! With this tool, you can:

- 💰 **Create a coin**
- 🎯 **Snipe** tokens in real-time
- 🛒 **Create and buy** tokens instantly
- 💬 **Comment** on transactions
- 🚨 **Spam transactions** for maximum engagement

---

## 🛠️ **Installation**

Getting started is quick and easy! Follow the steps below to set up **SamBundler**:

1. **Download the code** from the repository.
2. Open a **Command Prompt (CMD)** in the same folder as the downloaded code.
3. Run the following command to install the required libraries:
  ``` npm i ```
4. Once installed, run the script with:
   ```node index.js```

---

## 🔧 **Usage Example**

### 1️⃣ **Set Your Private Key**
To start sniping, you'll need to configure your private key.

- Run the bot and select option **6** to enter your private key.
- Ensure your account has at least **0.004 SOL** to begin sniping.

---

### 2️⃣ **Creating a Token**

When selecting "Create a Token," you will be prompted to input the following details:

- **Name** 🏷️: Choose the name of your token.
- **Ticker** 🪙: Set the token's ticker (symbol).
- **Image** 🖼️: Upload a logo for your token.
- **Description** 📝: Write a description for your token.

After submitting your details, **wait 30 seconds** while the token is created and registered on the blockchain.

![Create Token](https://github.com/user-attachments/assets/4b95bbab-d786-469b-8f42-2854b85eb4f9)

---

## 🧑‍💻 **createAndBuy Function**

The **createAndBuy** function allows you to **create a new token** and **immediately buy it**. Here’s how to use it:

### **Function Signature:**

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

## 🤝 Contributing

We welcome all contributions to make SamBundler even better! Whether it’s bug fixes, new features, or documentation improvements, we’d love your input.

    🧑‍💻 Fork the repository
    📥 Submit a pull request
    🗣️ Open an issue if you encounter any bugs or have ideas for enhancements.

## 📜 License

This project is licensed under the MIT License.

