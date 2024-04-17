import { Abi } from 'abitype'
import BaseContract, {
  AdapterSpecificContractFunction,
  ContractReadFunctionNames,
  EstimateGasFunction
} from '../common/BaseContract'

/**
 * Represents the base contract type for a SignMessageLib contract.
 *
 * @template SignMessageLibContractAbi - The ABI of the SignMessageLib contract.
 * @type {SignMessageLibBaseContract}
 */
type SignMessageLibBaseContract<SignMessageLibContractAbi extends Abi> = BaseContract<
  SignMessageLibContractAbi,
  ContractReadFunctionNames<SignMessageLibContractAbi>
> & {
  estimateGas: EstimateGasFunction<SignMessageLibContractAbi>
  signMessage: AdapterSpecificContractFunction<SignMessageLibContractAbi, 'signMessage'>
}

export default SignMessageLibBaseContract
