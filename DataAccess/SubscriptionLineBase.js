var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Record", "N/record"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SubscriptionLineBase = void 0;
    var Record_1 = require("./Record");
    var record = require("N/record");
    /**
     * NetSuite Subscription Line record type
     */
    var SubscriptionLineBase = /** @class */ (function (_super) {
        __extends(SubscriptionLineBase, _super);
        function SubscriptionLineBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SubscriptionLineBase.recordType = function () { return record.Type.SUBSCRIPTION_LINE; };
        __decorate([
            Record_1.FieldType.integernumber
        ], SubscriptionLineBase.prototype, "advancerenewalperiodnumber", void 0);
        __decorate([
            Record_1.FieldType.select
        ], SubscriptionLineBase.prototype, "advancerenewalperiodunit", void 0);
        __decorate([
            Record_1.FieldType.date
        ], SubscriptionLineBase.prototype, "billingaccountstartdate", void 0);
        __decorate([
            Record_1.FieldType.select
        ], SubscriptionLineBase.prototype, "billingmode", void 0);
        __decorate([
            Record_1.FieldType.select
        ], SubscriptionLineBase.prototype, "catalogtype", void 0);
        __decorate([
            Record_1.FieldType.select
        ], SubscriptionLineBase.prototype, "currency", void 0);
        __decorate([
            Record_1.FieldType.select
        ], SubscriptionLineBase.prototype, "customform", void 0);
        __decorate([
            Record_1.FieldType.date
        ], SubscriptionLineBase.prototype, "enddate", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], SubscriptionLineBase.prototype, "externalid", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], SubscriptionLineBase.prototype, "includeinrenewal", void 0);
        __decorate([
            Record_1.FieldType.select
        ], SubscriptionLineBase.prototype, "item", void 0);
        __decorate([
            Record_1.FieldType.integernumber
        ], SubscriptionLineBase.prototype, "linenumber", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], SubscriptionLineBase.prototype, "ponumber", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], SubscriptionLineBase.prototype, "prorateenddate", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], SubscriptionLineBase.prototype, "proratestartdate", void 0);
        __decorate([
            Record_1.FieldType.date
        ], SubscriptionLineBase.prototype, "recurrencestartdate", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], SubscriptionLineBase.prototype, "revrecoption", void 0);
        __decorate([
            Record_1.FieldType.date
        ], SubscriptionLineBase.prototype, "startdate", void 0);
        __decorate([
            Record_1.FieldType.select
        ], SubscriptionLineBase.prototype, "salesorder", void 0);
        __decorate([
            Record_1.FieldType.integernumber
        ], SubscriptionLineBase.prototype, "salesorderlinenumber", void 0);
        __decorate([
            Record_1.FieldType.select
        ], SubscriptionLineBase.prototype, "subscriptionlinestatus", void 0);
        __decorate([
            Record_1.FieldType.select
        ], SubscriptionLineBase.prototype, "subscription", void 0);
        __decorate([
            Record_1.FieldType.select
        ], SubscriptionLineBase.prototype, "subscriptionplan", void 0);
        __decorate([
            Record_1.FieldType.select
        ], SubscriptionLineBase.prototype, "subscriptionlinetype", void 0);
        __decorate([
            Record_1.FieldType.date
        ], SubscriptionLineBase.prototype, "terminationdate", void 0);
        __decorate([
            Record_1.FieldType.currency
        ], SubscriptionLineBase.prototype, "total", void 0);
        return SubscriptionLineBase;
    }(Record_1.NetsuiteRecord));
    exports.SubscriptionLineBase = SubscriptionLineBase;
});