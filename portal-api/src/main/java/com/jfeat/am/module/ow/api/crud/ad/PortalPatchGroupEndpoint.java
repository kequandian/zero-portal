package com.jfeat.am.module.ow.api.crud.ad;

import com.jfeat.am.module.advertisement.services.service.PatchGroupService;
import com.jfeat.crud.base.tips.SuccessTip;
import com.jfeat.crud.base.tips.Tip;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

/**
 * <p>
 *  运维API, 不提供配置
 * </p>
 *
 * @author admin
 * @since 2017-09-20
 */
@RestController
@RequestMapping("/api/adm/banner/groups/data")
public class PortalPatchGroupEndpoint  {
    @Resource
    private PatchGroupService patchGroupService;

    @GetMapping
    public Tip getAllGroupData() {
        return SuccessTip.create(patchGroupService.getAllGroupData());
    }
}
