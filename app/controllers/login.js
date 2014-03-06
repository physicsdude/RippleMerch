function login() {
    var merchant = Alloy.Collections.merchants;

    // Create a new model for the merchant collection
    var login = Alloy.createModel('merchants', {
        wallet_name : $.walletNameField.value
    });

    // add new model to the global collection
    merchant.add(wallet_name);

    // save the model to persistent storage
    merchant.save();

    // reload the tasks
    merchants.fetch();

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
