package com.genie.api.model.request;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class RewardsCardInfoRequest {
    private Integer cardLastFourDigits;

    public RewardsCardInfoRequest() {
        super();
    }

    public RewardsCardInfoRequest(Integer cardLastFourDigits) {
        super();
    }

    public Integer getCardLastFourDigits() {
        return cardLastFourDigits;
    }

    public void setCardLastFourDigits(Integer cardLastFourDigits) {
        this.cardLastFourDigits = cardLastFourDigits;
    }
}
