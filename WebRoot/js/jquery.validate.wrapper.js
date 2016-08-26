var dialogIdSeed = 1000000000;
function jQueryValidatorWrapper(formId, rules, messages) {
    var dialogId = "V_dia_log" + dialogIdSeed++;
    while ($("#" + dialogId).length != 0) {
        alert(dialogId);
        dialogId = "V_dia_log" + dialogIdSeed++;
    }
 
    var dialogText = "<div id='" + dialogId
            + "' title='Please correct the errors ...'>"
            + "<ul /></div>";
    $("body").append(dialogText);
    var $dialog = $("#" + dialogId);
    var $ul = $("#" + dialogId + ">ul");
 
    $dialog.dialog({
        autoOpen: false,
        modal: true,
        close: function (event, ui) {
            $ul.html("");
        }
    });
    var showErrorMessage = false;
    var validator = $("#" + formId).validate({
        onchange: true,
        rules: rules,
        messages: messages,
        errorPlacement: function (error, element) {
            if (showErrorMessage) {
                var li = document.createElement("li")
                li.appendChild(document
                    .createTextNode(error.html()));
                $ul.append(li);
            }
        },
        showErrors: function (errorMap, errorList) {
            this.defaultShowErrors();
            if ((errorList.length != 0) && showErrorMessage) {
                $dialog.dialog('open');
            }
        }
    });
    this.validate = function () {
        showErrorMessage = true;
        var result = validator.form();
        showErrorMessage = false;
 
        return result;
    };
}