const { ethers } = require('ethers');

// WebSocket provider URL for Ethereum node
const wsProviderUrl = 'ws://localhost:8541/ws';

// Contract address (replace with your contract address)
const contractAddress = '0x000000000000000000000000000000000000FFff';

// ABI (Application Binary Interface) of the contract (only events need to be included here)
const contractABI = [
    "event RewardDistributed(address indexed recipient, uint256 amount)",
    "event OffChainEngineUpdated(address indexed oldEngine, address indexed newEngine)",
    "event OwnershipTransferred(address indexed oldOwner, address indexed newOwner)",
    "event FeeReceived(address indexed sender, uint256 amount)"
];

// Function to listen for events from the contract
async function listenToEvents() {
    try {
        // Connect to the WebSocket provider
        const provider = new ethers.WebSocketProvider(wsProviderUrl);

        // Create a new contract instance with the provider
        const contract = new ethers.Contract(contractAddress, contractABI, provider);

        console.log(`Listening to events from contract at ${contractAddress}...`);

        // Listen for the RewardDistributed event
        contract.on('RewardDistributed', (recipient, amount) => {
            console.log(`RewardDistributed: Recipient: ${recipient}, Amount: ${ethers.formatEther(amount)} ETH`);
        });

        // Listen for the OffChainEngineUpdated event
        contract.on('OffChainEngineUpdated', (oldEngine, newEngine) => {
            console.log(`OffChainEngineUpdated: Old Engine: ${oldEngine}, New Engine: ${newEngine}`);
        });

        // Listen for the OwnershipTransferred event
        contract.on('OwnershipTransferred', (oldOwner, newOwner) => {
            console.log(`OwnershipTransferred: Old Owner: ${oldOwner}, New Owner: ${newOwner}`);
        });

        // Listen for the FeeReceived event
        contract.on('FeeReceived', (sender, amount) => {
            console.log(`FeeReceived: Sender: ${sender}, Amount: ${ethers.formatEther(amount)} ETH`);
        });

    } catch (error) {
        console.error('Error connecting to WebSocket or listening to events:', error);
    }
}

// Start listening to events
listenToEvents();
