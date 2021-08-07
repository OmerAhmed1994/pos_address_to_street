odoo.define('pos_address_to_street.model', function (require) {
    "use strict";
    var models = require('point_of_sale.models');

  
    var _super_order = models.Order.prototype;
    models.Order = models.Order.extend({
        export_for_printing: function () {
            var res = _super_order.export_for_printing.call(this);
            res.card_balance = this.get_card_balance();
            return res;
        },
    });


});


