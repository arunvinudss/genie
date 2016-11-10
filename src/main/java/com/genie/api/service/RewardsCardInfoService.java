package com.genie.api.service;

import javax.inject.Singleton;

import org.springframework.stereotype.Service;

import com.genie.api.model.response.RewardsCardInfoResponse;

@Singleton
@Service
public class RewardsCardInfoService {

    public RewardsCardInfoResponse getRewardsCardInfo() {
        RewardsCardInfoResponse rewardsCardInfoResponse = new RewardsCardInfoResponse();
        rewardsCardInfoResponse.setRewardsPoints(100);

        /*
         * Client client = ClientBuilder.newClient();
         * 
         * 
         * Response response = client.target(Constants.BASE_URL).path("rewards/accounts").request().get();
         * 
         * if (response != null && Status.OK.getStatusCode() == response.getStatus()) { rewardsCardInfoResponse =
         * response.readEntity(RewardsCardInfoResponse.class); }
         */

        return rewardsCardInfoResponse;
    }

}
