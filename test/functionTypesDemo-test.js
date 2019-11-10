const FunctionTypesDemo = artifacts.require('./FunctionTypesDemo.sol');

before(async function () {
   this.functionTypesDemo = await FunctionTypesDemo.new();
})

contract("FunctionTypesDemo", function () {
    it("#AddOperation - plus", async function () {
        const operation = "+";
        const a = 5;
        const b = 15;

        const result = await this.functionTypesDemo.addOperation(a, b, operation);
        expect(result.logs[0].args.operationId.toNumber()).to.equal(1);
    })

    it("#ExecuteOperation - plus", async function () {
        const operationId = 1;
        const expectedResultPlus = 20;

        const result = await this.functionTypesDemo.executeOperation(operationId);
        expect(result.toNumber()).to.equal(expectedResultPlus);
    })

    it("#AddOperation - multiply", async function () {
        const operation = "*";
        const a = 5;
        const b = 15;

        const result = await this.functionTypesDemo.addOperation(a, b, operation);
        expect(result.logs[0].args.operationId.toNumber()).to.equal(2);
    })

    it("#ExecuteOperation - plus", async function () {
        const operationId = 2;
        const expectedResultMultiply = 75;

        const result = await this.functionTypesDemo.executeOperation(operationId);
        expect(result.toNumber()).to.equal(expectedResultMultiply);
    })
})