


document.getElementById('select-1').addEventListener('click', function () {
    commonLines('player-one');



    // const playerName = document.getElementById('player-one');
    // const name = playerName.innerText;

    // const setName = document.getElementById('ul-list');
    // setName.innerText = name;




});
document.getElementById('select-2').addEventListener('click', function () {
    commonLines('player-two');



    // console.log('2')
})

document.getElementById('select-3').addEventListener('click', function () {
    commonLines('player-three');
});

document.getElementById('select-4').addEventListener('click', function () {
    commonLines('player-four');
});

document.getElementById('select-5').addEventListener('click', function () {
    commonLines('player-five');
});

document.getElementById('select-6').addEventListener('click', function () {
    commonLines('player-six');
});




document.getElementById('calculate-btn').addEventListener('click', function () {

    const player = document.getElementById('ol-list');
    const playerNumberString = player.getElementsByTagName('li').length;



    const playerNumberInt = parseInt(playerNumberString);
    console.log(playerNumberInt);

    const perPlayerExpense = document.getElementById('per-player');
    const onePlayerExpense = perPlayerExpense.value;

    const playerExpense = onePlayerExpense * playerNumberInt;
    console.log(playerExpense);

    const playerExpenseFild = document.getElementById('player-expense');
    playerExpenseFild.value = playerExpense;







    document.getElementById('calculateTotal-btn').addEventListener('click', function () {
        console.log('kk')
        const managerExpense = document.getElementById('manager-expense');
        const managerExpenseAmountString = managerExpense.value;
        const managerExpenseAmount = parseInt(managerExpenseAmountString);
        console.log(managerExpenseAmount);

        const coachExpense = document.getElementById('coach-expense');
        const coachExpenseAmountString = coachExpense.value;
        const coachExpenseAmount = parseInt(coachExpenseAmountString);
        console.log(coachExpenseAmount);


        const totalExpenseAmountString = playerExpense + managerExpenseAmount + coachExpenseAmount;
        console.log(totalExpenseAmountString);
        const totalExpenseAmount = parseInt(totalExpenseAmountString);
        const totalExpense = document.getElementById('total-expense');
        totalExpense.innerText = totalExpenseAmount;






    });
});


