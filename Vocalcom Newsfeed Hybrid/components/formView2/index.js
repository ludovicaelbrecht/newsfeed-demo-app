'use strict';

app.formView2 = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});

// START_CUSTOM_CODE_formView2
// END_CUSTOM_CODE_formView2
(function(parent) {
    var formView2Model = kendo.observable({
        fields: {
            date: '',
            dropdownlist: '',
            switch: '',
            search: '',
            url: '',
        },
        submit: function() {},
        cancel: function() {}
    });

    parent.set('formView2Model', formView2Model);
})(app.formView2);

// START_CUSTOM_CODE_formView2Model
// END_CUSTOM_CODE_formView2Model