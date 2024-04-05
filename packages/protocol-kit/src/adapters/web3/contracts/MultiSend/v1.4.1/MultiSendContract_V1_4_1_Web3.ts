import MultiSendBaseContractWeb3 from '@safe-global/protocol-kit/adapters/web3/contracts/MultiSend/MultiSendBaseContractWeb3'
import Web3Adapter from '@safe-global/protocol-kit/adapters/web3/Web3Adapter'
import { DeepWriteable } from '@safe-global/protocol-kit/adapters/web3/types'
import MultiSendContract_v1_4_1_Contract, {
  MultiSendContract_v1_4_1_Abi as MultiSendContract_v1_4_1_Abi_Readonly
} from '@safe-global/protocol-kit/contracts/AbiType/MultiSend/v1.4.1/MultiSendContract_v1_4_1'
import multiSend_1_4_1_ContractArtifacts from '@safe-global/protocol-kit/contracts/AbiType/assets/MultiSend/v1.4.1/multi_send'
import { SafeVersion } from '@safe-global/safe-core-sdk-types'

// Remove all nested `readonly` modifiers from the ABI type
type MultiSendContract_v1_4_1_Abi = DeepWriteable<MultiSendContract_v1_4_1_Abi_Readonly>

/**
 * MultiSendContract_v1_4_1_Web3 is the implementation specific to the MultiSend contract version 1.4.1.
 *
 * This class specializes in handling interactions with the MultiSend contract version 1.4.1 using Web3.js v6.
 *
 * @extends MultiSendBaseContractWeb3<MultiSendContract_v1_4_1_Abi> - Inherits from MultiSendBaseContractWeb3 with ABI specific to MultiSend contract version 1.4.1.
 * @implements MultiSendContract_v1_4_1_Contract - Implements the interface specific to MultiSend contract version 1.4.1.
 */
class MultiSendContract_v1_4_1_Web3
  extends MultiSendBaseContractWeb3<MultiSendContract_v1_4_1_Abi>
  implements MultiSendContract_v1_4_1_Contract
{
  safeVersion: SafeVersion

  /**
   * Constructs an instance of MultiSendContract_v1_4_1_Web3
   *
   * @param chainId - The chain ID where the contract resides.
   * @param web3Adapter - An instance of Web3Adapter.
   * @param customContractAddress - Optional custom address for the contract. If not provided, the address is derived from the MultiSend deployments based on the chainId and safeVersion.
   * @param customContractAbi - Optional custom ABI for the contract. If not provided, the default ABI for version 1.4.1 is used.
   */
  constructor(
    chainId: bigint,
    web3Adapter: Web3Adapter,
    customContractAddress?: string,
    customContractAbi?: MultiSendContract_v1_4_1_Abi
  ) {
    const safeVersion = '1.4.1'
    const defaultAbi = multiSend_1_4_1_ContractArtifacts.abi as MultiSendContract_v1_4_1_Abi

    super(chainId, web3Adapter, defaultAbi, safeVersion, customContractAddress, customContractAbi)

    this.safeVersion = safeVersion
  }
}

export default MultiSendContract_v1_4_1_Web3
