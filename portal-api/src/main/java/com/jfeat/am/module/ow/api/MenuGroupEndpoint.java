package com.jfeat.am.module.ow.api;


import com.jfeat.am.module.ow.services.persistence.model.Menu;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PathVariable;
import com.jfeat.am.module.ow.services.domain.dao.QueryMenuDao;
import com.jfeat.crud.base.tips.SuccessTip;
import com.jfeat.crud.base.tips.Tip;
import com.jfeat.am.module.log.annotation.BusinessLog;

import com.jfeat.am.module.ow.services.domain.service.MenuGroupService;

import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;


/**
 * <p>
 * api
 * </p>
 *
 * @author Code Generator
 * @since 2019-12-10
 */
@RestController

@Api("Menu")
@RequestMapping("/api/crud/ow/menus")
public class MenuGroupEndpoint {


    @Resource
    MenuGroupService menuGroupService;

    @Resource
    QueryMenuDao queryMenuDao;


    @BusinessLog(name = "Menu", value = "查看 Menu")
    @GetMapping("/{id}")
    @ApiOperation(value = "返回子菜单", response = Menu.class)
    public Tip getMenu(@PathVariable Long id) {
        return SuccessTip.create(menuGroupService.getGroupChildren(id));
    }

    @ApiOperation(value = "菜单 列表信息")
    @GetMapping
    public Tip queryMenus( ) {
        return SuccessTip.create( menuGroupService.getGroupTuples());
    }
}
