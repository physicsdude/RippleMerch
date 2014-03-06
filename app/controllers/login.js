function login() {
    var myMerchants = Alloy.Collections.merchants;

    // Create a new model for the merchant collection
    var merchant = Alloy.createModel('merchants', {
        wallet_name : $.walletNameField.value
    });

    // add new model to the global collection
    myMerchants.add(merchant);

    // save the model to persistent storage
    merchant.save();

    // reload the tasks
    myMerchants.fetch();

    closeWindow();
    
}

function focusTextField() {
    $.walletNameField.focus();
}

function closeKeyboard(e) {
    e.source.blur();
}

function closeWindow() {
    $.loginWin.close();
}
