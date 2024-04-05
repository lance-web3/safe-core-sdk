import { ContractRunner, EventLog } from 'ethers'
import SafeProxyFactoryBaseContractEthers, {
  CreateProxyProps
} from '@safe-global/protocol-kit/adapters/ethers/contracts/SafeProxyFactory/SafeProxyFactoryBaseContractEthers'
import EthersAdapter from '@safe-global/protocol-kit/adapters/ethers/EthersAdapter'
import safeProxyFactory_1_1_1_ContractArtifacts from '@safe-global/protocol-kit/contracts/AbiType/assets/SafeProxyFactory/v1.1.1/proxy_factory'
import SafeProxyFactoryContract_v1_1_1_Contract, {
  SafeProxyFactoryContract_v1_1_1_Abi,
  SafeProxyFactoryContract_v1_1_1_Function
} from '@safe-global/protocol-kit/contracts/AbiType/SafeProxyFactory/v1.1.1/SafeProxyFactoryContract_v1_1_1'
import { SafeVersion } from '@safe-global/safe-core-sdk-types'

/**
 * SafeProxyFactoryContract_v1_1_1_Ethers is the implementation specific to the Safe Proxy Factory contract version 1.1.1.
 *
 * This class specializes in handling interactions with the Safe Proxy Factory contract version 1.1.1 using Ethers.js v6.
 *
 * @extends SafeProxyFactoryBaseContractEthers<SafeProxyFactoryContract_v1_1_1_Abi> - Inherits from SafeProxyFactoryBaseContractEthers with ABI specific to Safe Proxy Factory contract version 1.1.1.
 * @implements SafeProxyFactoryContract_v1_1_1_Contract - Implements the interface specific to Safe Proxy Factory contract version 1.1.1.
 */
class SafeProxyFactoryContract_v1_1_1_Ethers
  extends SafeProxyFactoryBaseContractEthers<SafeProxyFactoryContract_v1_1_1_Abi>
  implements SafeProxyFactoryContract_v1_1_1_Contract
{
  safeVersion: SafeVersion

  /**
   * Constructs an instance of SafeProxyFactoryContract_v1_1_1_Ethers
   *
   * @param chainId - The chain ID where the contract resides.
   * @param ethersAdapter - An instance of EthersAdapter.
   * @param customContractAddress - Optional custom address for the contract. If not provided, the address is derived from the Safe deployments based on the chainId and safeVersion.
   * @param customContractAbi - Optional custom ABI for the contract. If not provided, the default ABI for version 1.1.1 is used.
   */
  constructor(
    chainId: bigint,
    ethersAdapter: EthersAdapter,
    customContractAddress?: string,
    customContractAbi?: SafeProxyFactoryContract_v1_1_1_Abi,
    runner?: ContractRunner | null
  ) {
    const safeVersion = '1.1.1'
    const defaultAbi = safeProxyFactory_1_1_1_ContractArtifacts.abi

    super(
      chainId,
      ethersAdapter,
      defaultAbi,
      safeVersion,
      customContractAddress,
      customContractAbi,
      runner
    )

    this.safeVersion = safeVersion
  }

  /**
   * Allows to retrieve the creation code used for the Proxy deployment. With this it is easily possible to calculate predicted address.
   * @returns Array[creationCode]
   */
  proxyCreationCode: SafeProxyFactoryContract_v1_1_1_Function<'proxyCreationCode'> = async () => {
    return [await this.contract.proxyCreationCode()]
  }

  /**
   * Allows to retrieve the runtime code of a deployed Proxy. This can be used to check that the expected Proxy was deployed.
   * @returns Array[runtimeCode]
   */
  proxyRuntimeCode: SafeProxyFactoryContract_v1_1_1_Function<'proxyRuntimeCode'> = async () => {
    return [await this.contract.proxyRuntimeCode()]
  }

  /**
   * Allows to get the address for a new proxy contact created via `createProxyWithNonce`.
   * @param args - Array[masterCopy, initializer, saltNonce]
   * @returns Array[proxyAddress]
   */
  calculateCreateProxyWithNonceAddress: SafeProxyFactoryContract_v1_1_1_Function<'calculateCreateProxyWithNonceAddress'> =
    async (args) => {
      return [await this.contract.calculateCreateProxyWithNonceAddress(...args)]
    }

  /**
   * Allows to create new proxy contact and execute a message call to the new proxy within one transaction.
   * @param args - Array[masterCopy, data]
   * @returns Array[proxyAddress]
   */
  createProxy: SafeProxyFactoryContract_v1_1_1_Function<'createProxy'> = async (args) => {
    return [await this.contract.createProxy(...args)]
  }

  /**
   * Allows to create new proxy contract, execute a message call to the new proxy and call a specified callback within one transaction.
   * @param args - Array[masterCopy, initializer, saltNonce, callback]
   * @returns Array[proxyAddress]
   */
  createProxyWithCallback: SafeProxyFactoryContract_v1_1_1_Function<'createProxyWithCallback'> =
    async (args) => {
      return [await this.contract.createProxyWithCallback(...args)]
    }

  /**
   * Allows to create new proxy contract and execute a message call to the new proxy within one transaction.
   * @param args - Array[masterCopy, initializer, saltNonce]
   * @returns Array[proxyAddress]
   */
  createProxyWithNonce: SafeProxyFactoryContract_v1_1_1_Function<'createProxyWithNonce'> = async (
    args
  ) => {
    return [await this.contract.createProxyWithNonce(...args)]
  }

  /**
   * Allows to create new proxy contract and execute a message call to the new proxy within one transaction.
   * @param {CreateProxyProps} props - Properties for the new proxy contract.
   * @returns The address of the new proxy contract.
   */
  async createProxyWithOptions({
    safeSingletonAddress,
    initializer,
    saltNonce,
    options,
    callback
  }: CreateProxyProps): Promise<string> {
    const saltNonceBigInt = BigInt(saltNonce)

    if (saltNonceBigInt < 0) throw new Error('saltNonce must be greater than or equal to 0')

    if (options && !options.gasLimit) {
      options.gasLimit = (
        await this.estimateGas(
          'createProxyWithNonce',
          [safeSingletonAddress, initializer, saltNonceBigInt],
          { ...options }
        )
      ).toString()
    }

    const proxyAddress = this.contract
      .createProxyWithNonce(safeSingletonAddress, initializer, saltNonce, { ...options })
      .then(async (txResponse) => {
        if (callback) {
          callback(txResponse.hash)
        }
        const txReceipt = await txResponse.wait()
        const events = txReceipt?.logs as EventLog[]
        const proxyCreationEvent = events.find((event) => event?.eventName === 'ProxyCreation')
        if (!proxyCreationEvent || !proxyCreationEvent.args) {
          throw new Error('SafeProxy was not deployed correctly')
        }
        const proxyAddress: string = proxyCreationEvent.args[0]
        return proxyAddress
      })
    return proxyAddress
  }

  // TODO: Remove this mapper after remove Typechain
  mapToTypechainContract(): any {
    return {
      contract: this.contract,

      encode: this.encode.bind(this),

      estimateGas: async (...args: Parameters<typeof this.estimateGas>) =>
        (await this.estimateGas(...args)).toString(),

      createProxy: this.createProxyWithOptions.bind(this),

      getAddress: this.getAddress.bind(this),

      proxyCreationCode: async () => (await this.proxyCreationCode())[0]
    }
  }
}

export default SafeProxyFactoryContract_v1_1_1_Ethers
