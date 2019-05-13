package com.jfeat.am.module.ow.api.crud.ad;

import com.jfeat.am.common.constant.tips.SuccessTip;
import com.jfeat.am.common.constant.tips.Tip;
import com.jfeat.am.common.controller.BaseController;
import com.jfeat.am.module.advertisement.services.persistence.model.AdGroup;
import com.jfeat.am.module.advertisement.services.service.AdGroupService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.*;

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
@RequestMapping("/api")
@Api("AD-轮播图")
public class PortalAdGroupEndpoint extends BaseController {

    @Resource
    private AdGroupService adGroupService;

    @GetMapping("/pub/banner/groups")
    @ApiOperation("获取轮播图分类列表")
    public Tip listAdGroups() {
        return SuccessTip.create(adGroupService.retrieveMasterList());
    }

    @PostMapping("/adm/banner/groups")
    @ApiOperation("添加轮播图分类")
    public Tip createAdGroup(@RequestBody AdGroup entity) {
        return SuccessTip.create(adGroupService.createMaster(entity));
    }

    @PutMapping("/adm/banner/groups/{id}")
    @ApiOperation("更新轮播图分类")
    public Tip updateAdGroup(@PathVariable Long id, @RequestBody AdGroup entity) {
        return SuccessTip.create(adGroupService.updateMaster(entity));
    }

    @ApiOperation("删除轮播图分类")
    @DeleteMapping("/adm/banner/groups/{id}")
    public Tip deleteAdGroup(@PathVariable Long id) {
        return SuccessTip.create(adGroupService.deleteMaster(id));
    }
}
