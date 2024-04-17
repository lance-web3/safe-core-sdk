// Source: https://github.com/safe-global/safe-deployments/blob/main/src/assets/v1.4.1/compatibility_fallback_handler.json
export default {
  defaultAddress: '0xfd0732Dc9E303f09fCEf3a7388Ad10A83459Ec99',
  released: true,
  contractName: 'CompatibilityFallbackHandler',
  version: '1.4.1',
  networkAddresses: {
    '1': '0xfd0732Dc9E303f09fCEf3a7388Ad10A83459Ec99',
    '5': '0xfd0732Dc9E303f09fCEf3a7388Ad10A83459Ec99',
    '10': '0xfd0732Dc9E303f09fCEf3a7388Ad10A83459Ec99',
    '56': '0xfd0732Dc9E303f09fCEf3a7388Ad10A83459Ec99',
    '71': '0xfd0732Dc9E303f09fCEf3a7388Ad10A83459Ec99',
    '97': '0xfd0732Dc9E303f09fCEf3a7388Ad10A83459Ec99',
    '100': '0xfd0732Dc9E303f09fCEf3a7388Ad10A83459Ec99',
    '137': '0xfd0732Dc9E303f09fCEf3a7388Ad10A83459Ec99',
    '1030': '0xfd0732Dc9E303f09fCEf3a7388Ad10A83459Ec99',
    '1101': '0xfd0732Dc9E303f09fCEf3a7388Ad10A83459Ec99',
    '1442': '0xfd0732Dc9E303f09fCEf3a7388Ad10A83459Ec99',
    '3636': '0xfd0732Dc9E303f09fCEf3a7388Ad10A83459Ec99',
    '4337': '0xfd0732Dc9E303f09fCEf3a7388Ad10A83459Ec99',
    '7771': '0xfd0732Dc9E303f09fCEf3a7388Ad10A83459Ec99',
    '8192': '0xfd0732Dc9E303f09fCEf3a7388Ad10A83459Ec99',
    '8194': '0xfd0732Dc9E303f09fCEf3a7388Ad10A83459Ec99',
    '8453': '0xfd0732Dc9E303f09fCEf3a7388Ad10A83459Ec99',
    '10242': '0xfd0732Dc9E303f09fCEf3a7388Ad10A83459Ec99',
    '10243': '0xfd0732Dc9E303f09fCEf3a7388Ad10A83459Ec99',
    '11235': '0xfd0732Dc9E303f09fCEf3a7388Ad10A83459Ec99',
    '13337': '0xfd0732Dc9E303f09fCEf3a7388Ad10A83459Ec99',
    '17000': '0xfd0732Dc9E303f09fCEf3a7388Ad10A83459Ec99',
    '42161': '0xfd0732Dc9E303f09fCEf3a7388Ad10A83459Ec99',
    '42220': '0xfd0732Dc9E303f09fCEf3a7388Ad10A83459Ec99',
    '54211': '0xfd0732Dc9E303f09fCEf3a7388Ad10A83459Ec99',
    '80001': '0xfd0732Dc9E303f09fCEf3a7388Ad10A83459Ec99',
    '81457': '0xfd0732Dc9E303f09fCEf3a7388Ad10A83459Ec99',
    '84531': '0xfd0732Dc9E303f09fCEf3a7388Ad10A83459Ec99',
    '84532': '0xfd0732Dc9E303f09fCEf3a7388Ad10A83459Ec99',
    '444444': '0xfd0732Dc9E303f09fCEf3a7388Ad10A83459Ec99',
    '11155111': '0xfd0732Dc9E303f09fCEf3a7388Ad10A83459Ec99',
    '11155420': '0xfd0732Dc9E303f09fCEf3a7388Ad10A83459Ec99'
  },
  abi: [
    {
      inputs: [
        {
          internalType: 'contract Safe',
          name: 'safe',
          type: 'address'
        },
        {
          internalType: 'bytes',
          name: 'message',
          type: 'bytes'
        }
      ],
      name: 'encodeMessageDataForSafe',
      outputs: [
        {
          internalType: 'bytes',
          name: '',
          type: 'bytes'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'bytes',
          name: 'message',
          type: 'bytes'
        }
      ],
      name: 'getMessageHash',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'contract Safe',
          name: 'safe',
          type: 'address'
        },
        {
          internalType: 'bytes',
          name: 'message',
          type: 'bytes'
        }
      ],
      name: 'getMessageHashForSafe',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      name: 'getModules',
      outputs: [
        {
          internalType: 'address[]',
          name: '',
          type: 'address[]'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: '_dataHash',
          type: 'bytes32'
        },
        {
          internalType: 'bytes',
          name: '_signature',
          type: 'bytes'
        }
      ],
      name: 'isValidSignature',
      outputs: [
        {
          internalType: 'bytes4',
          name: '',
          type: 'bytes4'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'bytes',
          name: '_data',
          type: 'bytes'
        },
        {
          internalType: 'bytes',
          name: '_signature',
          type: 'bytes'
        }
      ],
      name: 'isValidSignature',
      outputs: [
        {
          internalType: 'bytes4',
          name: '',
          type: 'bytes4'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address'
        },
        {
          internalType: 'address',
          name: '',
          type: 'address'
        },
        {
          internalType: 'uint256[]',
          name: '',
          type: 'uint256[]'
        },
        {
          internalType: 'uint256[]',
          name: '',
          type: 'uint256[]'
        },
        {
          internalType: 'bytes',
          name: '',
          type: 'bytes'
        }
      ],
      name: 'onERC1155BatchReceived',
      outputs: [
        {
          internalType: 'bytes4',
          name: '',
          type: 'bytes4'
        }
      ],
      stateMutability: 'pure',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address'
        },
        {
          internalType: 'address',
          name: '',
          type: 'address'
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        },
        {
          internalType: 'bytes',
          name: '',
          type: 'bytes'
        }
      ],
      name: 'onERC1155Received',
      outputs: [
        {
          internalType: 'bytes4',
          name: '',
          type: 'bytes4'
        }
      ],
      stateMutability: 'pure',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address'
        },
        {
          internalType: 'address',
          name: '',
          type: 'address'
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        },
        {
          internalType: 'bytes',
          name: '',
          type: 'bytes'
        }
      ],
      name: 'onERC721Received',
      outputs: [
        {
          internalType: 'bytes4',
          name: '',
          type: 'bytes4'
        }
      ],
      stateMutability: 'pure',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'targetContract',
          type: 'address'
        },
        {
          internalType: 'bytes',
          name: 'calldataPayload',
          type: 'bytes'
        }
      ],
      name: 'simulate',
      outputs: [
        {
          internalType: 'bytes',
          name: 'response',
          type: 'bytes'
        }
      ],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'bytes4',
          name: 'interfaceId',
          type: 'bytes4'
        }
      ],
      name: 'supportsInterface',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address'
        },
        {
          internalType: 'address',
          name: '',
          type: 'address'
        },
        {
          internalType: 'address',
          name: '',
          type: 'address'
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        },
        {
          internalType: 'bytes',
          name: '',
          type: 'bytes'
        },
        {
          internalType: 'bytes',
          name: '',
          type: 'bytes'
        }
      ],
      name: 'tokensReceived',
      outputs: [],
      stateMutability: 'pure',
      type: 'function'
    }
  ]
} as const
