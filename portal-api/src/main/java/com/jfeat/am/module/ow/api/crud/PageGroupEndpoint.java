package com.jfeat.am.module.ow.api.crud;


import com.jfeat.am.module.ow.services.domain.dao.QueryPageDao;
import com.jfeat.am.module.ow.services.domain.model.record.PageRecord;
import com.jfeat.am.module.ow.services.persistence.model.Page;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PathVariable;
import com.jfeat.crud.base.tips.SuccessTip;
import com.jfeat.crud.base.tips.Tip;
import com.jfeat.am.module.log.annotation.BusinessLog;
import com.jfeat.am.module.ow.services.domain.service.*;


import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.Date;


/**
 * <p>
 * api
 * </p>
 *
 * @author Code Generator
 * @since 2019-12-10
 */
@RestController

@Api("Page")
@RequestMapping("/api/crud/crud/pages")
public class PageGroupEndpoint {


    @Resource
    PageGroupService pageGroupService;

    @Resource
    PageGroupbyService pageGroupbyService;

    @Resource
    QueryPageDao queryPageDao;

/*    @BusinessLog(name = "Page", value = "create Page")
    @PostMapping
    @ApiOperation(value = "新建 Page", response = Page.class)
    public Tip createPage(@RequestBody Page entity) {

        Integer affected = 0;
        try {
            affected = pageGroupService.createGroup(entity);

        } catch (DuplicateKeyException e) {
            throw new BusinessException(BusinessCode.DuplicateKey);
        }

        return SuccessTip.create(affected);
    }*/

    @GetMapping("/{id}")
    @ApiOperation(value = "返回 某个页面的菜单 树状", response = Page.class)
    public Tip getPage(@PathVariable Long id) {
        return SuccessTip.create(pageGroupbyService.getGroupItems(id));
    }




    @ApiOperation(value = "返回页面+菜单 树状", response = PageRecord.class)
    @GetMapping
    public Tip queryPages() {

        //return SuccessTip.create(pageGroupService.getGroupTuples());
        return SuccessTip.create(pageGroupbyService.groupBy());
    }
}
