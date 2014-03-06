function login() {
    var myMerchants = Alloy.Collections.merchants;

    // Create a new model for the merchant collection
    var merchant = Alloy.createModel('merchants', {
        wallet_name : $.walletNameField.value
    });
    
	Alloy.Globals.currentWallet = $.walletNameField.value;   
	
	// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	// if none given, use default for testing
	// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	
    // add new model to the global collection
    myMerchants.add(merchant);

    // save the model to persistent storage
    merchant.save();

    // reload the tasks
    myMerchants.fetch();

    closeWindow();
    
    Alloy.createController("neworder").getView().open();
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
