import { BaseItem } from './item.common';
import SkuDetails = com.android.billingclient.api.SkuDetails;

export class Item extends BaseItem {
    constructor(nativeValue: SkuDetails) {
        super(nativeValue);

        this.itemId = nativeValue.getSku();
        this.localizedDescription = nativeValue.getDescription();
        this.localizedTitle = nativeValue.getTitle();
        this.priceAmount = nativeValue.getPriceAmountMicros() / 1000000;
        this.priceFormatted = nativeValue.getPrice();
        this.priceCurrencyCode = nativeValue.getPriceCurrencyCode();
        this.type = nativeValue.getType();
    }

    public get debug(): string {
        return (<SkuDetails>this.nativeValue).toString();
    }
}