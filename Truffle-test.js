const truffleTest = artifacts.require("TestingForTruffle");


contract("TestingForTruffle",()=>{
    let testTruffle;
beforeEach(async ()=>{
    testTruffle = await truffleTest.new(3); //specify arguments if it has a constructor
    // web3.eth.sendTransaction({from: accounts[0],to:truffleTest.address,value :100});

});

it("should give a number 3", async ()=>{
    const number = await testTruffle.getTestNumber(); //you can access a function directly
    const numberuint = await testTruffle.test(); //you can also access a public variable
    assert(number.toNumber() === 3); //in case of using large numbers you need to use BN library
    assert(numberuint.toString()=== "3") // another way to check big numbers is using string


});

});

/*

using this contract to test 
pragma solidity ^0.8.0;
contract TestingForTruffle{

uint public test;

constructor(uint _test) public{
    test = _test;
}

function getTestNumber() public view returns(uint){
    return test;
}
}
*/
