pragma solidity 0.5.12;

contract FunctionTypesDemo {

    struct Operation {
        uint a;
        uint b;
        function (uint, uint) internal pure returns (uint) f;
    }

    mapping(uint => Operation) operations;
    uint public operationCount = 1;

    event OperationAdded(uint operationId);

    function addOperation(uint a, uint b, string memory operation) public {
        Operation storage currentOperation = operations[operationCount];
        currentOperation.a = a;
        currentOperation.b = b;

        if (keccak256(bytes(operation)) == keccak256(bytes("+"))) {
            currentOperation.f = add;
        } else if (keccak256(bytes(operation)) == keccak256(bytes("*"))) {
            currentOperation.f = multiply;
        } else {
            revert("Invalid Operation");
        }

        operationCount++;

        emit OperationAdded(operationCount - 1);
    }

    function executeOperation(uint operationId) public view returns(uint) {
        Operation memory currentOperation = operations[operationId];
        return currentOperation.f(currentOperation.a, currentOperation.b);
    }

    function add(uint a, uint b) internal pure returns (uint) {
        return a + b;
    }

    function multiply(uint a, uint b) internal pure returns (uint) {
        return a * b;
    }
}
