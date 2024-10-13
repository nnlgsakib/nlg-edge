// Import ethers.js
const { ethers } = require("ethers");

// Function to get the balance of an address in ETH format
async function getBalance(address, providerUrl) {
    try {
        // Connect to the Ethereum network using the custom provider URL
        const provider = new ethers.JsonRpcProvider(providerUrl);

        // Fetch the balance in wei
        const balanceWei = await provider.getBalance(address);

        // Convert the balance from wei to ether (ETH)
        const balanceEth = ethers.formatEther(balanceWei);

        console.log(`Balance of address ${address}: ${balanceEth} ETH`);
        return balanceEth;
    } catch (error) {
        console.error(`Error fetching balance for ${address}:`, error);
    }
}

// Example usage with the provided address and provider URL
const address = '0x000000000000000000000000000000000000FFff'; // The given address
const providerUrl = 'http://localhost:8541/'; // The given custom provider URL

// Fetch the balance
getBalance(address, providerUrl);
