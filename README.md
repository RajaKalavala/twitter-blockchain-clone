# This is Twitter Blockchain App

## Setup Steps

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
