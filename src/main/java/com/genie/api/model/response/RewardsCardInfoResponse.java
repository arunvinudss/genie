package com.genie.api.model.response;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class RewardsCardInfoResponse {

    private Integer rewardsPoints;

    public RewardsCardInfoResponse() {
        super();
    }

    public RewardsCardInfoResponse(Integer cardLastFourDigits) {
        super();
    }

    public Integer getRewardsPoints() {
        return rewardsPoints;
    }

    public void setRewardsPoints(Integer rewardsPoints) {
        this.rewardsPoints = rewardsPoints;
    }

}
