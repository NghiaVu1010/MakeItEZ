window.onload = function() 
{
    var regForm = document.getElementById('regForm');
    
    // Display messages
    var passHelp = document.getElementById('passHelp');
    var passConfirm = document.getElementById('passConfirm');

    regForm.onsubmit = function(submitEvent) {
        submitEvent.preventDefault();

        // Get Form fields from DOM
        var password = document.getElementById('userPassword')
        var passwordConfirm = document.getElementById('userPasswordConfirm');

        // Get user input values from form fields
        var passwordVal = password.value;
        var passwordConfirmVal = passwordConfirm.value;

        // Create requirement benchmark for password
        var regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,18}/;

        // Evaluate expression to see if true
        if(regExp.test(passwordVal)) {
            passHelp.style.display = 'none';
            
            // If previous is true and if passwords are same, continue
            if (passwordVal == passwordConfirmVal) {
                passConfirm.style.display = 'none';
                document.location.href = 'recipe_search.html';
            }

            // Display message if false
            else {
                passConfirm.style.display = 'block';
            }
        }

        // Evaluate to see if passwords are the same
        else if (passwordVal == passwordConfirmVal) {
            passConfirm.style.display = 'none';
        }

        // Display message if false
        else {
            passHelp.style.display = 'block';
        }
    }

    // Get Reset Button Element from DOM
    var resetBtn = document.getElementById('resetBtn');

    // Bind Click Event Handler to Reset Buttom
    resetBtn.onclick = function() {
        // Hide Success and Fail Message Elements
        passHelp.style.display = 'none';
        passConfirm.style.display = 'none';

        // Put cursor in First Name field
        document.getElementById('userFirstName').focus();
    }
};