package com.genie.api.rest;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.genie.api.model.response.RewardsCardInfoResponse;
import com.genie.api.service.RewardsCardInfoService;

@Path("/rewards-info")
@Component
public class RewardsCardInfoResource {

    @Autowired
    private RewardsCardInfoService rewardsCardInfoService;

    @GET
    @Produces({MediaType.APPLICATION_JSON})
    public RewardsCardInfoResponse allBeers() {
        return rewardsCardInfoService.getRewardsCardInfo();
    }
}
