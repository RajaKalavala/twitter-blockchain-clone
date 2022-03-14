# Twitter Web3 Blockchain App (Clone)

Hosted Link - https://twitter-web3-clone.vercel.app/

## Steps To Open App
1. Prerequisite - You should have Metamask account and extension in browser with test crypto available in your wallet
2. Open above hosted link.
3. Connect to wallet
4. Twitter Clone App will be open with your profile linked with your metamask account and your cypto wallet. 
5. You can Create your own tweets and see tweets of other Users.

### Note: This app is created solely for learning purpose and not for real use. It will be in development stage only.


## Development Setup Steps/Notes

1. Create Next.js App:

```bash
   npx create-next-app --example with-tailwindcss twitter-blockchain-clone
```

2. Setup Sanity:

https://www.sanity.io/cleverprogrammer

Run below commands:

```bash
   npm install -g @sanity/cli
   sanity init --coupon cleverprogrammer
```

To run the application:

```bash
   npx next dev -p 4000
```

Shortcut to add component template -> rafce

Web3 Setup Requirement:

1. MetaMask
2. Alchemy

Smart-Contract Commands:

```bash
   npm install hardhat
   npx hardhat compile
   npx hardhat run scripts/deploy.js --network rinkeby
   sanity start
```
