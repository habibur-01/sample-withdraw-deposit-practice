document.getElementById('deposit-btn').addEventListener('click', function(){
    const newDepositField = document.getElementById('new-deposit-field')
    // console.log(newDepositField.value)
    const newDepositAmount = parseFloat(newDepositField.value)
    // console.log(newDepositAmount)
    const previousDepositField = document.getElementById('deposit-field')
    const previousDepositAmount = parseFloat(previousDepositField.innerText)
    // console.log(previousDepositField.innerText)
    const totalDepositAmount = previousDepositAmount + newDepositAmount
    previousDepositField.innerText = totalDepositAmount
    const balanceField = document.getElementById('balance-field')
    const previousBalance =  parseFloat(balanceField.innerText)
    const currentTotalBalance =previousBalance + newDepositAmount
    // console.log(currentTotalBalance)
    balanceField.innerText = currentTotalBalance 

    newDepositField.value = ''


})


document.getElementById('withdraw-btn').addEventListener('click', function(){
    const newWithdrawField = document.getElementById('new-withdraw-field')
    // console.log(newDepositField.value)
    const newWithdrawAmount = parseFloat(newWithdrawField.value)
    // console.log(newDepositAmount)
    const previousWithdrawField = document.getElementById('withdraw-field')
    const previousWithdrawAmount = parseFloat(previousWithdrawField.innerText)
    // console.log(previousDepositField.innerText)
    const totalWithdrawAmount = previousWithdrawAmount + newWithdrawAmount
    previousWithdrawField.innerText = totalWithdrawAmount
    const balanceField = document.getElementById('balance-field')
    const previousBalance =  parseFloat(balanceField.innerText)
    const currentTotalBalance =previousBalance - newWithdrawAmount
    // console.log(currentTotalBalance)
    balanceField.innerText = currentTotalBalance 

    newWithdrawField.value = ''


})